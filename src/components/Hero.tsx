import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = () => (
  <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">
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
            Un intérieur impeccable,{" "}
            <span className="text-primary">on s'en occupe.</span>
          </h1>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-20">
          ZONET, c'est plus de 30 ans d'expertise au service de votre quotidien.
          Particuliers ou professionnels — devis gratuit sous 24h, satisfaction garantie.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.25}>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button variant="accent" size="lg" asChild>
            <a href="#contact">Demander un devis gratuit</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#services">Découvrir nos services</a>
          </Button>
        </div>
      </AnimatedSection>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-primary z-10" />
  </section>
);

export default Hero;
