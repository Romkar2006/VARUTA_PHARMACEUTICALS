import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { BLOGS_DATABASE } from '../data/blogsData';
import { Clock, ArrowLeft, UserCheck, CheckCircle2, ChevronRight, FileText, Sparkles, BookOpen } from 'lucide-react';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  const blog = BLOGS_DATABASE.find(
    (b) => b.slug.toLowerCase() === (slug || '').toLowerCase() || b.id.toLowerCase() === (slug || '').toLowerCase()
  ) || BLOGS_DATABASE[0];

  return (
    <div className="min-h-screen bg-white text-[#1c1c1e] selection:bg-[#0b835c] selection:text-white font-sans">
      <Navbar />

      <main className="pt-28 pb-20">
        
        {/* Breadcrumb Bar */}
        <section className="py-4 bg-[#f8fafc] border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs text-[#676768]">
              <Link to="/" className="hover:text-[#0b835c]">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/blogs" className="hover:text-[#0b835c]">Blogs</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#0b835c] font-semibold">{blog.category}</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-[#1c1c1e] font-bold line-clamp-1">{blog.title}</span>
            </div>
          </div>
        </section>

        {/* Article Hero */}
        <section className="py-16 bg-white border-b border-[#eff1f6] text-left">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0b835c] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Research Papers</span>
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <span className="tag-pill-green bg-[#eff1f6] text-[10px]">
                {blog.category}
              </span>
              <span className="text-xs text-[#676768] font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#0b835c]" /> {blog.readTime}
              </span>
              <span className="text-xs text-[#676768]">{blog.publishDate}</span>
            </div>

            <h1 className="font-editorial-serif text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#1c1c1e] leading-[1.18] tracking-tight">
              {blog.title}
            </h1>

            <p className="text-base sm:text-lg text-[#0b835c] font-medium leading-relaxed border-l-2 border-[#0b835c] pl-4">
              {blog.subtitle}
            </p>

            {/* Author Credentials Banner */}
            <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0b835c] text-white flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1c1c1e] block">{blog.author.name}</span>
                  <span className="text-[11px] text-[#676768] block">{blog.author.role}</span>
                </div>
              </div>

              <span className="text-[10px] font-bold text-[#0b835c] bg-white px-3 py-1 rounded-full border border-slate-200">
                Peer-Reviewed Clinical Literature
              </span>
            </div>

          </div>
        </section>

        {/* Article Body Content & Related Product Cross-Link */}
        <section className="py-16 bg-white text-left">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Article Paragraphs (8 cols) */}
              <div className="lg:col-span-8 space-y-6 text-slate-800 text-sm sm:text-base leading-relaxed">
                
                {/* Key Takeaways Box */}
                <div className="p-6 rounded-[24px] bg-emerald-50/70 border border-emerald-200/80 space-y-3">
                  <span className="text-xs font-bold text-[#0b835c] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#0b835c]" />
                    KEY CLINICAL TAKEAWAYS
                  </span>
                  <div className="space-y-2">
                    {blog.keyTakeaways.map((takeaway, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#1c1c1e] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0b835c] flex-shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Article Content Paragraphs */}
                {blog.content.map((paragraph, i) => (
                  <p key={i} className="text-[#303033] font-normal leading-relaxed">
                    {paragraph}
                  </p>
                ))}

              </div>

              {/* Related SKU Cross-Link Sidebar Card (4 cols) */}
              <div className="lg:col-span-4">
                <div className="p-7 rounded-[28px] bg-[#f8fafc] border border-slate-200/90 shadow-xs space-y-5 sticky top-32 text-left">
                  <div className="flex items-center gap-2 text-[#0b835c]">
                    <BookOpen className="w-4 h-4" />
                    <span className="clinical-label text-[10px] font-bold">RELATED FORMULATION</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1c1c1e]">{blog.relatedSku.title}</h3>
                    <p className="text-xs text-[#676768] mt-1">
                      Read the full clinical dosage specification and active assay breakdown.
                    </p>
                  </div>

                  <Link
                    to={blog.relatedSku.path}
                    className="btn-dark-pill text-xs py-3 px-5 w-full flex items-center justify-center gap-2"
                  >
                    <span>Inspect {blog.relatedSku.title} SKU</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <div className="pt-3 border-t border-slate-200/80 text-[10px] text-[#676768]">
                    FSSAI Lic. No. 13624999000034 · WHO-GMP Facility Partnered
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mandatory Statutory FSSAI Disclosure Block */}
        <section className="py-12 bg-white text-left">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-7 rounded-[28px] bg-[#1c1c1e] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0b835c] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    MANDATORY STATUTORY REGULATORY DISCLOSURE
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                    Articles published by <strong className="text-emerald-400">Varuta Pharma Pvt. Ltd.</strong> (FSSAI Lic. No. <strong className="text-emerald-400">13624999000034</strong>) are educational clinical literature. Products discussed are nutraceutical and food supplements manufactured by licensed WHO-GMP certified partners (Gencleus & Peptas).
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
