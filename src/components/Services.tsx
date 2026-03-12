import {
  Home,
  Building2,
  SprayCanIcon,
  HardHat,
  Shirt,
  Blinds,
} from "lucide-react";
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
      <AnimatedSection>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Nos Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Des prestations de nettoyage complètes et personnalisées pour répondre à tous vos besoins.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.1}>
            <div className="group bg-card rounded-xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-border h-full">
              <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors">
                <service.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
