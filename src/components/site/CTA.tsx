import { Mail, MapPin, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="px-6 lg:px-10 pb-28">
      <div className="max-w-7xl mx-auto relative overflow-hidden bg-gradient-sunset p-10 md:p-16 text-white shadow-elegant border-t-4 border-sunshine">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sunshine/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-berry/40 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-sunshine font-bold">Mairie de Saint-Hilaire-Bonneval</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight mt-3">
              Nous contacter
            </h2>
            <div className="mt-4 w-16 h-1 bg-sunshine" />
            <p className="mt-6 text-white/90 text-base leading-relaxed max-w-md">
              La mairie vous accueille du lundi au vendredi, de 9h à 12h et de 14h à 17h.
              Le secrétariat reste à votre disposition pour toute démarche.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-white text-coral font-semibold uppercase tracking-wider text-sm hover:bg-sunshine hover:text-foreground transition-smooth"
            >
              Prendre rendez-vous
            </a>
          </div>

          <div className="grid sm:grid-cols-1 gap-3">
            {[
              { icon: MapPin, label: "Adresse", value: "Le Bourg, 87260 Saint-Hilaire-Bonneval" },
              { icon: Phone, label: "Téléphone", value: "05 55 09 99 99" },
              { icon: Mail, label: "Email", value: "contact@Saint-Hilaire-Bonneval.fr" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-center gap-4 p-5 bg-white/15 backdrop-blur-md border-l-2 border-sunshine">
                  <div className="w-11 h-11 bg-white/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/75">{c.label}</div>
                    <div className="font-medium mt-0.5">{c.value}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
