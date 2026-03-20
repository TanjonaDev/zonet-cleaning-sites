import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = () => (
  <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">
    {/* Background image - plein écran sur mobile, moitié droite sur desktop */}
    <div className="hero-bg absolute top-0 right-0 md:w-[45%] h-full pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30 md:via-background/40 md:to-transparent" />
    </div>

    {/* Content */}
    <div className="container relative z-10 flex-1 flex flex-col justify-center pt-28 pb-40 md:pb-48">
      <AnimatedSection>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
            Vos magasins toujours{" "}
            <span className="text-primary">impeccables.</span>
          </h1>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <p className="text-foreground/80 text-lg md:text-xl max-w-xl mb-20">
          ZONET, spécialiste du nettoyage pour les chaînes de magasins et les
          pharmacies depuis plus de 30 ans. Discrets, rigoureux, adaptés à vos
          contraintes d'exploitation.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.25}>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button variant="accent" size="lg" asChild>
            <a href="#contact">Demander un devis gratuit</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#services">Nos prestations</a>
          </Button>
        </div>
      </AnimatedSection>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-primary z-10" />
  </section>
);

export default Hero;
