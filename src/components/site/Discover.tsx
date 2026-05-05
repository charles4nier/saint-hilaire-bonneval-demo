import lake from "@/assets/meuzac-lake.jpg";
import village from "@/assets/meuzac-village.jpg";
import forest from "@/assets/meuzac-forest.jpg";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    img: lake,
    tag: "Nature",
    title: "Nos étangs et plans d'eau",
    desc: "Pêche, baignade et balades au fil de l'eau dans un cadre préservé.",
  },
  {
    img: forest,
    tag: "Randonnée",
    title: "Sentiers du Limousin",
    desc: "Plus de 40 km de chemins balisés à travers forêts et bocages.",
  },
  {
    img: village,
    tag: "Patrimoine",
    title: "L'âme du village",
    desc: "Église, lavoirs, croix de chemin : un héritage qui se raconte.",
  },
];

export function Discover() {
  return (
    <section id="decouvrir" className="py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">À découvrir</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 leading-tight">
            Un territoire <span className="font-script text-primary italic font-medium">à vivre</span>,
            au rythme de la nature.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Entre Limoges et Brive, Meuzac vous invite à ralentir. Découvrez ses paysages,
            son patrimoine et la chaleur d'un village où il fait bon vivre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className={`group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-elegant transition-smooth ${
                i === 0 ? "md:row-span-2 md:h-auto" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                <div className="absolute top-5 left-5">
                  <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-xs font-semibold text-foreground">
                    {c.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-7 text-white">
                  <h3 className="font-display text-2xl font-semibold leading-tight">{c.title}</h3>
                  <p className="mt-2 text-white/85 text-sm leading-relaxed">{c.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-smooth">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
