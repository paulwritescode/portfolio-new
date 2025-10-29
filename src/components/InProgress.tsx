import { IconArrowLeft, IconRocket } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function InProgress() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white dark:bg-black">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <IconRocket className="w-24 h-24 text-black dark:text-white animate-bounce" />
            <div className="absolute inset-0 bg-black/10 dark:bg-white/10 rounded-full blur-2xl animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black dark:text-white">
          Coming Soon
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          This project is currently in development
        </p>
        
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-md mx-auto">
          We're working hard to bring you something amazing. Check back soon for updates!
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-black dark:text-white rounded-lg transition-colors border border-black/30 dark:border-white/30 hover:border-black/50 dark:hover:border-white/50 group"
        >
          <IconArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Have questions? Feel free to{" "}
            <a
              href="mailto:kinyattipaul@gmail.com"
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 underline"
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

