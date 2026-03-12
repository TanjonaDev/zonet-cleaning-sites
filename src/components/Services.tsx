import {
  Home,
  Building2,
  SprayCanIcon,
  HardHat,
  Shirt,
  Blinds,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Home,
    title: "Ménage régulier à domicile",
    description:
      "Un intérieur toujours propre grâce à nos interventions régulières adaptées à votre rythme.",
  },
  {
    icon: Building2,
    title: "Nettoyage de bureaux et locaux",
    description:
      "Des espaces de travail impeccables pour le bien-être de vos équipes et l'image de votre entreprise.",
  },
  {
    icon: SprayCanIcon,
    title: "Grand ménage de printemps",
    description:
      "Un nettoyage en profondeur pour redonner un coup de frais à votre logement ou vos locaux.",
  },
  {
    icon: HardHat,
    title: "Nettoyage après travaux",
    description:
      "Élimination complète de la poussière et des résidus de chantier pour un espace prêt à vivre.",
  },
  {
    icon: Shirt,
    title: "Repassage à domicile",
    description:
      "Un service de repassage soigné, directement chez vous, pour un linge impeccable.",
  },
  {
    icon: Blinds,
    title: "Nettoyage de vitres",
    description:
      "Des vitres étincelantes, sans traces, grâce à nos techniques professionnelles.",
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
              Ce que nous faisons
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Plus de cinq ans d'expérience dans le nettoyage résidentiel et commercial. Nous proposons plusieurs options adaptées à vos besoins.
            </p>
            <Button variant="accent" size="lg" asChild>
              <a href="#contact">Voir les détails</a>
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
