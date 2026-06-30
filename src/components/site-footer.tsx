import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="px-8 py-10 text-center text-xs text-[#3D5A56]/60 space-y-2 border-t border-[#E8ECD6] font-[family-name:var(--font-outfit)]">
      <p>© {new Date().getFullYear()} VORM.DIGITAL — Marco Günder (Geb. Eggens), Berlin</p>
      <div className="flex items-center justify-center gap-4">
        <Link href="/impressum" className="hover:text-[#3D5A56] transition-colors">
          Impressum
        </Link>
        <Link href="/datenschutz" className="hover:text-[#3D5A56] transition-colors">
          Datenschutz
        </Link>
      </div>
    </footer>
  );
}
