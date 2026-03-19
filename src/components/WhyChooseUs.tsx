import { ShieldCheck, Leaf, Clock, ThumbsUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Équipe vérifiée & assurée",
    description: "Chaque intervenant est sélectionné, formé et couvert par notre assurance. Vous nous ouvrez votre porte, on le sait.",
  },
  {
    icon: Leaf,
    title: "Produits éco-responsables",
    description: "On utilise des produits certifiés, sans produits chimiques agressifs — pour votre santé et celle de la planète.",
  },
  {
    icon: Clock,
    title: "Devis gratuit sous 24h",
    description: "On répond vite. Envoyez votre demande le soir, vous avez votre devis le lendemain matin.",
  },
  {
    icon: ThumbsUp,
    title: "100% satisfait ou on revient",
    description: "Si quelque chose ne vous convient pas, on revient le corriger sans frais supplémentaires. Simple.",
  },
];

const WhyChooseUs = () => (
  <section id="pourquoi" className="py-20 md:py-28 bg-background">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Pourquoi choisir ZONET ?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Parce qu'on ne fait pas juste le ménage — on prend soin de vos espaces comme si c'était les nôtres.
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
