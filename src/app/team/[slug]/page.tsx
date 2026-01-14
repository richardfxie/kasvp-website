"use client";

import PageTransition from "@/components/PageTransition";
import { teamMembers } from "@/data/team";
import LinkedInIcon from "@/components/LinkedInIcon";
import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

export default function TeamMemberPage() {
  const params = useParams();
  const slug = params.slug as string;

  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Back Link */}
          <Link
            href="/team"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8 group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">
              &lt;
            </span>
            Back
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Bio Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-2">
                {member.name}
              </h1>
              <p className="text-xl md:text-2xl italic text-white/80 mb-8">
                {member.title}
              </p>
              <div className="space-y-6 text-white/90 leading-relaxed">
                <p>{member.bio}</p>
              </div>

              {/* LinkedIn */}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 text-white/70 hover:text-white transition-colors"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <LinkedInIcon className="w-7 h-7" />
                </a>
              )}
            </div>

            {/* Photo */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
                <PlaceholderImage
                  src={member.image}
                  alt={member.name}
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
