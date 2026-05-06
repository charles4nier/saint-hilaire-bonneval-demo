import heroImg from "@/assets/meuzac-hero.jpg";
import { ArrowRight, Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Vue aérienne de Meuzac et ses étangs au coucher du soleil"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-foreground/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-24 min-h-[100svh] flex flex-col justify-end">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary text-primary-foreground text-[11px] font-semibold tracking-[0.18em] uppercase">
            <Leaf className="w-3.5 h-3.5" />
            Site officiel de la commune
          </span>

          <h1 className="mt-6 text-white font-display font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Bienvenue à <span className="text-sunshine">Meuzac</span>,
            <br />
            au cœur de la Haute-Vienne.
          </h1>

          <div className="mt-6 w-20 h-1 bg-coral" />

          <p className="mt-6 text-white/90 text-lg max-w-xl leading-relaxed">
            Entre étangs, forêts et patrimoine vivant, la commune vous accueille.
            Retrouvez ici vos démarches, l'actualité municipale et toutes les
            informations utiles à la vie locale.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#demarches"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm shadow-elegant hover:bg-primary/90 transition-smooth"
            >
              Effectuer une démarche
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </a>
            <a
              href="#decouvrir"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold uppercase tracking-wider text-sm hover:bg-white/20 transition-smooth"
            >
              Découvrir la commune
            </a>
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-10 right-10 items-center gap-3 text-white/80 text-sm">
          <div className="w-12 h-px bg-white/40" />
          <span className="tracking-widest uppercase text-xs">Scroll</span>
        </div>
      </div>
    </section>
  );
}
