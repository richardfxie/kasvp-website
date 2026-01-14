"use client";

import PageTransition from "@/components/PageTransition";
import { teamMembers } from "@/data/team";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TeamPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-16">
            Investment Team
          </h1>

          <div className="space-y-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link
                  href={`/team/${member.slug}`}
                  className="group block"
                >
                  <h2 className="text-2xl md:text-3xl font-light mb-1 group-hover:opacity-70 transition-opacity">
                    {member.name}
                  </h2>
                  <p className="text-lg italic text-white/70">
                    {member.title}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
