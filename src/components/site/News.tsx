import { Calendar, ArrowRight } from "lucide-react";

const news = [
  {
    date: "12 Mai",
    cat: "Conseil municipal",
    title: "Compte-rendu de la séance du 5 mai 2026",
    excerpt: "Budget primitif, voirie communale et nouveaux aménagements de l'étang.",
  },
  {
    date: "08 Mai",
    cat: "Vie locale",
    title: "Marché de producteurs : nouvelle saison",
    excerpt: "Tous les samedis matin sur la place du village, de mai à septembre.",
  },
  {
    date: "01 Mai",
    cat: "Travaux",
    title: "Rénovation de la salle des fêtes",
    excerpt: "Les travaux débutent en juin pour une livraison prévue à l'automne.",
  },
];

export function News() {
  return (
    <section className="py-28 px-6 lg:px-10 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-bold">Actualités municipales</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 leading-tight">
              Les dernières nouvelles de la commune
            </h2>
            <div className="mt-4 w-16 h-1 bg-coral" />
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary text-sm font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            Toutes les actualités <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n) => (
            <article
              key={n.title}
              className="group bg-card p-7 border-l-4 border-primary/30 hover:border-coral hover:shadow-soft transition-smooth cursor-pointer"
            >
              <div className="flex items-center gap-3 text-sm">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {n.date}
                </div>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                <span className="text-primary font-semibold uppercase tracking-wider text-xs">{n.cat}</span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold leading-snug group-hover:text-primary transition-smooth">
                {n.title}
              </h3>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{n.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-foreground">
                Lire la suite
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
