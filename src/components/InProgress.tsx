import { IconArrowLeft, IconRocket } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function InProgress() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <IconRocket className="w-24 h-24 text-teal-400 animate-bounce" />
            <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-2xl animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          Coming Soon
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          This project is currently in development
        </p>
        
        <p className="text-base md:text-lg text-slate-400 mb-12 max-w-md mx-auto">
          We're working hard to bring you something amazing. Check back soon for updates!
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-teal-400/10 hover:bg-teal-400/20 text-teal-400 rounded-lg transition-colors border border-teal-400/30 hover:border-teal-400/50 group"
        >
          <IconArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <div className="mt-16 pt-8 border-t border-slate-700">
          <p className="text-sm text-slate-500">
            Have questions? Feel free to{" "}
            <a
              href="mailto:kinyattipaul@gmail.com"
              className="text-teal-400 hover:text-teal-300 underline"
            >
              reach out
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InProgress;

