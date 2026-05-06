import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { QuickAccess } from "@/components/site/QuickAccess";
import { Discover } from "@/components/site/Discover";
import { MayorWord } from "@/components/site/MayorWord";
import { News } from "@/components/site/News";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Saint-Hilaire-Bonneval · Évadez-vous en pleine nature en Haute-Vienne" },
      {
        name: "description",
        content:
          "Site officiel de la commune de Saint-Hilaire-Bonneval (87) : démarches, actualités, tourisme, vie locale et patrimoine au cœur du Limousin.",
      },
      { property: "og:title", content: "Saint-Hilaire-Bonneval · Commune de Haute-Vienne" },
      {
        property: "og:description",
        content: "Évadez-vous en pleine nature : étangs, forêts et patrimoine vivant.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <QuickAccess />
      <Discover />
      <MayorWord />
      <News />
      <CTA />
      <Footer />
    </main>
  );
}
