import { ShieldCheck, Leaf, Clock, ThumbsUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Équipe de confiance",
    description: "Personnel vérifié, formé et assuré pour votre tranquillité.",
  },
  {
    icon: Leaf,
    title: "Produits écologiques",
    description: "Des produits respectueux de l'environnement et de votre santé.",
  },
  {
    icon: Clock,
    title: "Devis sous 24h",
    description: "Réponse rapide et devis gratuit pour toute demande.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction garantie",
    description: "Nous ne partons pas tant que vous n'êtes pas satisfait.",
  },
];

const WhyChooseUs = () => (
  <section id="pourquoi" className="py-20 md:py-28 bg-background">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Pourquoi nous choisir
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Des valeurs solides au service de votre satisfaction.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r, i) => (
          <AnimatedSection key={r.title} delay={i * 0.1}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-5">
                <r.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
