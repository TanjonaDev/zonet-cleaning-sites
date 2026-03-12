import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = () => (
  <section className="relative min-h-[90vh] flex flex-col bg-background overflow-hidden">
    {/* Diagonal blue shapes */}
    <div className="absolute top-0 right-0 w-[60%] h-full overflow-hidden pointer-events-none">
      <div
        className="absolute -top-20 -right-20 w-[120%] h-[70%] bg-primary origin-top-right"
        style={{ transform: "rotate(-12deg) translateX(10%)" }}
      />
      <div
        className="absolute top-[15%] -right-10 w-[100%] h-[60%] bg-primary-light/80 origin-top-right"
        style={{ transform: "rotate(-8deg) translateX(15%)" }}
      />
    </div>

    {/* Content */}
    <div className="container relative z-10 flex-1 flex flex-col justify-center pt-28 pb-40 md:pb-48">
      <AnimatedSection>
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/images/logo-zonet.png"
              alt="ZONET"
              className="h-10 md:h-12"
            />
          </div>
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

    {/* Cleaning tools image */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl z-20 pointer-events-none">
      <img
        src={cleaningTools}
        alt="Outils de nettoyage professionnels"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Bottom blue band behind image */}
    <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-primary z-10" />
  </section>
);

export default Hero;
