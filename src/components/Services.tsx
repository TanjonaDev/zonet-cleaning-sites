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
      "Votre maison toujours prête à vivre. On intervient selon la fréquence qui vous convient — hebdomadaire, bi-mensuelle ou à la demande.",
  },
  {
    icon: Building2,
    title: "Nettoyage de bureaux et locaux",
    description:
      "Un espace de travail propre, c'est une équipe qui se sent bien et une image soignée pour vos clients. On s'en charge, avant ou après vos horaires.",
  },
  {
    icon: SprayCanIcon,
    title: "Grand ménage de printemps",
    description:
      "Nettoyage en profondeur de fond en comble : placards, joints, recoins oubliés… On repart seulement quand tout brille.",
  },
  {
    icon: HardHat,
    title: "Nettoyage après travaux",
    description:
      "Peinture, plâtre, poussière de chantier — on efface toutes les traces pour que vous puissiez profiter de votre espace comme si de rien n'était.",
  },
  {
    icon: Shirt,
    title: "Repassage à domicile",
    description:
      "Fini la corvée de repassage. On s'occupe de votre linge directement chez vous, avec soin et dans les règles de l'art.",
  },
  {
    icon: Blinds,
    title: "Nettoyage de vitres",
    description:
      "Vitres, baies vitrées, velux — sans traces, sans auréoles, avec une visibilité parfaite. Pour voir la vie en clair.",
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
              Ce qu'on fait, <br className="hidden md:block" />et on le fait bien.
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Que ce soit chez vous ou dans vos locaux professionnels, ZONET propose une gamme complète de prestations sur mesure — avec le même niveau d'exigence à chaque intervention.
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
