import { motion } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import interiorImage from "@/assets/interior.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={interiorImage}
          alt="Vaazhailla Leaf House interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold font-body text-sm sm:text-base tracking-[0.3em] uppercase mb-6"
        >
          Authentic South Indian Dining
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
        >
          <span className="text-foreground">Vaazhailla</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl italic text-gold-light mb-8"
        >
          — Leaf House —
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-12 font-body leading-relaxed"
        >
          Where tradition meets taste. Experience the warmth of banana leaf dining 
          with flavors rooted in South Indian heritage.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <button
            onClick={() => document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary hover:bg-leaf-light text-primary-foreground px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
          >
            Explore Our Menu
          </button>
          <a
            href="tel:9790018002"
            className="flex items-center gap-2 border border-gold/40 text-gold hover:bg-gold/10 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Order Now
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
