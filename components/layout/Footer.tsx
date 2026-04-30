import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#222222] py-12 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="font-[family-name:var(--font-serif)] text-lg text-[#F5F0E8]">
            Imre Guaglianone
          </p>
          <p className="text-xs text-[#888888] mt-1 font-[family-name:var(--font-sans)]">
            {profile.title}
          </p>
        </div>

        <nav className="flex items-center gap-6">
          <Link
            href="/work"
            className="text-sm text-[#888888] hover:text-[#F5F0E8] transition-colors font-[family-name:var(--font-sans)]"
          >
            Work
          </Link>
          <Link
            href="/services"
            className="text-sm text-[#888888] hover:text-[#F5F0E8] transition-colors font-[family-name:var(--font-sans)]"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm text-[#888888] hover:text-[#F5F0E8] transition-colors font-[family-name:var(--font-sans)]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[#888888] hover:text-[#F5F0E8] transition-colors font-[family-name:var(--font-sans)]"
          >
            Contact
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#888888] hover:text-[#F5F0E8] transition-colors font-[family-name:var(--font-sans)]"
          >
            LinkedIn
          </a>
        </nav>

        <p className="text-xs text-[#444444] font-[family-name:var(--font-sans)]">
          &copy; {year}
        </p>
      </div>
    </footer>
  );
}
