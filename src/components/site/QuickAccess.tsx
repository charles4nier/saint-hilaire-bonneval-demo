import { FileText, Gavel, Phone, CalendarDays, ArrowUpRight } from "lucide-react";

const items = [
  {
    icon: FileText,
    title: "Démarches administratives",
    desc: "État civil, urbanisme, demandes en quelques clics.",
    bg: "bg-primary/10 text-primary",
    ring: "group-hover:ring-primary/30",
  },
  {
    icon: Gavel,
    title: "Délibérations & Actes",
    desc: "Comptes-rendus du conseil municipal et arrêtés.",
    bg: "bg-coral/15 text-coral",
    ring: "group-hover:ring-coral/30",
  },
  {
    icon: Phone,
    title: "Services & Urgences",
    desc: "Numéros utiles et services publics à proximité.",
    bg: "bg-leaf/15 text-leaf",
    ring: "group-hover:ring-leaf/30",
  },
  {
    icon: CalendarDays,
    title: "Agenda du village",
    desc: "Marchés, festivités, vie associative et culturelle.",
    bg: "bg-sunshine/25 text-terracotta",
    ring: "group-hover:ring-sunshine/40",
  },
] as const;

export function QuickAccess() {
  return (
    <section id="demarches" className="relative -mt-24 z-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card rounded-[2rem] shadow-elegant p-6 md:p-10 border border-border/50">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Accès rapide</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2">
                Tout ce dont vous avez besoin, à portée de main
              </h2>
            </div>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-smooth">
              Voir tous les services <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <a
                  key={it.title}
                  href="#"
                  className="group relative p-6 rounded-2xl bg-secondary/60 hover:bg-card hover:shadow-soft border border-transparent hover:border-border transition-smooth"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${it.bg} ring-4 ring-transparent ${it.ring} group-hover:scale-110 transition-smooth`}>
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                  <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-smooth" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
