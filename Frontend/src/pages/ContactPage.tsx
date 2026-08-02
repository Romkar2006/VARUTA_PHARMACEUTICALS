import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Mail, Phone, MapPin, Building2, ShieldCheck, CheckCircle2, FileText, Send, Sparkles, Globe } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    designation: 'Physician / HCP',
    email: '',
    phone: '',
    sector: 'Iron Deficiency & Immunity',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#1c1c1e] selection:bg-[#0b835c] selection:text-white font-sans">
      <Navbar />

      <main className="pt-28 pb-20">
        
        {/* Page Hero Header */}
        <section className="py-20 bg-gradient-to-b from-emerald-50/50 via-white to-white border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div>
              <span className="tag-pill-green bg-white shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0b835c]" />
                CONNECT WITH VARUTA PHARMA PVT. LTD.
              </span>
            </div>

            <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-[60px] font-normal text-[#1c1c1e] leading-[1.12] tracking-tight max-w-4xl">
              Get in Touch with Our{' '}
              <span className="text-[#0b835c] italic font-normal">Corporate Team.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#303033] font-medium leading-relaxed max-w-3xl">
              For physician prescribing inquiries, HCP clinical dossiers, distribution partnerships, or statutory FSSAI compliance verifications.
            </p>
          </div>
        </section>

        {/* Contact Form & Office Cards Section */}
        <section className="py-20 bg-white border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column (5 cols): Dual Office Locations & Direct Contacts */}
              <div className="lg:col-span-5 space-y-6">
                
                <div>
                  <span className="clinical-label text-[11px]">OUR CORPORATE LOCATIONS</span>
                  <h2 className="font-editorial-serif text-3xl text-[#1c1c1e] font-normal tracking-tight mt-1">
                    Dual Office <span className="text-[#0b835c] italic font-normal">Network</span>
                  </h2>
                </div>

                {/* Registered Office (Pune) */}
                <div className="p-6 rounded-[28px] bg-[#f8fafc] border border-slate-200/90 shadow-xs space-y-3">
                  <div className="flex items-center gap-3 text-[#0b835c]">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#0b835c] flex items-center justify-center border border-slate-200/80 shadow-xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="clinical-label text-xs font-bold text-[#0b835c]">REGISTERED OFFICE</span>
                  </div>
                  <h4 className="text-base font-bold text-[#1c1c1e]">Varuta Pharma Pvt. Ltd.</h4>
                  <p className="text-xs text-[#676768] leading-relaxed">
                    Flat No. B-120, Sebiyan Apartments, Street No. 2/1/1, Near Indu Lawns, Pune, Maharashtra 411046
                  </p>
                </div>

                {/* Corporate Office (Hyderabad) */}
                <div className="p-6 rounded-[28px] bg-[#f8fafc] border border-slate-200/90 shadow-xs space-y-3">
                  <div className="flex items-center gap-3 text-[#0b835c]">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#0b835c] flex items-center justify-center border border-slate-200/80 shadow-xs">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="clinical-label text-xs font-bold text-[#0b835c]">CORPORATE OFFICE</span>
                  </div>
                  <h4 className="text-base font-bold text-[#1c1c1e]">Varuta Pharma Pvt. Ltd.</h4>
                  <p className="text-xs text-[#676768] leading-relaxed">
                    H No, Srt 283, Alwyn Housing Colony, Sanath Nagar, Hyderabad, Telangana 500018
                  </p>
                </div>

                {/* International Office (Australia) */}
                <div className="p-6 rounded-[28px] bg-[#f8fafc] border border-slate-200/90 shadow-xs space-y-3">
                  <div className="flex items-center gap-3 text-[#0b835c]">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#0b835c] flex items-center justify-center border border-slate-200/80 shadow-xs">
                      <Globe className="w-4 h-4" />
                    </div>
                    <span className="clinical-label text-xs font-bold text-[#0b835c]">INTERNATIONAL OFFICE</span>
                  </div>
                  <h4 className="text-base font-bold text-[#1c1c1e]">Varuta Pharma Pvt. Ltd.</h4>
                  <p className="text-xs text-[#676768] leading-relaxed">
                    Suite 7.12, Level 7, 365 Little Collins St., Melbourne, VIC 3000, Australia
                  </p>
                </div>

                {/* Direct Communications Badges */}
                <div className="p-6 rounded-[28px] bg-white border border-slate-200/80 shadow-xs space-y-4">
                  <span className="clinical-label text-[10px] block">DIRECT COMMUNICATIONS</span>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#0b835c]" />
                    <a href="mailto:contact@varutapharmaceuticals.com" className="text-xs font-bold text-[#1c1c1e] hover:text-[#0b835c]">
                      contact@varutapharmaceuticals.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#0b835c]" />
                    <a href="tel:+919985553875" className="text-xs font-bold text-[#1c1c1e] hover:text-[#0b835c]">
                      +91 9985553875
                    </a>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-slate-200/60">
                    <ShieldCheck className="w-4 h-4 text-[#0b835c]" />
                    <span className="text-xs font-semibold text-[#676768]">
                      FSSAI Lic. No. <strong className="text-[#1c1c1e]">13624999000034</strong>
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column (7 cols): Interactive Contact Form */}
              <div className="lg:col-span-7">
                <div className="p-8 sm:p-10 rounded-[36px] bg-[#f8fafc] border border-slate-200/90 shadow-md">
                  
                  <div className="mb-6 space-y-1">
                    <span className="clinical-label text-[11px]">COMMUNICATION FORM</span>
                    <h3 className="text-2xl font-bold text-[#1c1c1e]">Send an Inquiry or Request Dossier</h3>
                    <p className="text-xs text-[#676768]">Our medical and corporate affairs team will respond within 24 hours.</p>
                  </div>

                  {submitted ? (
                    <div className="p-8 rounded-[24px] bg-white border border-[#0b835c] text-center space-y-4 shadow-sm">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#0b835c] flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-[#1c1c1e]">Inquiry Successfully Transmitted</h4>
                      <p className="text-xs text-[#676768] leading-relaxed max-w-md mx-auto">
                        Thank you for reaching out to Varuta Pharma Pvt. Ltd. Your message has been routed to our medical team. A representative will contact you shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="btn-dark-pill text-xs py-2.5 px-6"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-[#1c1c1e] block mb-1.5">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. Dr. Ananya Sharma"
                            className="w-full px-4 py-3 rounded-2xl bg-white text-xs text-[#1c1c1e] border border-slate-200 focus:outline-none focus:border-[#0b835c]"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-[#1c1c1e] block mb-1.5">Professional Designation *</label>
                          <select
                            value={formData.designation}
                            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                            className="w-full px-4 py-3 rounded-2xl bg-white text-xs text-[#1c1c1e] border border-slate-200 focus:outline-none focus:border-[#0b835c]"
                          >
                            <option value="Physician / HCP">Physician / Healthcare Professional</option>
                            <option value="Hospital / Clinic Director">Hospital / Clinic Director</option>
                            <option value="Pharmaceutical Distributor">Pharmaceutical Distributor</option>
                            <option value="Patient / General Public">Patient / General Public</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-bold text-[#1c1c1e] block mb-1.5">Official Email *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@clinic.com"
                            className="w-full px-4 py-3 rounded-2xl bg-white text-xs text-[#1c1c1e] border border-slate-200 focus:outline-none focus:border-[#0b835c]"
                          />
                        </div>

                        <div>
                          <label className="text-xs font-bold text-[#1c1c1e] block mb-1.5">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-2xl bg-white text-xs text-[#1c1c1e] border border-slate-200 focus:outline-none focus:border-[#0b835c]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#1c1c1e] block mb-1.5">Target Sector / Product Interest</label>
                        <select
                          value={formData.sector}
                          onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-white text-xs text-[#1c1c1e] border border-slate-200 focus:outline-none focus:border-[#0b835c]"
                        >
                          <option value="Iron Deficiency & Immunity">Iron Deficiency & Immunity (GUANOLACT)</option>
                          <option value="Women's Health">Women's Health (ESTROCLEN)</option>
                          <option value="Sleep & Recovery">Sleep & Recovery (QUICKNAP ODF)</option>
                          <option value="Weight Management">Weight Management (FATEASE-5)</option>
                          <option value="Cellular Longevity">Cellular Longevity (TELAGE)</option>
                          <option value="Men's Health">Men's Health (ERECTER)</option>
                          <option value="Ovulatory Wellness">Ovulatory Wellness (CYSTORIN)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#1c1c1e] block mb-1.5">Inquiry Details / Message *</label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="State your inquiry, dossier request, or distribution proposal..."
                          className="w-full px-4 py-3 rounded-2xl bg-white text-xs text-[#1c1c1e] border border-slate-200 focus:outline-none focus:border-[#0b835c]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-dark-pill text-xs py-3.5 px-8 w-full flex items-center justify-center gap-2"
                      >
                        <span>Transmit Corporate Inquiry</span>
                        <Send className="w-4 h-4 text-emerald-300" />
                      </button>

                    </form>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mandatory Statutory FSSAI Disclosure Block */}
        <section className="py-12 bg-white text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-7 rounded-[28px] bg-[#1c1c1e] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0b835c] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    MANDATORY STATUTORY REGULATORY DISCLOSURE
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
                    Varuta Pharma Pvt. Ltd. (FSSAI Lic. No. <strong className="text-emerald-400">13624999000034</strong>) operates strictly as an ethical marketer. All products are manufactured by licensed WHO-GMP certified partners (Gencleus Pharma Pvt. Ltd. & Peptas Pharma Pvt. Ltd.).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
