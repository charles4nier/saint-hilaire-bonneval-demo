import { Link } from "@tanstack/react-router";
import { Menu, Phone, Mail, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/meuzac-logo.png";

const links = [
  { label: "La mairie", href: "/" },
  { label: "Vivre à Meuzac", href: "/" },
  { label: "Démarches", href: "#demarches" },
  { label: "Tourisme & Patrimoine", href: "#decouvrir" },
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
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Bandeau république */}
      <div
        className={`hidden md:block transition-smooth ${
          scrolled ? "bg-primary text-primary-foreground" : "bg-foreground/40 backdrop-blur-md text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-9 flex items-center justify-between text-[11px] tracking-[0.18em] uppercase">
          <span className="font-medium">République Française · Liberté · Égalité · Fraternité</span>
          <div className="flex items-center gap-5">
            <a href="tel:0555099999" className="inline-flex items-center gap-1.5 hover:opacity-80">
              <Phone className="w-3 h-3" />
              <span>05 55 09 99 99</span>
            </a>
            <a href="mailto:contact@meuzac.fr" className="inline-flex items-center gap-1.5 hover:opacity-80">
              <Mail className="w-3 h-3" />
              <span>contact@meuzac.fr</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barre principale */}
      <div
        className={`transition-smooth ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${scrolled ? "bg-card border border-border" : "bg-white/95"} shadow-soft`}>
              <img src={logo} alt="Blason de Meuzac" className="w-9 h-9 object-contain" />
            </div>
            <div className="leading-tight">
              <div
                className={`font-display text-xl font-semibold tracking-tight uppercase ${
                  scrolled ? "text-foreground" : "text-white drop-shadow-md"
                }`}
              >
                Commune de Meuzac
              </div>
              <div
                className={`text-[10px] tracking-[0.22em] uppercase mt-0.5 ${
                  scrolled ? "text-muted-foreground" : "text-white/85"
                }`}
              >
                Haute-Vienne · 87380
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-smooth border-b-2 border-transparent ${
                  scrolled
                    ? "text-foreground/80 hover:text-primary hover:border-primary"
                    : "text-white/95 hover:text-white hover:border-white"
                }`}
              >
                {l.label}
                <ChevronDown className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#demarches"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-primary text-primary-foreground text-[13px] font-semibold uppercase tracking-wider hover:bg-primary/90 transition-smooth"
            >
              Mes démarches
            </a>
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
              aria-label="Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-4 space-y-1">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="block px-4 py-3 text-foreground hover:bg-muted">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
