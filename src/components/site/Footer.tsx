import { MapPin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background px-6 lg:px-10 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-primary flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-display text-2xl font-semibold">Meuzac</div>
              <div className="text-xs text-background/60 tracking-widest uppercase">Haute-Vienne · 87</div>
            </div>
          </div>
          <p className="mt-5 text-background/70 max-w-md leading-relaxed text-sm">
            Site officiel de la commune de Meuzac. Évadez-vous en pleine nature,
            au cœur du Limousin.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 hover:bg-background/20 transition-smooth text-sm"
          >
            <Facebook className="w-4 h-4" />
            Suivez-nous sur Facebook
          </a>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/90">La mairie</h4>
          <ul className="space-y-2.5 text-sm text-background/70">
            <li><a href="#" className="hover:text-background transition-smooth">Le conseil municipal</a></li>
            <li><a href="#" className="hover:text-background transition-smooth">Délibérations</a></li>
            <li><a href="#" className="hover:text-background transition-smooth">Horaires & contact</a></li>
            <li><a href="#" className="hover:text-background transition-smooth">Démarches</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/90">Découvrir</h4>
          <ul className="space-y-2.5 text-sm text-background/70">
            <li><a href="#" className="hover:text-background transition-smooth">Tourisme & loisirs</a></li>
            <li><a href="#" className="hover:text-background transition-smooth">Vie associative</a></li>
            <li><a href="#" className="hover:text-background transition-smooth">Agenda</a></li>
            <li><a href="#" className="hover:text-background transition-smooth">Patrimoine</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-background/10 flex flex-wrap items-center justify-between gap-4 text-xs text-background/50">
        <div>© {new Date().getFullYear()} Commune de Meuzac. Tous droits réservés.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-background">Mentions légales</a>
          <a href="#" className="hover:text-background">Accessibilité</a>
          <a href="#" className="hover:text-background">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
