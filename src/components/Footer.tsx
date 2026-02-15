import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Vaazhailla
            </h3>
            <p className="text-gold text-sm mb-4">— Leaf House —</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Authentic South Indian flavors served with warmth and tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["Home", "About", "Menu", "Specialties", "Gallery", "Booking"].map((l) => (
                <button
                  key={l}
                  onClick={() => scrollTo(`#${l.toLowerCase()}`)}
                  className="block text-muted-foreground hover:text-gold text-sm transition-colors"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a href="tel:9790018002" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
                <Phone className="w-4 h-4" /> +91 97900 18002
              </a>
              <a
                href="https://maps.app.goo.gl/mzCvcqp5yvCLLuuj8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
              >
                <MapPin className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Follow Us
            </h4>
            <a
              href="https://www.instagram.com/vaazhailla?igsh=d3R6cTgzMjQwcHBt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm"
            >
              <Instagram className="w-5 h-5" />
              @vaazhailla
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Vaazhailla — Leaf House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
