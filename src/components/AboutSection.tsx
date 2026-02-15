import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import bananaLeafMeal from "@/assets/banana-leaf-meal.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-gradient-dark" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={bananaLeafMeal}
                alt="Traditional banana leaf meal"
                className="w-full h-[400px] sm:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 font-body">
              Our Story
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Rooted in Tradition,{" "}
              <span className="text-gradient-gold">Served with Love</span>
            </h2>
            <div className="leaf-divider mb-8 !mx-0" />
            <p className="text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg">
              At Vaazhailla, every meal is a celebration of South Indian culinary heritage. 
              Our kitchen draws from generations of authentic recipes — from the 
              smoky depths of tandoor to the fiery sizzle of our signature starters.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base sm:text-lg">
              We believe in the beauty of banana leaf dining — where food is served 
              fresh, flavors are bold, and every guest feels at home. Whether it's our 
              legendary Seeraga Samba Biryani or a humble plate of layered parotta with 
              curry, each dish carries the soul of our tradition.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <p className="font-display text-3xl font-bold text-gold">50+</p>
                <p className="text-muted-foreground text-sm">Signature Dishes</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-3xl font-bold text-gold">100%</p>
                <p className="text-muted-foreground text-sm">Fresh Ingredients</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-3xl font-bold text-gold">♥</p>
                <p className="text-muted-foreground text-sm">Made with Love</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
