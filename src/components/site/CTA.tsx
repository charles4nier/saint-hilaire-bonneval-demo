import { Mail, MapPin, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="px-6 lg:px-10 pb-28">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-10 md:p-16 text-primary-foreground shadow-elegant">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-primary-glow/40 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Une question ?<br />
              <span className="font-script italic font-medium text-accent">On est là pour vous.</span>
            </h2>
            <p className="mt-5 text-primary-foreground/85 text-lg leading-relaxed max-w-md">
              La mairie vous accueille du lundi au vendredi. N'hésitez pas à
              nous contacter pour toute démarche ou information.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-foreground font-semibold shadow-soft hover:scale-[1.03] transition-smooth"
            >
              Nous contacter
            </a>
          </div>

          <div className="grid sm:grid-cols-1 gap-3">
            {[
              { icon: MapPin, label: "Adresse", value: "Place de la Mairie, 87380 Meuzac" },
              { icon: Phone, label: "Téléphone", value: "05 55 09 99 99" },
              { icon: Mail, label: "Email", value: "contact@meuzac.fr" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary-foreground/70">{c.label}</div>
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
