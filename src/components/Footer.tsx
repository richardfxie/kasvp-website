import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm text-white/60">
      <p>
        © {new Date().getFullYear()} by KAS Venture Partners.{" "}
        <Link href="/legal" className="hover:text-white/80 transition-colors">
          Legal Disclosure
        </Link>
      </p>
    </footer>
  );
}
