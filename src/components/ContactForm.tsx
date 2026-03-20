import { useState, FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const serviceOptions = [
  "Réseau de magasins / points de vente",
  "Officine pharmaceutique",
  "Nettoyage de vitrines & devantures",
  "Désinfection & hygiène renforcée",
  "Nettoyage après travaux / ouverture",
  "Contrat d'entretien régulier",
];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const data = new FormData(e.currentTarget);
    const values = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? "Erreur inconnue.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-alt">
      <div className="container max-w-2xl">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Parlons de vos points de vente
            </h2>
            <p className="text-muted-foreground">
              Indiquez-nous votre réseau et vos besoins — on revient vers vous sous 24h avec une proposition adaptée, sans engagement.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {submitted ? (
            <div className="bg-card rounded-xl p-10 text-center shadow-sm border border-border">
              <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5">
                <Send className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">C'est envoyé, merci !</h3>
              <p className="text-muted-foreground">
                Votre demande est bien reçue. Un membre de l'équipe ZONET vous recontacte dans les 24h — un email de confirmation vient de vous être envoyé.
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
                  <option value="">Type de point de vente / besoin</option>
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

              {error && (
                <p className="text-sm text-destructive text-center">{error}</p>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {loading ? "Envoi en cours…" : "Envoyer ma demande"}
              </Button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactForm;
