import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { ResearchQualityPage } from './pages/ResearchQualityPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { FutureScopesPage } from './pages/FutureScopesPage';
import { MobileBottomNav } from './components/layout/MobileBottomNav';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:sector/:sku" element={<ProductDetailPage />} />
        <Route path="/products/:sku" element={<ProductDetailPage />} />
        <Route path="/product/:sector/:sku" element={<ProductDetailPage />} />
        <Route path="/product/:sku" element={<ProductDetailPage />} />
        <Route path="/future-scopes" element={<FutureScopesPage />} />
        <Route path="/future-scope" element={<FutureScopesPage />} />
        <Route path="/research-and-quality" element={<ResearchQualityPage />} />
        <Route path="/research" element={<ResearchQualityPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <MobileBottomNav />
    </Router>
  );
};

export default App;
