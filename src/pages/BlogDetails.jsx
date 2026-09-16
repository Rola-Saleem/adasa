import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";

import {
  featuredPosts,
  latestPosts,
} from "../data/data";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BlogDetails() {
  const { slug } = useParams();

  const allPosts = useMemo(() => {
    return [...featuredPosts, ...latestPosts];
  }, []);

  const post = allPosts.find((item) => {
    return item.link === `/blog/${slug}`;
  });

  // =========================
  // ARTICLE NOT FOUND
  // =========================

  if (!post) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-[#0a0a0a] text-white pt-20 flex items-center justify-center px-4">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <i className="fa-solid fa-file-circle-xmark text-3xl text-orange-500" />
            </div>

            <h1 className="text-3xl font-bold mb-3">
              المقال غير موجود
            </h1>

            <p className="text-neutral-500 mb-8">
              عذراً، لم نتمكن من العثور على المقال المطلوب.
            </p>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition"
            >
              <i className="fa-solid fa-arrow-right" />
              العودة إلى المدونة
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  // =========================
  // RELATED POSTS
  // =========================

  const relatedPosts = allPosts
    .filter(
      (item) =>
        item.link !== post.link &&
        item.category === post.category
    )
    .slice(0, 3);

  const sections = post.content?.sections || [];

  return (
    <>
      <Navbar />

      <main className="pt-20 bg-[#0a0a0a] text-white">
        <article>

          {/* =========================
              HERO
          ========================= */}

          <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 to-transparent" />

            {/* Breadcrumb */}

            <div className="absolute top-8 left-0 right-0 px-4">
              <div className="max-w-7xl mx-auto">
                <nav className="inline-flex items-center gap-3 px-4 py-2 bg-black/30 backdrop-blur-md rounded-full border border-white/10 text-sm">

                  <Link
                    to="/"
                    className="text-white/60 hover:text-white transition"
                  >
                    <i className="fa-solid fa-house" />
                  </Link>

                  <i className="fa-solid fa-chevron-left text-white/30 text-xs" />

                  <Link
                    to="/blog"
                    className="text-white/60 hover:text-white transition"
                  >
                    المدونة
                  </Link>

                  <i className="fa-solid fa-chevron-left text-white/30 text-xs" />

                  <span className="text-orange-400">
                    {post.category}
                  </span>

                </nav>
              </div>
            </div>

            {/* Hero Content */}

            <div className="absolute bottom-0 left-0 right-0 px-4 pb-10 md:pb-14">
              <div className="max-w-5xl mx-auto">

                <div className="flex flex-wrap items-center gap-4 mb-6">

                  <Link
                    to={`/blog?category=${encodeURIComponent(
                      post.category
                    )}`}
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-full text-sm font-bold transition"
                  >
                    {post.category}
                  </Link>

                  <div className="flex items-center gap-4 text-white/70 text-sm">

                    <span className="flex items-center gap-2">
                      <i className="fa-regular fa-calendar" />
                      {post.date}
                    </span>

                    <span className="flex items-center gap-2">
                      <i className="fa-regular fa-clock" />
                      {post.readTime}
                    </span>

                  </div>
                </div>

                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-8">
                  {post.title}
                </h1>

                {/* Author */}

                <div className="inline-flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">

                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500/50"
                  />

                  <div>
                    <p className="font-bold">
                      {post.author}
                    </p>

                    <p className="text-sm text-white/60">
                      {post.role}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </section>

          {/* =========================
              CONTENT
          ========================= */}

          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <div className="grid lg:grid-cols-[1fr_300px] gap-12">

              {/* =========================
                  MAIN CONTENT
              ========================= */}

              <div className="order-2 lg:order-1">

                {/* Intro */}

                {post.content?.intro && (
                  <div className="p-6 mb-10 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">

                    <p className="text-lg text-neutral-200 leading-relaxed italic">
                      "{post.content.intro}"
                    </p>

                  </div>
                )}

                {/* Sections */}

                <div>

                  {sections.map((section, index) => (
                    <section
                      key={index}
                      id={`section-${index}`}
                      className="scroll-mt-28"
                    >

                      <h2 className="text-2xl md:text-3xl font-bold text-white mt-14 mb-6 flex items-center gap-4">

                        <span className="flex items-center justify-center w-10 h-10 bg-orange-500/10 rounded-xl border border-orange-500/30 shrink-0">
                          <i className="fa-solid fa-camera text-orange-500" />
                        </span>

                        {section.title}

                      </h2>

                      <p className="text-neutral-300 leading-relaxed mb-6 text-lg">
                        {section.content}
                      </p>

                    </section>
                  ))}

                </div>

                {/* =========================
                    TAGS
                ========================= */}

                {post.tags?.length > 0 && (
                  <div className="mt-14 p-6 bg-[#111111] rounded-2xl border border-[#262626]">

                    <div className="flex items-center gap-3 mb-4">

                      <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                        <i className="fa-solid fa-tags text-orange-500" />
                      </div>

                      <h3 className="font-bold">
                        الوسوم
                      </h3>

                    </div>

                    <div className="flex flex-wrap gap-2">

                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-[#1a1a1a] text-neutral-400 text-sm rounded-full border border-[#262626]"
                        >
                          #{tag}
                        </span>
                      ))}

                    </div>

                  </div>
                )}

                {/* =========================
                    SHARE
                ========================= */}

                <ShareButtons />

                {/* =========================
                    AUTHOR
                ========================= */}

                <div className="mt-6 p-8 bg-gradient-to-br from-[#161616] to-[#111111] rounded-2xl border border-[#262626]">

                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-24 h-24 rounded-2xl object-cover ring-4 ring-orange-500/20"
                    />

                    <div className="text-center sm:text-right flex-1">

                      <span className="text-xs text-orange-500 font-semibold">
                        كاتب المقال
                      </span>

                      <h3 className="text-xl font-bold mt-1">
                        {post.author}
                      </h3>

                      <p className="text-neutral-500 text-sm mb-3">
                        {post.role}
                      </p>

                      <p className="text-neutral-400 text-sm leading-relaxed">
                        مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* =========================
                  SIDEBAR
              ========================= */}

              <aside className="order-1 lg:order-2">

                <div className="lg:sticky lg:top-24 space-y-6">

                  {/* TOC */}

                  {sections.length > 0 && (
                    <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">

                      <div className="flex items-center gap-3 mb-5">

                        <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                          <i className="fa-solid fa-list text-orange-500" />
                        </div>

                        <h3 className="font-bold">
                          محتويات المقال
                        </h3>

                      </div>

                      <nav className="space-y-2">

                        {sections.map((section, index) => (
                          <a
                            key={index}
                            href={`#section-${index}`}
                            className="flex items-center gap-3 p-3 rounded-xl text-neutral-400 hover:text-orange-500 hover:bg-orange-500/5 transition"
                          >

                            <span className="flex items-center justify-center w-6 h-6 bg-[#1a1a1a] rounded-lg text-xs shrink-0">
                              {index + 1}
                            </span>

                            <span className="text-sm">
                              {section.title}
                            </span>

                          </a>
                        ))}

                      </nav>

                    </div>
                  )}

                  {/* =========================
                      INFO
                  ========================= */}

                  <div className="p-6 bg-[#111111] rounded-2xl border border-[#262626]">

                    <div className="grid grid-cols-2 gap-4">

                      <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">

                        <i className="fa-regular fa-clock text-orange-500 text-xl mb-2" />

                        <p className="text-white font-bold text-sm">
                          {post.readTime}
                        </p>

                        <p className="text-neutral-500 text-xs">
                          وقت القراءة
                        </p>

                      </div>

                      <div className="text-center p-4 bg-[#0a0a0a] rounded-xl">

                        <i className="fa-regular fa-calendar text-orange-500 text-xl mb-2" />

                        <p className="text-white font-bold text-sm">
                          {post.date}
                        </p>

                        <p className="text-neutral-500 text-xs">
                          تاريخ النشر
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* =========================
                      MORE POSTS
                  ========================= */}

                  <div className="p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 rounded-2xl border border-orange-500/20">

                    <div className="text-center">

                      <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <i className="fa-solid fa-newspaper text-orange-500 text-xl" />
                      </div>

                      <h3 className="font-bold mb-2">
                        هل تريد المزيد؟
                      </h3>

                      <p className="text-neutral-400 text-sm mb-4">
                        اكتشف المزيد من المقالات
                      </p>

                      <Link
                        to="/blog"
                        className="block w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition"
                      >
                        تصفح المدونة
                      </Link>

                    </div>

                  </div>

                </div>

              </aside>

            </div>

            {/* =========================
                RELATED POSTS
            ========================= */}

            {relatedPosts.length > 0 && (
              <section className="mt-20 pt-12 border-t border-[#262626]">

                <div className="flex items-center justify-between mb-10">

                  <div className="flex items-center gap-4">

                    <span className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/30">
                      <i className="fa-solid fa-images text-orange-500 text-xl" />
                    </span>

                    <div>

                      <h2 className="text-2xl font-bold">
                        مقالات قد تعجبك
                      </h2>

                      <p className="text-neutral-500 text-sm">
                        استكشف المزيد من المحتوى
                      </p>

                    </div>

                  </div>

                  <Link
                    to="/blog"
                    className="hidden sm:flex items-center gap-2 text-orange-500 hover:text-orange-400"
                  >
                    عرض الكل
                    <i className="fa-solid fa-arrow-left" />
                  </Link>

                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                  {relatedPosts.map((item) => (
                    <Link
                      key={item.link}
                      to={item.link}
                      className="group bg-[#111111] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition"
                    >

                      <div className="relative h-48 overflow-hidden">

                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent" />

                        <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                          {item.category}
                        </span>

                      </div>

                      <div className="p-5">

                        <h3 className="font-bold group-hover:text-orange-500 transition-colors line-clamp-2 mb-3">
                          {item.title}
                        </h3>

                        <div className="flex items-center justify-between text-sm text-neutral-500">

                          <span>
                            {item.author}
                          </span>

                          <span>
                            {item.readTime}
                          </span>

                        </div>

                      </div>

                    </Link>
                  ))}

                </div>

              </section>
            )}

          </section>

        </article>
      </main>

      <Footer />
    </>
  );
}

/* =========================
   SHARE BUTTONS
========================= */

function ShareButtons() {
  const shareUrl = window.location.href;

  const share = (platform) => {
    let url = "";

    if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}`;
    }

    if (platform === "linkedin") {
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`;
    }

    if (platform === "whatsapp") {
      url = `https://wa.me/?text=${encodeURIComponent(
        shareUrl
      )}`;
    }

    if (url) {
      window.open(
        url,
        "_blank",
        "noopener,noreferrer,width=700,height=500"
      );
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("تم نسخ رابط المقال");
    } catch {
      alert("لم نتمكن من نسخ الرابط");
    }
  };

  return (
    <div className="mt-6 p-6 bg-[#111111] rounded-2xl border border-[#262626]">

      <div className="flex items-center justify-between flex-wrap gap-4">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
            <i className="fa-solid fa-share-nodes text-orange-500" />
          </div>

          <h3 className="font-bold">
            شارك المقال
          </h3>

        </div>

        <div className="flex gap-2">

          {/* X */}

          <button
            onClick={() => share("twitter")}
            className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#1da1f2] hover:text-white transition"
            aria-label="مشاركة على X"
          >
            <i className="fa-brands fa-x-twitter" />
          </button>

          {/* LinkedIn */}

          <button
            onClick={() => share("linkedin")}
            className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white transition"
            aria-label="مشاركة على LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in" />
          </button>

          {/* WhatsApp */}

          <button
            onClick={() => share("whatsapp")}
            className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-[#25d366] hover:text-white transition"
            aria-label="مشاركة على WhatsApp"
          >
            <i className="fa-brands fa-whatsapp" />
          </button>

          {/* Copy */}

          <button
            onClick={copyLink}
            className="w-11 h-11 bg-[#1a1a1a] border border-[#262626] rounded-xl flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition"
            aria-label="نسخ الرابط"
          >
            <i className="fa-solid fa-link" />
          </button>

        </div>

      </div>

    </div>
  );
}

export default BlogDetails;
