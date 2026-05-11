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
    <section id="demarches" className="relative -mt-20 z-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card shadow-elegant border-t-4 border-coral p-6 md:p-10">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4 pb-6 border-b border-border">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-primary font-bold">Services en ligne</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold mt-2">
                Vos démarches administratives
              </h2>
            </div>
            <a href="#" className="text-sm text-leaf font-semibold hover:underline inline-flex items-center gap-1">
              Tous les services <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <a
                  key={it.title}
                  href="#"
                  className="group relative p-6 bg-card hover:bg-secondary/60 transition-smooth"
                >
                  <div className={`w-11 h-11 flex items-center justify-center ${it.bg}`}>
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold leading-snug">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                  <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-smooth" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
