import { useMemo, useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  featuredPosts,
  latestPosts,
  categories,
} from "../data/data";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Blog() {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // قراءة category من الرابط
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category");

  const activeCategory =
    categoryFromUrl || "الكل";

  // عدد المقالات في كل صفحة
  const postsPerPage = 6;

  // دمج جميع المقالات
  const allPosts = useMemo(() => {
    return [...featuredPosts, ...latestPosts];
  }, []);

  // فلترة المقالات
  const filteredPosts = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return allPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "الكل" ||
        post.category === activeCategory;

      const matchesSearch =
        !searchText ||
        post.title.toLowerCase().includes(searchText) ||
        post.description.toLowerCase().includes(searchText) ||
        post.author.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [
    allPosts,
    activeCategory,
    search,
  ]);

  // عدد الصفحات
  const totalPages = Math.ceil(
    filteredPosts.length / postsPerPage
  );

  // تصحيح الصفحة إذا لم تعد موجودة
  useEffect(() => {
    if (
      totalPages > 0 &&
      currentPage > totalPages
    ) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  // عند تغيير التصنيف من الرابط
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // المقالات الحالية
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  // تغيير الصفحة
  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // البحث
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  // تغيير التصنيف
  const handleCategory = (category) => {
    setCurrentPage(1);

    if (category === "الكل") {
      searchParams.delete("category");
      setSearchParams(searchParams);
    } else {
      setSearchParams({
        category: category,
      });
    }
  };

  // إعادة الفلاتر
  const resetFilters = () => {
    setSearch("");
    setCurrentPage(1);

    searchParams.delete("category");
    setSearchParams(searchParams);
  };

  return (
    <>
      <Navbar />

      <main
        dir="rtl"
        className="min-h-screen bg-[#0a0a0a] text-white"
      >
        {/* =========================
            HERO
        ========================= */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />

          <div className="absolute inset-0 opacity-40">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(38,38,38,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(38,38,38,.5) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm">
              <i className="fa-solid fa-newspaper" />
              مدونتنا
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              استكشف{" "}
              <span className="text-orange-500">
                {activeCategory === "الكل"
                  ? "مقالاتنا"
                  : activeCategory}
              </span>
            </h1>

            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              {activeCategory === "الكل"
                ? "اكتشف الدروس والرؤى وأفضل الممارسات في عالم التصوير الفوتوغرافي"
                : `اكتشف جميع مقالات التصوير في تصنيف ${activeCategory}`}
            </p>
          </div>
        </section>

        {/* =========================
            FILTERS
        ========================= */}
        <section className="sticky top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626]">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">

              {/* Search */}
              <div className="relative w-full lg:w-80">
                <input
                  type="text"
                  value={search}
                  onChange={handleSearch}
                  placeholder="ابحث في المقالات..."
                  className="w-full px-5 py-3 pr-12 bg-[#161616] border border-[#262626] rounded-xl text-white placeholder:text-neutral-600 outline-none focus:border-orange-500 transition"
                />

                <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500" />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-2">

                {/* All */}
                <button
                  onClick={() =>
                    handleCategory("الكل")
                  }
                  className={`px-4 py-2 rounded-xl text-sm transition ${
                    activeCategory === "الكل"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                      : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-orange-400"
                  }`}
                >
                  جميع المقالات
                </button>

                {/* Categories */}
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() =>
                      handleCategory(category.name)
                    }
                    className={`px-4 py-2 rounded-xl text-sm transition ${
                      activeCategory === category.name
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-orange-400"
                    }`}
                  >
                    <i
                      className={`fa-solid ${category.icon} ml-1`}
                    />

                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            POSTS
        ========================= */}
        <section className="max-w-7xl mx-auto px-4 py-12">

          {/* Toolbar */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">

            <div className="text-neutral-400">
              عرض{" "}
              <span className="font-bold text-white">
                {filteredPosts.length}
              </span>{" "}
              مقالات

              {activeCategory !== "الكل" && (
                <span className="mr-2 text-orange-500">
                  في {activeCategory}
                </span>
              )}
            </div>

            {/* View mode */}
            <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">

              <button
                onClick={() =>
                  setViewMode("grid")
                }
                title="عرض شبكي"
                className={`w-10 h-10 rounded-lg transition ${
                  viewMode === "grid"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <i className="fa-solid fa-grip" />
              </button>

              <button
                onClick={() =>
                  setViewMode("list")
                }
                title="عرض قائمة"
                className={`w-10 h-10 rounded-lg transition ${
                  viewMode === "list"
                    ? "bg-orange-500 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <i className="fa-solid fa-list" />
              </button>
            </div>
          </div>

          {/* =========================
              EMPTY STATE
          ========================= */}
          {currentPosts.length === 0 && (
            <div className="py-24 text-center">

              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#161616] border border-[#262626] flex items-center justify-center">
                <i className="fa-solid fa-file-circle-xmark text-4xl text-neutral-700" />
              </div>

              <h2 className="text-2xl font-bold mb-2">
                لا توجد مقالات
              </h2>

              <p className="text-neutral-500">
                جربي تغيير كلمة البحث أو التصنيف.
              </p>

              <button
                onClick={resetFilters}
                className="mt-6 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 transition"
              >
                عرض جميع المقالات
              </button>
            </div>
          )}

          {/* =========================
              GRID
          ========================= */}
          {viewMode === "grid" &&
            currentPosts.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post, index) => (
                  <PostCard
                    key={post.link}
                    post={post}
                    index={index}
                  />
                ))}
              </div>
            )}

          {/* =========================
              LIST
          ========================= */}
          {viewMode === "list" &&
            currentPosts.length > 0 && (
              <div className="flex flex-col gap-6">
                {currentPosts.map((post, index) => (
                  <PostList
                    key={post.link}
                    post={post}
                    index={index}
                  />
                ))}
              </div>
            )}

          {/* =========================
              PAGINATION
          ========================= */}
          {totalPages > 1 && (
            <div className="flex flex-col items-center mt-16">

              <div className="flex items-center gap-2 flex-wrap justify-center">

                {/* Previous */}
                <button
                  onClick={() =>
                    changePage(currentPage - 1)
                  }
                  disabled={currentPage === 1}
                  className="w-11 h-11 rounded-xl border border-[#262626] bg-[#161616] text-neutral-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-orange-500 hover:text-orange-500 transition"
                  aria-label="الصفحة السابقة"
                >
                  <i className="fa-solid fa-chevron-right" />
                </button>

                {/* Pages */}
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() =>
                      changePage(page)
                    }
                    className={`min-w-11 h-11 px-3 rounded-xl transition ${
                      currentPage === page
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/20"
                        : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500 hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next */}
                <button
                  onClick={() =>
                    changePage(currentPage + 1)
                  }
                  disabled={
                    currentPage === totalPages
                  }
                  className="w-11 h-11 rounded-xl border border-[#262626] bg-[#161616] text-neutral-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-orange-500 hover:text-orange-500 transition"
                  aria-label="الصفحة التالية"
                >
                  <i className="fa-solid fa-chevron-left" />
                </button>
              </div>

              <p className="text-sm text-neutral-500 mt-4">
                صفحة {currentPage} من {totalPages}
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

/* =====================================================
   GRID CARD
===================================================== */

function PostCard({ post }) {
  return (
    <article className="group bg-[#111111] border border-[#262626] rounded-2xl overflow-hidden hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300">

      <Link
        to={post.link}
        className="block"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          {/* Category */}
          <span className="absolute top-4 right-4 px-3 py-1.5 bg-orange-500 text-white text-xs rounded-full border border-orange-400/30">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-4">

            <span>
              <i className="fa-regular fa-clock ml-1" />
              {post.readTime}
            </span>

            <span className="w-1 h-1 bg-neutral-700 rounded-full" />

            <span>
              {post.date}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-orange-500 transition">
            {post.title}
          </h2>

          {/* Description */}
          <p className="text-sm text-neutral-400 leading-7 line-clamp-2 mb-6">
            {post.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[#262626]">

            <div className="flex items-center gap-3 min-w-0">

              <img
                src={post.authorImage}
                alt={post.author}
                className="w-9 h-9 rounded-full object-cover border border-[#333]"
              />

              <div className="min-w-0">

                <p className="text-sm font-medium truncate">
                  {post.author}
                </p>

                {post.role && (
                  <p className="text-xs text-neutral-500 truncate">
                    {post.role}
                  </p>
                )}
              </div>
            </div>

            <div className="w-9 h-9 flex-shrink-0 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition">
              <i className="fa-solid fa-arrow-left" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

/* =====================================================
   LIST CARD
===================================================== */

function PostList({ post }) {
  return (
    <article className="group bg-[#111111] border border-[#262626] rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300">

      <Link
        to={post.link}
        className="flex flex-col md:flex-row"
      >
        {/* Image */}
        <div className="relative w-full md:w-80 lg:w-96 h-60 md:h-auto flex-shrink-0 overflow-hidden">

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-l" />

          {/* Category */}
          <span className="absolute top-4 right-4 px-3 py-1.5 bg-orange-500 text-white text-xs rounded-full border border-orange-400/30">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col justify-center flex-1">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 mb-4">

            <span>
              <i className="fa-regular fa-clock ml-1" />
              {post.readTime}
            </span>

            <span>•</span>

            <span>
              {post.date}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-orange-500 transition">
            {post.title}
          </h2>

          {/* Description */}
          <p className="text-neutral-400 leading-8 mb-6 max-w-3xl">
            {post.description}
          </p>

          {/* Bottom */}
          <div className="flex flex-wrap items-center justify-between gap-4">

            <div className="flex items-center gap-3">

              <img
                src={post.authorImage}
                alt={post.author}
                className="w-10 h-10 rounded-full object-cover border border-[#333]"
              />

              <div>

                <p className="text-sm font-medium">
                  {post.author}
                </p>

                {post.role && (
                  <p className="text-xs text-neutral-500">
                    {post.role}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 text-orange-500 text-sm">
              اقرأ المقال
              <i className="fa-solid fa-arrow-left" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Blog;
