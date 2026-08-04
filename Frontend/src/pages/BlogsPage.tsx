import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { BLOGS_DATABASE } from '../data/blogsData';
import {
  Clock,
  ArrowRight,
  BookOpen,
  UserCheck,
  Filter,
  Search,
  Bookmark,
  Sun,
  Moon,
  Sparkles,
  Share2,
  Check,
  Tag,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ITEMS_PER_PAGE = 6;

export const BlogsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('varuta_bookmarked_blogs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('varuta_bookmarked_blogs', JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, showOnlyBookmarks]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const isAdding = !bookmarks.includes(id);
    setBookmarks((prev) =>
      isAdding ? [...prev, id] : prev.filter((bId) => bId !== id)
    );
    showToast(
      isAdding
        ? 'Paper bookmarked to your reading list!'
        : 'Paper removed from your bookmarks.'
    );
  };

  const handleShare = async (slug: string, title: string, id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/blogs/${slug}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Read this clinical study on Varuta Pharma: ${title}`,
          url: url,
        });
        showToast('Article link shared successfully!');
        return;
      } catch {
        // Fallback to clipboard if user cancels or share fails
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
      showToast('Article link copied to clipboard! You can now paste and share it.');
    } catch {
      showToast('Failed to copy link.');
    }
  };

  const categories = [
    { id: 'all', name: 'All Publications' },
    { id: 'iron-immunity', name: 'Iron & Immunity' },
    { id: 'womens-health', name: "Women's Health" },
    { id: 'sleep-recovery', name: 'Sleep & Recovery' },
    { id: 'cellular-longevity', name: 'Cellular Longevity' },
    { id: 'weight-management', name: 'Weight Management' },
    { id: 'mens-health', name: "Men's Health" },
    { id: 'fertility', name: 'Fertility Care' },
  ];

  const filteredBlogs = useMemo(() => {
    return BLOGS_DATABASE.filter((blog) => {
      const matchesCategory =
        selectedCategory === 'all' || blog.categoryId === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.relatedSku.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (blog.topics &&
          blog.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      const matchesBookmark = !showOnlyBookmarks || bookmarks.includes(blog.id);

      return matchesCategory && matchesSearch && matchesBookmark;
    });
  }, [selectedCategory, searchQuery, showOnlyBookmarks, bookmarks]);

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE));

  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredBlogs.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  const featuredBlog = BLOGS_DATABASE[0];
  const isDark = theme === 'dark';

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-[#0b835c] selection:text-white ${
        isDark
          ? 'bg-[#090d0b] text-slate-100'
          : 'bg-[#f8fafc] text-[#1c1c1e]'
      }`}
    >
      <Navbar />

      {/* Interactive Toast Notification Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3.5 rounded-full bg-[#1c1c1e] text-white text-xs font-semibold shadow-2xl flex items-center gap-3 border border-emerald-500/40 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{toastMessage}</span>
            <button
              onClick={() => setToastMessage(null)}
              className="ml-2 text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 sm:pt-28 pb-20">
        {/* Page Hero Header */}
        <section
          className={`relative py-16 sm:py-24 border-b transition-colors duration-300 ${
            isDark
              ? 'bg-gradient-to-b from-[#0c1410] via-[#090d0b] to-[#090d0b] border-emerald-900/30'
              : 'bg-gradient-to-b from-emerald-50/70 via-slate-50 to-[#f8fafc] border-slate-200/80'
          }`}
        >
          {/* Decorative Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-left relative z-10">
            {/* Top Toolbar Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border ${
                  isDark
                    ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800/50'
                    : 'bg-emerald-100/80 text-[#0b835c] border-emerald-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                VARUTA CLINICAL & PHYTO-THERAPEUTIC RESEARCH HUB
              </span>

              {/* Theme & Reading Mode Switcher */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowOnlyBookmarks(!showOnlyBookmarks)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs ${
                    showOnlyBookmarks
                      ? 'bg-amber-500 text-white shadow-md scale-105'
                      : isDark
                      ? 'bg-slate-800 text-slate-300 hover:text-white border border-slate-700'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                  title="Toggle Bookmarked Articles Filter"
                >
                  <Bookmark
                    className={`w-3.5 h-3.5 ${
                      showOnlyBookmarks ? 'fill-current' : ''
                    }`}
                  />
                  <span>Bookmarks ({bookmarks.length})</span>
                </button>

                <button
                  onClick={() => setTheme(isDark ? 'light' : 'dark')}
                  className={`p-2 rounded-full border transition-all flex items-center gap-2 px-3.5 text-xs font-semibold ${
                    isDark
                      ? 'bg-slate-800/90 text-amber-300 border-slate-700 hover:bg-slate-800'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 shadow-xs'
                  }`}
                  title="Toggle Light / Dark Reading Mode"
                >
                  {isDark ? (
                    <>
                      <Sun className="w-4 h-4 text-amber-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-emerald-700" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <h1
              className={`font-editorial-serif text-3xl sm:text-5xl lg:text-[58px] font-normal leading-[1.12] tracking-tight max-w-4xl ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Evidence-Graded Articles Educating{' '}
              <span className="text-[#0b835c] italic font-normal">
                Physicians & Patients.
              </span>
            </h1>

            <p
              className={`text-base sm:text-lg font-normal leading-relaxed max-w-3xl ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Explore cellular mechanisms, bio-active ingredient assay standards, and clinical evidence powering Varuta Pharma’s therapeutic focus areas.
            </p>

            {/* Real-time Search Bar */}
            <div className="pt-4 max-w-2xl">
              <div
                className={`relative flex items-center rounded-2xl border transition-all shadow-sm ${
                  isDark
                    ? 'bg-[#111814] border-slate-700 focus-within:border-emerald-500'
                    : 'bg-white border-slate-300 focus-within:border-[#0b835c]'
                }`}
              >
                <Search className="w-5 h-5 ml-4 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by ingredient, topic, or SKU (e.g. Lactoferrin, PCOS, Melatonin)..."
                  className={`w-full py-3.5 pl-3 pr-4 rounded-2xl text-sm bg-transparent outline-none ${
                    isDark ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'
                  }`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mr-3 px-2 py-1 text-xs text-slate-400 hover:text-slate-600 font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter Bar */}
        <section
          className={`py-5 sticky top-16 sm:top-20 z-30 backdrop-blur-md border-b transition-colors ${
            isDark
              ? 'bg-[#090d0b]/90 border-slate-800'
              : 'bg-white/90 border-slate-200'
          }`}
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
              <Filter className="w-4 h-4 text-slate-400 flex-shrink-0 mr-1" />

              {/* Bookmarks Filter Pill */}
              <button
                onClick={() => {
                  setShowOnlyBookmarks(!showOnlyBookmarks);
                  setSelectedCategory('all');
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  showOnlyBookmarks
                    ? 'bg-amber-500 text-white shadow-md scale-105'
                    : isDark
                    ? 'bg-slate-800/80 text-amber-300 border border-slate-700 hover:border-amber-500/50'
                    : 'bg-amber-50 text-amber-800 border border-amber-200 hover:border-amber-400'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${showOnlyBookmarks ? 'fill-current' : ''}`} />
                <span>Bookmarked Studies</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full font-bold bg-black/20 text-white">
                  {bookmarks.length}
                </span>
              </button>

              {categories.map((cat) => {
                const count =
                  cat.id === 'all'
                    ? BLOGS_DATABASE.length
                    : BLOGS_DATABASE.filter((b) => b.categoryId === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setShowOnlyBookmarks(false);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      selectedCategory === cat.id && !showOnlyBookmarks
                        ? 'bg-[#0b835c] text-white shadow-md scale-105'
                        : isDark
                        ? 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:border-emerald-500/50'
                        : 'bg-slate-100 text-slate-700 border border-slate-200 hover:border-[#0b835c]/40'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                        selectedCategory === cat.id && !showOnlyBookmarks
                          ? 'bg-white/20 text-white'
                          : isDark
                          ? 'bg-slate-700 text-slate-300'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Hero Research Paper Card */}
        {selectedCategory === 'all' && searchQuery === '' && !showOnlyBookmarks && currentPage === 1 && (
          <section className="py-12 text-left">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`overflow-hidden rounded-[36px] border transition-all duration-300 shadow-xl ${
                  isDark
                    ? 'bg-[#121915] border-slate-800 hover:border-emerald-800/60'
                    : 'bg-white border-slate-200/90 hover:border-emerald-200'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Hero Cover Image Container */}
                  <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[440px] overflow-hidden group">
                    <img
                      src={featuredBlog.coverImage}
                      alt={featuredBlog.title}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0b835c] text-white shadow-md">
                        FEATURED CLINICAL STUDY
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-emerald-300 backdrop-blur-md border border-white/10">
                        {featuredBlog.category}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                      <div className="flex items-center gap-4 text-xs text-slate-300">
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3.5 h-3.5 text-emerald-400" /> {featuredBlog.readTime}
                        </span>
                        <span>{featuredBlog.publishDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hero Details Content */}
                  <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#0b835c] uppercase tracking-wider">
                          SKU FORMULATION: {featuredBlog.relatedSku.title}
                        </span>
                        <button
                          onClick={(e) => toggleBookmark(featuredBlog.id, e)}
                          className={`p-2 rounded-full transition-colors ${
                            bookmarks.includes(featuredBlog.id)
                              ? 'bg-amber-500 text-white'
                              : isDark
                              ? 'bg-slate-800 text-slate-400 hover:text-white'
                              : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                          }`}
                          title="Bookmark Article"
                        >
                          <Bookmark className="w-4 h-4 fill-current" />
                        </button>
                      </div>

                      <h2
                        className={`font-editorial-serif text-2xl sm:text-3xl font-normal leading-snug ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        <Link
                          to={`/blogs/${featuredBlog.slug}`}
                          className="hover:text-[#0b835c] transition-colors"
                        >
                          {featuredBlog.title}
                        </Link>
                      </h2>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed line-clamp-4 ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {featuredBlog.summary}
                      </p>
                    </div>

                    {/* Author & CTA Button */}
                    <div className="space-y-5 pt-4 border-t border-slate-200/40 dark:border-slate-800">
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <div className="w-8 h-8 rounded-full bg-[#0b835c]/20 text-[#0b835c] flex items-center justify-center flex-shrink-0">
                          <UserCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200">
                            {featuredBlog.author.name}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {featuredBlog.author.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          to={`/blogs/${featuredBlog.slug}`}
                          className="flex-1 bg-[#0b835c] hover:bg-[#086345] text-white text-xs font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-md transition-all group"
                        >
                          <span>Read Full Research Paper</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <button
                          onClick={(e) => handleShare(featuredBlog.slug, featuredBlog.title, featuredBlog.id, e)}
                          className={`p-3 rounded-full border transition-colors ${
                            copiedId === featuredBlog.id
                              ? 'bg-emerald-600 text-white border-emerald-600'
                              : isDark
                              ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                              : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                          }`}
                          title="Share Link"
                        >
                          {copiedId === featuredBlog.id ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Share2 className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Interactive Blog Bento Grid */}
        <section className="py-12 text-left">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span
                className={`text-xs font-bold uppercase tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {showOnlyBookmarks ? 'SHOWING BOOKMARKED PUBLICATIONS' : 'SHOWING'}{' '}
                {filteredBlogs.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}–
                {Math.min(currentPage * ITEMS_PER_PAGE, filteredBlogs.length)} OF {filteredBlogs.length} PUBLICATIONS
              </span>

              {searchQuery && (
                <span className="text-xs text-[#0b835c] font-medium">
                  Search results for "{searchQuery}"
                </span>
              )}
            </div>

            {filteredBlogs.length === 0 ? (
              <div
                className={`p-12 rounded-3xl text-center border ${
                  isDark
                    ? 'bg-[#121915] border-slate-800 text-slate-400'
                    : 'bg-white border-slate-200 text-slate-500'
                }`}
              >
                {showOnlyBookmarks ? (
                  <>
                    <Bookmark className="w-10 h-10 mx-auto text-amber-500/70 mb-3" />
                    <p className="text-lg font-semibold mb-2">No bookmarked articles yet</p>
                    <p className="text-sm text-slate-400 max-w-md mx-auto">
                      Click the bookmark icon on any research paper to save it to your personal reading list for quick reference.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg font-semibold mb-2">No articles found</p>
                    <p className="text-sm">Try adjusting your search query or category filters.</p>
                  </>
                )}
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setShowOnlyBookmarks(false);
                  }}
                  className="mt-6 px-5 py-2.5 bg-[#0b835c] text-white text-xs font-bold rounded-full shadow-sm hover:bg-[#096e4d]"
                >
                  View All Publications
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedBlogs.map((blog, idx) => {
                    const isBookmarked = bookmarks.includes(blog.id);

                    return (
                      <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (idx % 6) * 0.05 }}
                        className={`group rounded-[32px] border overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 ${
                          isDark
                            ? 'bg-[#121915] border-slate-800 hover:border-emerald-800/60'
                            : 'bg-white border-slate-200/90 hover:border-emerald-300'
                        }`}
                      >
                        <div>
                          {/* Cover Image Header */}
                          <div className="relative h-52 overflow-hidden">
                            <img
                              src={blog.coverImage || 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80'}
                              alt={blog.title}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            {/* Top Badges */}
                            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-emerald-300 backdrop-blur-md border border-white/10">
                                {blog.category}
                              </span>

                              <button
                                onClick={(e) => toggleBookmark(blog.id, e)}
                                className={`p-2 rounded-full transition-all backdrop-blur-md ${
                                  isBookmarked
                                    ? 'bg-amber-500 text-white shadow-md scale-105'
                                    : 'bg-black/40 text-white/80 hover:text-white hover:bg-black/60'
                                }`}
                                title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Article'}
                              >
                                <Bookmark className="w-3.5 h-3.5 fill-current" />
                              </button>
                            </div>

                            {/* SKU Highlight on Image Bottom */}
                            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-[11px]">
                              <span className="font-semibold text-emerald-300 flex items-center gap-1">
                                <Tag className="w-3 h-3" /> SKU: {blog.relatedSku.title}
                              </span>
                              <span className="flex items-center gap-1 text-slate-300">
                                <Clock className="w-3 h-3 text-emerald-400" /> {blog.readTime}
                              </span>
                            </div>
                          </div>

                          {/* Body Details */}
                          <div className="p-6 space-y-3">
                            {blog.topics && blog.topics.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {blog.topics.slice(0, 3).map((topic, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className={`text-[10px] px-2 py-0.5 rounded-md font-medium ${
                                      isDark
                                        ? 'bg-slate-800 text-slate-300'
                                        : 'bg-slate-100 text-slate-600'
                                    }`}
                                  >
                                    #{topic}
                                  </span>
                                ))}
                              </div>
                            )}

                            <h3
                              className={`font-editorial-serif text-xl font-normal leading-snug line-clamp-2 group-hover:text-[#0b835c] transition-colors ${
                                isDark ? 'text-white' : 'text-slate-900'
                              }`}
                            >
                              <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                            </h3>

                            <p
                              className={`text-xs leading-relaxed line-clamp-3 ${
                                isDark ? 'text-slate-300' : 'text-slate-600'
                              }`}
                            >
                              {blog.summary}
                            </p>
                          </div>
                        </div>

                        {/* Footer Card Row */}
                        <div
                          className={`p-6 pt-4 border-t flex items-center justify-between ${
                            isDark ? 'border-slate-800/80' : 'border-slate-100'
                          }`}
                        >
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <UserCheck className="w-3.5 h-3.5 text-[#0b835c]" />
                            <span className="font-medium text-slate-600 dark:text-slate-300 truncate max-w-[120px]">
                              {blog.author.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={(e) => handleShare(blog.slug, blog.title, blog.id, e)}
                              className={`p-2 rounded-full transition-colors ${
                                copiedId === blog.id
                                  ? 'bg-emerald-600 text-white'
                                  : isDark
                                  ? 'text-slate-400 hover:text-white'
                                  : 'text-slate-400 hover:text-slate-700'
                              }`}
                              title="Share Article Link"
                            >
                              {copiedId === blog.id ? (
                                <Check className="w-3.5 h-3.5" />
                              ) : (
                                <Share2 className="w-3.5 h-3.5" />
                              )}
                            </button>

                            <Link
                              to={`/blogs/${blog.slug}`}
                              className="text-xs font-bold text-[#0b835c] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                            >
                              <span>Read Study</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Pagination Controls Bar */}
                {totalPages > 1 && (
                  <div className="pt-8 flex flex-wrap items-center justify-center gap-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`p-2.5 rounded-full border text-xs font-semibold flex items-center gap-1 transition-all ${
                        currentPage === 1
                          ? 'opacity-40 cursor-not-allowed border-slate-300 text-slate-400'
                          : isDark
                          ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 shadow-xs'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Prev</span>
                    </button>

                    <div className="flex items-center gap-1.5 px-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`w-9 h-9 rounded-full text-xs font-bold transition-all ${
                            currentPage === pageNum
                              ? 'bg-[#0b835c] text-white shadow-md scale-110'
                              : isDark
                              ? 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:bg-slate-700'
                              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {pageNum}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`p-2.5 rounded-full border text-xs font-semibold flex items-center gap-1 transition-all ${
                        currentPage === totalPages
                          ? 'opacity-40 cursor-not-allowed border-slate-300 text-slate-400'
                          : isDark
                          ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 shadow-xs'
                      }`}
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
