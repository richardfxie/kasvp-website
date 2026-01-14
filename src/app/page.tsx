"use client";

import PageTransition from "@/components/PageTransition";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function Home() {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <PlaceholderImage
              src="/images/hero-domino.jpg"
              alt="Domino Sugar Factory - Brooklyn Waterfront"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-white">
              KAS VENTURE
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-white mt-2">
              PARTNERS
            </h1>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
