import { MapPin, Facebook, Clock } from "lucide-react";
import logo from "@/assets/saint-hilaire-bonneval-logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <img src={logo} alt="Blason de Saint-Hilaire-Bonneval" className="w-9 h-9 object-contain" />
              </div>
              <div>
                <div className="font-display text-xl font-semibold uppercase">Commune de Saint-Hilaire-Bonneval</div>
                <div className="text-[10px] text-background/60 tracking-[0.22em] uppercase mt-0.5">Haute-Vienne · 87260</div>
              </div>
            </div>
            <p className="mt-5 text-background/70 max-w-md leading-relaxed text-sm">
              Site officiel de la Mairie de Saint-Hilaire-Bonneval. Retrouvez ici toutes les
              informations relatives à la vie municipale, aux services publics
              et au territoire communal.
            </p>
            <p className="mt-4 text-[11px] tracking-[0.18em] uppercase text-background/50">
              République Française · Liberté · Égalité · Fraternité
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-background/10 hover:bg-background/20 transition-smooth text-sm"
            >
              <Facebook className="w-4 h-4" />
              Suivez-nous sur Facebook
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-[0.18em] text-background/90 pb-2 border-b border-background/15">La mairie</h4>
            <ul className="space-y-2.5 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-smooth">Le conseil municipal</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Délibérations & arrêtés</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Démarches en ligne</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Marchés publics</a></li>
            </ul>
            <div className="mt-6 pt-4 border-t border-background/10 space-y-2 text-xs text-background/60">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>Place de la Mairie<br />87260 Saint-Hilaire-Bonneval</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>Lun–Ven · 9h–12h / 14h–17h</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xs uppercase tracking-[0.18em] text-background/90 pb-2 border-b border-background/15">Découvrir</h4>
            <ul className="space-y-2.5 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-smooth">Tourisme & loisirs</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Vie associative</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Agenda communal</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Patrimoine</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-background/10 flex flex-wrap items-center justify-between gap-4 text-xs text-background/50">
          <div>© {new Date().getFullYear()} Mairie de Saint-Hilaire-Bonneval · Tous droits réservés</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background">Mentions légales</a>
            <a href="#" className="hover:text-background">Accessibilité</a>
            <a href="#" className="hover:text-background">Confidentialité</a>
            <a href="#" className="hover:text-background">Plan du site</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
