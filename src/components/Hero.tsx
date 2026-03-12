import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary-light overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
    <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-foreground/5 blur-3xl" />

    <div className="container relative z-10 text-center py-24 md:py-32">
      <AnimatedSection>
        <div className="flex justify-center mb-8">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4">
            <img
              src="/images/logo-zonet.png"
              alt="ZONET"
              className="h-20 md:h-24"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-accent" size={20} />
          <span className="text-accent text-sm font-heading font-semibold tracking-wide uppercase">
            Nettoyage professionnel
          </span>
          <Sparkles className="text-accent" size={20} />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.25}>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 max-w-3xl mx-auto">
          Votre intérieur mérite le meilleur
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.35}>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
          Services de nettoyage sur mesure pour particuliers et professionnels.
          Propreté impeccable, équipe de confiance.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.45}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="accent" size="lg" asChild>
            <a href="#contact">Demander un devis</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#services">Nos services</a>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Hero;
