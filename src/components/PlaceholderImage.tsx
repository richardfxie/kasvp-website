"use client";

import Image from "next/image";
import { useState } from "react";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function PlaceholderImage({
  src,
  alt,
  fill = false,
  className = "",
  priority = false,
}: PlaceholderImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    // Show placeholder when image fails to load
    return (
      <div
        className={`bg-neutral-800 flex items-center justify-center ${
          fill ? "absolute inset-0" : "w-full h-full"
        } ${className}`}
      >
        <div className="text-center text-white/40 p-4">
          <svg
            className="w-16 h-16 mx-auto mb-2 opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">{alt}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
