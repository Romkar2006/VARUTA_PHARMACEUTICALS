const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

const doctorDataRoutes = require('./routes/doctorData');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(helmet({
  crossOriginResourcePolicy: false
}));

// Robust CORS allowing Vercel previews, custom domains, and localhost
app.use(cors({
  origin: (origin, callback) => {
    // Allow server-to-server or tools with no origin header
    if (!origin) return callback(null, true);
    
    // Always allow localhost and any Vercel deployment
    if (
      origin.includes('localhost') ||
      origin.includes('.vercel.app') ||
      origin.includes('varutapharmaceuticals.com')
    ) {
      return callback(null, true);
    }

    // Allow configured CLIENT_URL
    if (process.env.CLIENT_URL && origin.replace(/\/$/, '') === process.env.CLIENT_URL.replace(/\/$/, '')) {
      return callback(null, true);
    }

    // Fallback permissive to avoid blocking valid frontend deployments
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());
app.use(morgan('dev'));

// Serve static assets (such as logo-email.png and pdfs) over public HTTPS
app.use(express.static(path.join(__dirname, '../public')));
app.use('/public', express.static(path.join(__dirname, '../public')));

// Root route
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Varuta Pharma Backend API is running',
    health: '/api/health'
  });
});

// Support both /api/doctors and /doctors to avoid URL mismatch bugs
app.use('/api/doctors', doctorDataRoutes);
app.use('/doctors', doctorDataRoutes);

// Health check endpoints
app.get(['/api/health', '/health'], (req, res) => {
  res.json({
    status: 'ok',
    system: 'Varuta Pharma API',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Varuta Pharma MERN Backend running on port ${PORT}`);
});
