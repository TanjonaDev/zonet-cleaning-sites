import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const serviceOptions = [
  "Ménage régulier à domicile",
  "Nettoyage de bureaux et locaux",
  "Grand ménage de printemps",
  "Nettoyage après travaux",
  "Repassage à domicile",
  "Nettoyage de vitres",
];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());
    console.log("Form submission:", values);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-alt">
      <div className="container max-w-2xl">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Demandez votre devis gratuit
            </h2>
            <p className="text-muted-foreground">
              Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {submitted ? (
            <div className="bg-card rounded-xl p-10 text-center shadow-sm border border-border">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5">
                <Send className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Merci pour votre demande !</h3>
              <p className="text-muted-foreground">
                Nous avons bien reçu votre message. Notre équipe vous contactera dans les plus brefs délais.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-xl p-8 shadow-sm border border-border space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold font-heading text-foreground mb-1.5">
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Jean Dupont"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold font-heading text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="jean@exemple.fr"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold font-heading text-foreground mb-1.5">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold font-heading text-foreground mb-1.5">
                  Type de prestation
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full h-11 px-4 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Sélectionnez un service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold font-heading text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Décrivez vos besoins..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send size={18} />
                Envoyer ma demande
              </Button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactForm;
