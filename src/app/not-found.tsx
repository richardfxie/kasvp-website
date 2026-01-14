"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-8xl font-light mb-4">404</h1>
        <p className="text-xl text-white/70 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block px-8 py-3 border border-white/30 rounded-lg
                   hover:bg-white/10 transition-colors"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
