import AnimatedSection from "@/components/AnimatedSection";
import { Quote } from "lucide-react";

const clients = [
  {
    name: "Optical Center",
    type: "Réseau d'optique",
    quote:
      "ZONET intervient régulièrement dans nos centres. Un service irréprochable, ponctuel et toujours à la hauteur de nos exigences.",
    featured: true,
  },
  {
    name: "Pharmacie des Halles",
    type: "Pharmacie",
    quote: "Sérieux, discrets et efficaces. Nous recommandons ZONET sans hésiter.",
    featured: false,
  },
  {
    name: "Pharmacie du Marché",
    type: "Pharmacie",
    quote: "Une équipe professionnelle qui comprend les contraintes d'un espace médical.",
    featured: false,
  },
  {
    name: "Pharmacie Centrale",
    type: "Pharmacie",
    quote: "Qualité constante et respect des protocoles d'hygiène. Parfait pour notre secteur.",
    featured: false,
  },
];

const Clients = () => (
  <section className="py-20 md:py-28 bg-alt">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-14">
          <p className="text-sm font-heading font-semibold text-accent uppercase tracking-widest mb-3">
            Références
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Nos clients en parlent mieux que nous
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ils nous font confiance pour maintenir leurs espaces propres et accueillants, chaque jour.
          </p>
        </div>
      </AnimatedSection>

      {/* Featured client */}
      <AnimatedSection delay={0.1}>
        <div className="bg-primary rounded-2xl p-8 md:p-10 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary-light/20 rounded-bl-full pointer-events-none" />
          <Quote className="text-accent mb-4" size={36} />
          <blockquote className="text-primary-foreground text-lg md:text-xl leading-relaxed max-w-3xl mb-6 italic">
            "{clients[0].quote}"
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center font-heading font-bold text-accent text-sm">
              OC
            </div>
            <div>
              <p className="font-heading font-bold text-primary-foreground">{clients[0].name}</p>
              <p className="text-primary-foreground/60 text-sm">{clients[0].type} — Client fidèle</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Other clients */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {clients.slice(1).map((client, i) => (
          <AnimatedSection key={client.name} delay={0.15 + i * 0.08}>
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border h-full flex flex-col">
              <Quote className="text-accent/40 mb-3" size={24} />
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic mb-5">
                "{client.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center font-heading font-bold text-accent text-xs">
                  {client.name[0]}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">{client.name}</p>
                  <p className="text-muted-foreground text-xs">{client.type}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
