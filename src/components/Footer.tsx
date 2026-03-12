import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <img
            src="/images/logo-zonet.png"
            alt="ZONET"
            className="h-9 mb-4 brightness-0 invert"
          />
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Nettoyage tout corps d'état. Services professionnels pour particuliers et entreprises.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-sm font-heading font-bold text-primary-foreground mb-4 uppercase tracking-wider">
            Liens rapides
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Mentions légales
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-sm font-heading font-bold text-primary-foreground mb-4 uppercase tracking-wider">
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-primary-foreground/70">
              <MapPin size={16} className="text-accent shrink-0" />
              <span>123 Rue du Nettoyage, 75001 Paris</span>
            </li>
            <li>
              <a
                href="tel:+33100000000"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone size={16} className="text-accent shrink-0" />
                <span>01 XX XX XX XX</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@zonet.fr"
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail size={16} className="text-accent shrink-0" />
                <span>contact@zonet.fr</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container py-5 text-center text-xs text-primary-foreground/50">
        © 2026 ZONET. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
