"use client";

import PageTransition from "@/components/PageTransition";

export default function LegalPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-12">
            Legal Disclosure
          </h1>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-medium text-white mb-4">
                Disclaimer
              </h2>
              <p>
                The information contained on this website is for general
                informational purposes only. KAS Venture Partners makes no
                representations or warranties, express or implied, about the
                completeness, accuracy, reliability, suitability, or availability
                of the information contained on this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">
                No Investment Advice
              </h2>
              <p>
                Nothing on this website constitutes, or is meant to constitute,
                advice of any kind. If you require advice in relation to any
                financial or investment matter, you should consult an appropriate
                professional.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">
                Limitation of Liability
              </h2>
              <p>
                In no event shall KAS Venture Partners be liable for any special,
                direct, indirect, consequential, or incidental damages arising
                out of or in connection with your access or use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">
                Privacy Policy
              </h2>
              <p>
                Any personal information collected through this website will be
                used solely for the purpose of responding to inquiries and will
                not be shared with third parties without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white mb-4">Copyright</h2>
              <p>
                © {new Date().getFullYear()} KAS Venture Partners. All rights
                reserved. All content on this website, including text, graphics,
                logos, and images, is the property of KAS Venture Partners.
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
