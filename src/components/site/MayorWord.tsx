import village from "@/assets/meuzac-village.jpg";
import { Quote } from "lucide-react";

export function MayorWord() {
  return (
    <section className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant">
            <img src={village} alt="Le village de Meuzac" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-card rounded-2xl px-6 py-5 shadow-elegant border border-border/60 max-w-[260px]">
            <div className="text-3xl font-display font-semibold text-primary">~850</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Habitants au cœur du Limousin</div>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Le mot du Maire</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 leading-tight">
            Bienvenue dans
            <br />
            <span className="font-script italic font-medium text-primary">notre commune</span>.
          </h2>

          <div className="mt-8 relative pl-8 border-l-2 border-primary/30">
            <Quote className="absolute -left-3 top-0 w-5 h-5 text-primary bg-background" />
            <p className="text-lg text-foreground/85 leading-relaxed italic">
              Meuzac, c'est l'histoire d'un village qui avance sans renier ses racines.
              Un lieu où la nature dicte le tempo, où les liens se tissent autour de
              projets partagés. Nous travaillons chaque jour pour faire vivre cette
              commune et la transmettre, embellie, aux générations futures.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display text-xl font-semibold">
              M
            </div>
            <div>
              <div className="font-semibold">Le Maire de Meuzac</div>
              <div className="text-sm text-muted-foreground">Et toute son équipe municipale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
