import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  featuredPosts,
  latestPosts,
  categories,
} from "../data/data";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />

      <main className="flex-grow pt-20">

        {/* ================= HERO ================= */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">

          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">

            <div className="text-center max-w-4xl mx-auto">

              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[#161616] border border-[#262626]">

                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>

                <span className="text-sm font-medium text-neutral-300">
                  مرحباً بك في عدسة
                </span>

              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">

                اكتشف{" "}

                <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  فن
                </span>

                <br />

                التصوير الفوتوغرافي

              </h1>

              <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">

                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                >
                  <span>استكشف المقالات</span>
                  <span className="text-xl">←</span>
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#161616] border border-[#262626] text-white rounded-xl font-semibold hover:border-orange-500/50 transition-all duration-300"
                >
                  <span>ⓘ</span>
                  <span>اعرف المزيد</span>
                </Link>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">

                {[
                  ["+50", "مقالة", "fa-newspaper"],
                  ["+10ألف", "قارئ", "fa-users"],
                  ["4", "تصنيفات", "fa-folder-open"],
                  ["6", "كاتب", "fa-pen-nib"],
                ].map(([number, label, icon]) => (

                  <div
                    key={label}
                    className="p-4 bg-[#161616] border border-[#262626] rounded-2xl hover:border-orange-500/30 hover:-translate-y-1 transition-all duration-300"
                  >

                    <i
                      className={`fa-solid ${icon} text-2xl text-orange-500 mb-2`}
                    />

                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                      {number}
                    </p>

                    <p className="text-neutral-500 text-sm">
                      {label}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* ================= FEATURED ================= */}
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">

          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/5 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">

              <div>

                <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#161616] border border-[#262626] rounded-full text-sm text-neutral-300">

                  <span className="w-2 h-2 rounded-full bg-orange-500" />

                  مميز

                </span>

                <h2 className="text-4xl font-bold text-white mb-3">
                  مقالات مختارة
                </h2>

                <p className="text-neutral-500 text-lg">
                  محتوى منتقى لبدء رحلة تعلمك
                </p>

              </div>

              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium hover:-translate-y-0.5 transition-all"
              >
                عرض الكل
                <span>←</span>
              </Link>

            </div>

            <div className="space-y-8">

              {featuredPosts.map((post) => (

                <article
                  key={post.title}
                  className="group bg-[#161616] rounded-3xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                >

                  <Link
                    to={post.link}
                    className="block"
                  >

                    <div className="grid md:grid-cols-2">

                      <div className="relative h-72 md:h-[400px] overflow-hidden">

                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        <span className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                          ★ مميز
                        </span>

                      </div>

                      <div className="p-8 md:p-10 flex flex-col justify-center">

                        <div className="flex items-center gap-3 mb-4">

                          <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                            {post.category}
                          </span>

                          <span className="text-sm text-neutral-500">
                            ◷ {post.readTime}
                          </span>

                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-neutral-400 mb-6 leading-relaxed">
                          {post.description}
                        </p>

                        <div className="flex items-center justify-between mt-auto">

                          <div className="flex items-center gap-3">

                            <img
                              src={post.authorImage}
                              alt={post.author}
                              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#262626]"
                            />

                            <div>

                              <p className="text-sm font-semibold text-white">
                                {post.author}
                              </p>

                              <p className="text-xs text-neutral-500">
                                {post.date}
                              </p>

                            </div>

                          </div>

                          <span className="text-orange-500 font-semibold text-sm">
                            اقرأ المقال ←
                          </span>

                        </div>

                      </div>

                    </div>

                  </Link>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* ================= CATEGORIES ================= */}
        <section className="py-24 bg-[#111111] border-y border-[#262626]">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-12">

              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#161616] border border-[#262626] rounded-full text-sm text-neutral-300">

                <span className="w-2 h-2 rounded-full bg-orange-500" />

                التصنيفات

              </span>

              <h2 className="text-4xl font-bold text-white mb-3">
                استكشف حسب الموضوع
              </h2>

              <p className="text-neutral-500 text-lg">
                اعثر على محتوى مصمم حسب اهتماماتك
              </p>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">

              {categories.map((category) => (

                <Link
                  key={category.name}
                  to={`/blog?category=${encodeURIComponent(category.name)}`}
                  className="group relative block p-6 rounded-2xl bg-[#161616] border border-[#262626] overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">

                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 border border-orange-500/20 group-hover:bg-white/20 group-hover:border-transparent">

                      <i
                        className={`fa-solid ${category.icon} text-xl text-orange-500 group-hover:text-white`}
                      />

                    </div>

                    <h3 className="font-bold text-lg text-white mb-1">
                      {category.name}
                    </h3>

                    <p className="text-sm text-neutral-500 group-hover:text-white/80">
                      {category.count || "اكتشف المقالات"}
                    </p>

                    <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20">

                      <span className="text-white">
                        ←
                      </span>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

        {/* ================= LATEST ================= */}
        <section className="py-24 bg-[#0a0a0a]">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">

              <div>

                <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#161616] border border-[#262626] rounded-full text-sm text-neutral-300">

                  <span className="w-2 h-2 rounded-full bg-orange-500" />

                  الأحدث

                </span>

                <h2 className="text-4xl font-bold text-white mb-3">
                  أحدث المقالات
                </h2>

                <p className="text-neutral-500 text-lg">
                  محتوى جديد طازج من المطبعة
                </p>

              </div>

              <Link
                to="/blog"
                className="text-orange-500 font-semibold hover:text-orange-400"
              >
                عرض جميع المقالات ←
              </Link>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {latestPosts.map((post) => (

                <article
                  key={post.title}
                  className="group bg-[#161616] rounded-2xl overflow-hidden border border-[#262626] hover:border-orange-500/30 transition-all duration-500"
                >

                  <Link
                    to={post.link}
                    className="block"
                  >

                    <div className="relative h-52 overflow-hidden">

                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute top-4 right-4">

                        <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                          {post.category}
                        </span>

                      </div>

                    </div>

                    <div className="p-6">

                      <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">

                        <span>
                          ◷ {post.readTime}
                        </span>

                        <span className="w-1 h-1 bg-neutral-600 rounded-full" />

                        <span>
                          {post.date}
                        </span>

                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-neutral-400 mb-5 text-sm leading-relaxed">
                        {post.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#262626]">

                        <div className="flex items-center gap-3">

                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-9 h-9 rounded-full object-cover"
                          />

                          <div>

                            <p className="text-sm font-medium text-white">
                              {post.author}
                            </p>

                            <p className="text-xs text-neutral-500">
                              {post.role}
                            </p>

                          </div>

                        </div>

                        <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                          ←
                        </div>

                      </div>

                    </div>

                  </Link>

                </article>

              ))}

            </div>

          </div>

        </section>

        {/* ================= NEWSLETTER ================= */}
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">

              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">

                <span className="text-3xl text-white">
                  ✉
                </span>

              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">

                اشترك في{" "}

                <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  نشرتنا الإخبارية
                </span>

              </h2>

              <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
                احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">

                <input
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500"
                />

                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all"
                >
                  اشترك الآن
                </button>

              </form>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">

                <span>
                  انضم لـ{" "}

                  <span className="text-white font-medium">
                    +10,000
                  </span>{" "}

                  مصور
                </span>

                <span>•</span>

                <span>
                  بدون إزعاج
                </span>

                <span>•</span>

                <span>
                  إلغاء الاشتراك في أي وقت
                </span>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Home;
