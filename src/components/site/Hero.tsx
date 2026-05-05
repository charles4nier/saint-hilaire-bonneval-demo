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
      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-24 min-h-[100svh] flex flex-col justify-end">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-medium tracking-wide uppercase">
            <Leaf className="w-3.5 h-3.5" />
            Bienvenue en Haute-Vienne
          </span>

          <h1 className="mt-6 text-white font-display font-semibold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            Meuzac,
            <br />
            <span className="font-script text-accent text-6xl md:text-8xl lg:text-9xl font-medium italic">
              évadez-vous
            </span>
            <br />
            en pleine nature.
          </h1>

          <p className="mt-8 text-white/90 text-lg md:text-xl max-w-xl leading-relaxed">
            Un village vivant entre étangs, forêts et chemins de traverse. Découvrez
            les services, événements et richesses de notre commune.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#decouvrir"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-foreground font-semibold shadow-elegant hover:shadow-warm hover:scale-[1.03] transition-smooth"
            >
              Découvrir Meuzac
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </a>
            <a
              href="#demarches"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold hover:bg-white/20 transition-smooth"
            >
              Mes démarches en ligne
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
