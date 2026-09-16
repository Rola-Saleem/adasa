import { Link } from "react-router-dom";

function Navbar() {
return (
<nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#262626]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

      <Link to="/" className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
          <span className="text-white font-bold text-2xl">ع</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xl font-bold text-white">
            عدسة
          </span>

          <span className="text-xs text-orange-400/80">
            عالم التصوير الفوتوغرافي
          </span>
        </div>
      </Link>

      <div className="hidden md:flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">

        <Link
          to="/"
          className="px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        >
          الرئيسية
        </Link>

        <Link
          to="/blog"
          className="px-5 py-2.5 rounded-full text-sm font-medium text-neutral-400 hover:text-white transition"
        >
          المدونة
        </Link>

        <Link
          to="/about"
          className="px-5 py-2.5 rounded-full text-sm font-medium text-neutral-400 hover:text-white transition"
        >
          من نحن
        </Link>

      </div>

      <Link
        to="/blog"
        className="hidden md:block px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold hover:scale-105 transition"
      >
        ابدأ القراءة
      </Link>

    </div>
  </div>
</nav>


);
}

export default Navbar;