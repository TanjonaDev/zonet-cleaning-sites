import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const serviceOptions = [
  "Ménage régulier",
  "Nettoyage bureaux",
  "Grand ménage",
  "Après travaux",
  "Repassage",
  "Nettoyage vitres",
];

const ServiceBar = () => (
  <section className="relative z-30 -mt-12 md:-mt-14 mb-8">
    <div className="container">
      <AnimatedSection>
        <div className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <h3 className="text-xl font-extrabold text-foreground whitespace-nowrap font-heading">
            Nos prestations
          </h3>
          <select
            className="flex-1 h-11 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring w-full md:w-auto"
            defaultValue=""
          >
            <option value="" disabled>
              Type de service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <Button variant="accent" size="lg" asChild>
            <a href="#contact">Voir les détails</a>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ServiceBar;
