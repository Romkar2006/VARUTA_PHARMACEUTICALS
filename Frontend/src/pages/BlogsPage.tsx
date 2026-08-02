import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { BLOGS_DATABASE } from '../data/blogsData';
import { Clock, ArrowRight, BookOpen, UserCheck, FileText, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export const BlogsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Research Papers' },
    { id: 'iron-immunity', name: 'Iron & Immunity' },
    { id: 'womens-health', name: "Women's Health" },
    { id: 'sleep-recovery', name: 'Sleep & Recovery' },
    { id: 'cellular-longevity', name: 'Cellular Longevity' },
  ];

  const filteredBlogs = useMemo(() => {
    if (selectedCategory === 'all') return BLOGS_DATABASE;
    return BLOGS_DATABASE.filter((b) => b.categoryId === selectedCategory);
  }, [selectedCategory]);

  const featuredBlog = BLOGS_DATABASE[0];

  return (
    <div className="min-h-screen bg-white text-[#1c1c1e] selection:bg-[#0b835c] selection:text-white font-sans">
      <Navbar />

      <main className="pt-28 pb-20">
        {/* Page Hero Header */}
        <section className="py-20 bg-gradient-to-b from-emerald-50/50 via-white to-white border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div>
              <span className="tag-pill-green bg-white shadow-xs">
                <BookOpen className="w-3.5 h-3.5 text-[#0b835c]" />
                CLINICAL KNOWLEDGE & PHYTO-THERAPEUTIC RESEARCH
              </span>
            </div>

            <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-[60px] font-normal text-[#1c1c1e] leading-[1.12] tracking-tight max-w-4xl">
              Evidence-Graded Articles Educating{' '}
              <span className="text-[#0b835c] italic font-normal">Physicians & Patients.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#303033] font-medium leading-relaxed max-w-3xl">
              Exploring the biological mechanisms, bio-ingredient assay standards, and clinical trial evidence powering Varuta Pharma’s 7 therapeutic focus areas.
            </p>
          </div>
        </section>

        {/* Category Filter Bar */}
        <section className="py-6 bg-[#f8fafc] border-b border-[#eff1f6] text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-none">
              <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#0b835c] text-white shadow-xs scale-105'
                      : 'bg-white text-[#303033] border border-slate-200/80 hover:border-[#0b835c]/40'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Hero Research Paper Card */}
        {selectedCategory === 'all' && (
          <section className="py-16 bg-white border-b border-[#eff1f6] text-left">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="p-8 sm:p-12 rounded-[36px] bg-gradient-to-br from-slate-50 via-[#f8fafc] to-emerald-50/40 border border-slate-200/90 shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="tag-pill-green bg-white shadow-xs text-[10px]">
                        FEATURED CLINICAL STUDY
                      </span>
                      <span className="text-xs text-[#676768] flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#0b835c]" /> {featuredBlog.readTime}
                      </span>
                      <span className="text-xs text-[#676768]">{featuredBlog.publishDate}</span>
                    </div>

                    <h2 className="font-editorial-serif text-2xl sm:text-3xl lg:text-4xl text-[#1c1c1e] font-normal leading-tight">
                      <Link to={`/blogs/${featuredBlog.slug}`} className="hover:text-[#0b835c] transition-colors">
                        {featuredBlog.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#303033] font-medium leading-relaxed">
                      {featuredBlog.summary}
                    </p>

                    <div className="pt-2 flex items-center gap-3 text-xs text-[#676768]">
                      <UserCheck className="w-4 h-4 text-[#0b835c]" />
                      <span>By <strong>{featuredBlog.author.name}</strong> ({featuredBlog.author.role})</span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 p-6 rounded-[24px] bg-white border border-slate-200/80 shadow-xs space-y-4 text-left">
                    <span className="clinical-label text-[10px] block text-[#0b835c]">DISCUSSED SKU FORMULATION</span>
                    <h4 className="text-xl font-bold text-[#1c1c1e]">{featuredBlog.relatedSku.title}</h4>
                    <p className="text-xs text-[#676768]">Read the research behind this flagship formulation.</p>
                    
                    <Link
                      to={`/blogs/${featuredBlog.slug}`}
                      className="btn-dark-pill text-xs py-3 px-6 w-full flex items-center justify-center gap-2"
                    >
                      <span>Read Research Paper</span>
                      <ArrowRight className="w-4 h-4 text-emerald-300" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </section>
        )}

        {/* Interactive Blog Grid */}
        <section className="py-16 bg-white text-left">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-center justify-between">
              <span className="clinical-label text-[11px]">
                SHOWING {filteredBlogs.length} RESEARCH PAPERS
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBlogs.map((blog, idx) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-8 rounded-[32px] bg-[#f8fafc] border border-slate-200/80 hover:bg-white hover:border-[#0b835c]/50 hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group text-left"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="clinical-label text-[10px] text-[#0b835c] uppercase">
                        {blog.category}
                      </span>
                      <span className="text-xs text-[#676768] font-medium flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#0b835c]" /> {blog.readTime}
                      </span>
                    </div>

                    <h3 className="font-editorial-serif text-2xl font-normal text-[#1c1c1e] leading-snug group-hover:text-[#0b835c] transition-colors">
                      <Link to={`/blogs/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-[#676768] leading-relaxed line-clamp-3">
                      {blog.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-[#676768]">
                      <UserCheck className="w-3.5 h-3.5 text-[#0b835c]" />
                      <span className="font-semibold">{blog.author.name}</span>
                    </div>

                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="text-xs font-bold text-[#0b835c] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
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
                    Articles published by <strong className="text-emerald-400">Varuta Pharma Pvt. Ltd.</strong> (FSSAI Lic. No. <strong className="text-emerald-400">13624999000034</strong>) are educational clinical literature. Products discussed are nutraceutical and food supplements manufactured by licensed WHO-GMP certified partners (Gencleus & Peptas).
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                className="btn-outline-pill border-white/30 text-white hover:bg-white hover:text-[#1c1c1e] text-xs py-2.5 px-5 whitespace-nowrap flex-shrink-0"
              >
                Contact Medical Board
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
