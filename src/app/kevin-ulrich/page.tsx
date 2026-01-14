"use client";

import PageTransition from "@/components/PageTransition";
import { kevinUlrich } from "@/data/team";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function KevinUlrichPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Bio Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-2">
                {kevinUlrich.name}
              </h1>
              <p className="text-xl md:text-2xl italic text-white/80 mb-8">
                {kevinUlrich.title}
              </p>
              <div className="space-y-6 text-white/90 leading-relaxed">
                {kevinUlrich.bio.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
                <PlaceholderImage
                  src={kevinUlrich.image}
                  alt={kevinUlrich.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
