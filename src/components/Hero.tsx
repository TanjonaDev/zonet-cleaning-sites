import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = () => (
  <section className="relative min-h-[90vh] flex flex-col bg-background overflow-hidden">
    {/* Background image - plein écran sur mobile, moitié droite sur desktop */}
    <div className="absolute top-0 right-0 w-full md:w-[45%] h-full pointer-events-none overflow-hidden">
      <img
        src="/images/hero-bg.png"
        alt=""
        className="w-full h-full object-cover hero-img"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30 md:via-background/40 md:to-transparent" />
    </div>

    {/* Content */}
    <div className="container relative z-10 flex-1 flex flex-col justify-center pt-28 pb-40 md:pb-48">
      <AnimatedSection>
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
            Service de nettoyage{" "}
            <span className="text-primary">professionnel garanti</span>
          </h1>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8">
          Plus de cinq ans d'expérience dans le nettoyage résidentiel et commercial.
          98% de nos clients sont satisfaits de nos services.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.25}>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button variant="accent" size="lg" asChild>
            <a href="#contact">Demander un devis</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#services">Nos services</a>
          </Button>
        </div>
      </AnimatedSection>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-primary z-10" />
  </section>
);

export default Hero;
