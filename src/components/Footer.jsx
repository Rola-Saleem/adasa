function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-neutral-300 overflow-hidden border-t border-[#262626]">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo + Description */}
          <div>
            <a
              href="/"
              className="flex items-center gap-3 mb-6 group"
            >
              <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(249,115,22,0.3)]">
                <span className="text-white font-bold text-xl">
                  ع
                </span>
              </div>

              <span className="text-xl font-bold text-white">
                عدسة
              </span>
            </a>

            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              مدونة متخصصة في فن التصوير الفوتوغرافي،
              نشارك معكم أسرار المحترفين ونصائح عملية
              لتطوير مهاراتكم.
            </p>

            {/* Social Media */}
            <div className="flex gap-2">

              <a
                href="https://twitter.com/adasah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                𝕏
              </a>

              <a
                href="https://github.com/adasah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                Git
              </a>

              <a
                href="https://linkedin.com/company/adasah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                in
              </a>

              <a
                href="https://youtube.com/@adasah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 bg-[#161616] border border-[#262626] hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                ▶
              </a>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
              استكشف
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors"
                >
                  الرئيسية
                </a>
              </li>

              <li>
                <a
                  href="/blog"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors"
                >
                  المدونة
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors"
                >
                  من نحن
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
              التصنيفات
            </h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="/blog?category=إضاءة"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors"
                >
                  إضاءة
                </a>
              </li>

              <li>
                <a
                  href="/blog?category=بورتريه"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors"
                >
                  بورتريه
                </a>
              </li>

              <li>
                <a
                  href="/blog?category=مناظر طبيعية"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors"
                >
                  مناظر طبيعية
                </a>
              </li>

              <li>
                <a
                  href="/blog?category=تقنيات"
                  className="text-sm text-neutral-500 hover:text-orange-500 transition-colors"
                >
                  تقنيات
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
              ابقَ على اطلاع
            </h3>

            <p className="text-sm text-neutral-500 mb-4">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-3 bg-[#161616] border border-[#262626] rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all placeholder-neutral-600"
              />

              <button
                type="submit"
                className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/20"
              >
                اشترك
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-neutral-600">
              © 2026 عدسة. صنع بكل
              <span className="text-orange-500 mx-1">♥</span>
              جميع الحقوق محفوظة.
            </p>

            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors"
              >
                سياسة الخصوصية
              </a>

              <a
                href="/terms"
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors"
              >
                شروط الخدمة
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer