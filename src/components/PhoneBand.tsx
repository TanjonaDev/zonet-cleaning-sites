import { Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const PhoneBand = () => (
  <section className="bg-primary py-12 md:py-16">
    <div className="container">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <Phone className="text-accent" size={22} />
            </div>
            <p className="text-primary-foreground/80 text-lg font-heading font-semibold">
              Appelez-nous pour un devis gratuit
            </p>
          </div>
          <a
            href="tel:+33100000000"
            className="text-2xl md:text-3xl font-heading font-extrabold text-accent hover:text-accent/80 transition-colors"
          >
            📞 01 XX XX XX XX
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PhoneBand;
