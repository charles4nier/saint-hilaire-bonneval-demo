import { Link } from "@tanstack/react-router";
import { Menu, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Votre mairie", href: "/" },
  { label: "Vivre à Meuzac", href: "/" },
  { label: "Tourisme & Loisirs", href: "/" },
  { label: "Vie associative", href: "/" },
  { label: "Contact", href: "/" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-elegant group-hover:scale-105 transition-smooth">
              <MapPin className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
          </div>
          <div className="leading-none">
            <div
              className={`font-display text-2xl font-semibold tracking-tight ${
                scrolled ? "text-foreground" : "text-white drop-shadow-md"
              }`}
            >
              Meuzac
            </div>
            <div
              className={`text-[11px] tracking-[0.18em] uppercase mt-1 ${
                scrolled ? "text-muted-foreground" : "text-white/85"
              }`}
            >
              Haute-Vienne · 87
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth hover:bg-foreground/5 ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/95 hover:bg-white/15"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#demarches"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-warm text-accent-foreground text-sm font-semibold shadow-warm hover:scale-[1.03] transition-smooth"
          >
            Mes démarches
          </a>
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-xl ${scrolled ? "text-foreground" : "text-white"}`}
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-4 space-y-1">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="block px-4 py-3 rounded-xl text-foreground hover:bg-muted">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
