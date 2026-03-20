import {
  ShoppingBag,
  FlaskConical,
  SprayCanIcon,
  HardHat,
  Blinds,
  CalendarClock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: ShoppingBag,
    title: "Nettoyage de points de vente",
    description:
      "Sols, vitrines, cabines d'essayage, caisses — on entretient vos espaces de vente avant l'ouverture ou après la fermeture, sans perturber votre activité.",
  },
  {
    icon: FlaskConical,
    title: "Nettoyage de pharmacies",
    description:
      "Protocoles d'hygiène stricts, produits adaptés aux environnements médicaux. Vos pharmacies restent conformes et accueillantes pour vos patients.",
  },
  {
    icon: SprayCanIcon,
    title: "Désinfection & hygiène renforcée",
    description:
      "Désinfection complète des surfaces de contact, zones sensibles et espaces partagés. Essentiel pour les réseaux soumis aux normes sanitaires.",
  },
  {
    icon: HardHat,
    title: "Nettoyage après travaux / ouverture",
    description:
      "Rénovation, aménagement ou ouverture d'un nouveau point de vente — on remet vos locaux en état pour accueillir vos clients dès le premier jour.",
  },
  {
    icon: Blinds,
    title: "Nettoyage de vitres & devantures",
    description:
      "Vitrines commerciales, devantures, baies vitrées — sans traces ni auréoles. Une façade impeccable, c'est la première impression que vous donnez.",
  },
  {
    icon: CalendarClock,
    title: "Contrats d'entretien régulier",
    description:
      "Passages hebdomadaires ou quotidiens selon vos besoins. Un interlocuteur dédié, un planning fixe, zéro surprise.",
  },
];

const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-alt">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left - intro text */}
        <AnimatedSection>
          <div className="lg:sticky lg:top-28">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Des prestations taillées pour les chaînes de magasins.
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Chaînes d'optique, pharmacies, enseignes retail — ZONET intervient là où l'hygiène n'est pas une option. Chaque prestation est adaptée à vos contraintes horaires, réglementaires et d'image.
            </p>
            <Button variant="accent" size="lg" asChild>
              <a href="#contact">Demander un devis gratuit</a>
            </Button>
          </div>
        </AnimatedSection>

        {/* Right - service cards */}
        <div className="space-y-4">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <div className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-border flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/25 transition-colors">
                  <service.icon className="text-accent" size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
