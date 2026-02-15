import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Find Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Visit Vaazhailla
          </h2>
          <div className="leaf-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden h-[350px] sm:h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0!2d78.0!3d10.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAwJzAwLjAiTiA3OMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vaazhailla location"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">Vaazhailla — Leaf House</p>
                <a
                  href="https://maps.app.goo.gl/mzCvcqp5yvCLLuuj8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold hover:text-gold-light mt-2 text-sm transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  Get Directions on Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Contact</h3>
                <a href="tel:9790018002" className="text-muted-foreground hover:text-gold transition-colors block">
                  +91 97900 18002
                </a>
                <a href="tel:9442690391" className="text-muted-foreground hover:text-gold transition-colors block">
                  +91 94426 90391
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">Lunch: 12:00 PM – 3:30 PM</p>
                <p className="text-muted-foreground">Dinner: 6:30 PM – 11:00 PM</p>
                <p className="text-muted-foreground text-sm mt-1">Open all 7 days</p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/mzCvcqp5yvCLLuuj8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-leaf-light text-primary-foreground px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Navigation className="w-4 h-4" />
              Navigate to Restaurant
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
