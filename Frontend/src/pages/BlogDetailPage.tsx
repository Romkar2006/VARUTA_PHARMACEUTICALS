import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { BLOGS_DATABASE } from '../data/blogsData';
import {
  Clock,
  ArrowLeft,
  UserCheck,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  BookOpen,
  Sun,
  Moon,
  Bookmark,
  Share2,
  Check,
  Tag,
  ArrowRight,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copied, setCopied] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const blog =
    BLOGS_DATABASE.find(
      (b) =>
        b.slug.toLowerCase() === (slug || '').toLowerCase() ||
        b.id.toLowerCase() === (slug || '').toLowerCase()
    ) || BLOGS_DATABASE[0];

  useEffect(() => {
    try {
      const saved = localStorage.getItem('varuta_bookmarked_blogs');
      if (saved) {
        const bookmarks: string[] = JSON.parse(saved);
        setIsBookmarked(bookmarks.includes(blog.id));
      }
    } catch (e) {
      console.error(e);
    }
  }, [blog.id]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleBookmark = () => {
    try {
      const saved = localStorage.getItem('varuta_bookmarked_blogs');
      let bookmarks: string[] = saved ? JSON.parse(saved) : [];
      let newState = false;
      if (bookmarks.includes(blog.id)) {
        bookmarks = bookmarks.filter((id) => id !== blog.id);
        newState = false;
      } else {
        bookmarks.push(blog.id);
        newState = true;
      }
      setIsBookmarked(newState);
      localStorage.setItem('varuta_bookmarked_blogs', JSON.stringify(bookmarks));
      showToast(
        newState
          ? 'Study bookmarked to your reading list!'
          : 'Study removed from your bookmarks.'
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: `Read this research paper on Varuta Pharma: ${blog.title}`,
          url: url,
        });
        showToast('Article shared successfully!');
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      showToast('Article link copied to clipboard! You can now paste and share it.');
    } catch {
      showToast('Failed to copy link.');
    }
  };

  const relatedArticles = BLOGS_DATABASE.filter(
    (b) => b.id !== blog.id && b.categoryId === blog.categoryId
  ).slice(0, 3);

  const fallbackRelated =
    relatedArticles.length > 0
      ? relatedArticles
      : BLOGS_DATABASE.filter((b) => b.id !== blog.id).slice(0, 3);

  const isDark = theme === 'dark';

  const fontClass =
    fontSize === 'sm'
      ? 'text-sm sm:text-base leading-relaxed'
      : fontSize === 'lg'
      ? 'text-lg sm:text-xl leading-loose'
      : 'text-base sm:text-lg leading-relaxed';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-[#0b835c] selection:text-white ${
        isDark ? 'bg-[#090d0b] text-slate-100' : 'bg-white text-[#1c1c1e]'
      }`}
    >
      {/* Top Scroll Reading Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#0b835c] z-50 transition-all duration-150 shadow-md"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      {/* Floating Toast Notification Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-8 z-50 px-6 py-3.5 rounded-full bg-[#1c1c1e] text-white text-xs font-semibold shadow-2xl flex items-center gap-3 border border-emerald-500/40 backdrop-blur-md"
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
        {/* Floating Reading Controls Toolbar */}
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 p-2.5 rounded-full backdrop-blur-md border shadow-2xl transition-all bg-black/85 text-white border-white/20">
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
            title="Toggle Light / Dark Reading Mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-emerald-400" />
            )}
          </button>

          <div className="w-px h-4 bg-white/20" />

          {/* Font Resizer */}
          <div className="flex items-center gap-1 text-xs font-bold px-1">
            <button
              onClick={() => setFontSize('sm')}
              className={`px-1.5 py-0.5 rounded ${
                fontSize === 'sm' ? 'bg-emerald-500 text-white' : 'text-slate-300 hover:text-white'
              }`}
              title="Small Text"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('md')}
              className={`px-1.5 py-0.5 rounded ${
                fontSize === 'md' ? 'bg-emerald-500 text-white' : 'text-slate-300 hover:text-white'
              }`}
              title="Medium Text"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-1.5 py-0.5 rounded ${
                fontSize === 'lg' ? 'bg-emerald-500 text-white' : 'text-slate-300 hover:text-white'
              }`}
              title="Large Text"
            >
              A+
            </button>
          </div>

          <div className="w-px h-4 bg-white/20" />

          <button
            onClick={toggleBookmark}
            className={`p-2 rounded-full transition-colors ${
              isBookmarked ? 'text-amber-400' : 'text-slate-300 hover:text-white'
            }`}
            title="Bookmark Article"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-full text-slate-300 hover:text-white transition-colors"
            title="Share Article Link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Breadcrumb Bar */}
        <section
          className={`py-3 sm:py-4 border-b text-left transition-colors ${
            isDark
              ? 'bg-[#0c1410] border-slate-800 text-slate-300'
              : 'bg-[#f8fafc] border-[#eff1f6] text-[#676768]'
          }`}
        >
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs overflow-x-auto scrollbar-none">
              <Link to="/" className="hover:text-[#0b835c] whitespace-nowrap">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
              <Link to="/blogs" className="hover:text-[#0b835c] whitespace-nowrap">
                Research Publications
              </Link>
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="text-[#0b835c] font-semibold whitespace-nowrap">
                {blog.category}
              </span>
              <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
              <span
                className={`font-bold truncate max-w-[150px] sm:max-w-xs ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {blog.title}
              </span>
            </div>
          </div>
        </section>

        {/* Article Cover Hero Header */}
        <section className="relative text-left">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0b835c] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Research Publications</span>
            </button>

            {/* Cover Image Container */}
            <div className="relative h-[260px] sm:h-[400px] rounded-[32px] overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-800">
              <img
                src={blog.coverImage || 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80'}
                alt={blog.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              <div className="absolute top-6 left-6 flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0b835c] text-white shadow-md">
                  {blog.category}
                </span>
                <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-emerald-300 backdrop-blur-md border border-white/20 flex items-center gap-1">
                  <Tag className="w-3 h-3" /> SKU: {blog.relatedSku.title}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                <div className="flex items-center gap-4 text-xs text-slate-300 font-medium">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Clock className="w-4 h-4" /> {blog.readTime}
                  </span>
                  <span>Published: {blog.publishDate}</span>
                </div>

                <h1 className="font-editorial-serif text-2xl sm:text-4xl lg:text-[44px] font-normal leading-[1.18] text-white max-w-4xl">
                  {blog.title}
                </h1>
              </div>
            </div>

            {/* Subtitle & Author Credentials */}
            <div className="space-y-4">
              <p className="text-base sm:text-xl text-[#0b835c] font-medium leading-relaxed border-l-4 border-[#0b835c] pl-4">
                {blog.subtitle}
              </p>

              <div
                className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  isDark
                    ? 'bg-[#121915] border-slate-800'
                    : 'bg-emerald-50/50 border-slate-200/90'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0b835c] text-white flex items-center justify-center font-bold flex-shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span
                      className={`text-xs font-bold block ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {blog.author.name}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block">
                      {blog.author.role}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleBookmark}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border transition-all ${
                      isBookmarked
                        ? 'bg-amber-500 text-white border-amber-500'
                        : isDark
                        ? 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                    <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border transition-all ${
                      copied
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : isDark
                        ? 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Share'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Body Content & Related SKU Sidebar */}
        <section className="py-12 text-left">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Main Content (8 cols) */}
              <div className="lg:col-span-8 space-y-8">
                {/* Key Takeaways Card */}
                <div
                  className={`p-6 rounded-[28px] border space-y-4 ${
                    isDark
                      ? 'bg-[#0f1713] border-emerald-900/50'
                      : 'bg-emerald-50/70 border-emerald-200/80'
                  }`}
                >
                  <span className="text-xs font-bold text-[#0b835c] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#0b835c]" />
                    KEY CLINICAL TAKEAWAYS
                  </span>
                  <div className="space-y-3">
                    {blog.keyTakeaways.map((takeaway, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-3 text-xs sm:text-sm font-medium ${
                          isDark ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0b835c] flex-shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Article Body Paragraphs */}
                <div className={`space-y-6 ${fontClass}`}>
                  {blog.content.map((paragraph, i) => (
                    <p
                      key={i}
                      className={`font-normal ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Related SKU Sidebar Card (4 cols) */}
              <div className="lg:col-span-4">
                <div
                  className={`p-7 rounded-[28px] border shadow-md space-y-5 sticky top-32 text-left ${
                    isDark
                      ? 'bg-[#121915] border-slate-800'
                      : 'bg-[#f8fafc] border-slate-200/90'
                  }`}
                >
                  <div className="flex items-center gap-2 text-[#0b835c]">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      DISCUSSED SKU FORMULATION
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`text-2xl font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {blog.relatedSku.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      Read the full clinical dosage specification and active assay breakdown.
                    </p>
                  </div>

                  <Link
                    to={blog.relatedSku.path}
                    className="bg-[#0b835c] hover:bg-[#086345] text-white text-xs font-semibold py-3 px-5 rounded-full w-full flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <span>Inspect {blog.relatedSku.title} SKU</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>

                  <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 text-[10px] text-slate-400">
                    FSSAI Lic. No. 13624999000034 · WHO-GMP Facility Partnered
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Clinical Publications Slider */}
        <section
          className={`py-12 border-t text-left ${
            isDark ? 'bg-[#090d0b] border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h3
              className={`font-editorial-serif text-2xl font-normal ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Recommended Clinical Studies
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fallbackRelated.map((relBlog) => (
                <div
                  key={relBlog.id}
                  className={`p-6 rounded-[24px] border transition-all hover:shadow-md ${
                    isDark
                      ? 'bg-[#121915] border-slate-800 hover:border-emerald-800'
                      : 'bg-white border-slate-200 hover:border-emerald-200'
                  }`}
                >
                  <span className="text-[10px] font-bold text-[#0b835c] uppercase">
                    {relBlog.category}
                  </span>
                  <h4
                    className={`font-editorial-serif text-base font-normal mt-2 line-clamp-2 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    <Link to={`/blogs/${relBlog.slug}`} className="hover:text-[#0b835c]">
                      {relBlog.title}
                    </Link>
                  </h4>
                  <Link
                    to={`/blogs/${relBlog.slug}`}
                    className="mt-4 text-xs font-bold text-[#0b835c] inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Read Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
