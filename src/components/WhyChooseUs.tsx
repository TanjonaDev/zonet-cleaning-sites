import { ShieldCheck, Leaf, Clock, ThumbsUp } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Expertise réseau & multi-sites",
    description: "On gère l'entretien de plusieurs points de vente simultanément, avec la même rigueur sur chaque site.",
  },
  {
    icon: Leaf,
    title: "Produits conformes aux normes",
    description: "Produits certifiés adaptés aux environnements médicaux et commerciaux — sans risque pour vos équipes ni vos clients.",
  },
  {
    icon: Clock,
    title: "Interventions hors horaires",
    description: "On s'adapte à vos plages d'ouverture. Tôt le matin, tard le soir, le week-end — sans jamais gêner votre activité.",
  },
  {
    icon: ThumbsUp,
    title: "Interlocuteur dédié & réactif",
    description: "Un contact unique pour tous vos sites. Un problème signalé, une intervention planifiée dans les 24h.",
  },
];

const WhyChooseUs = () => (
  <section id="pourquoi" className="py-20 md:py-28 bg-background">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Pourquoi les réseaux choisissent ZONET ?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Parce qu'une chaîne de magasins ou de pharmacies n'a pas le droit à l'approximation. Ni sur l'hygiène, ni sur la discrétion, ni sur la ponctualité.
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
