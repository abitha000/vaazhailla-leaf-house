import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import biryaniImg from "@/assets/hero-biryani.jpg";
import chicken65Img from "@/assets/chicken-65.jpg";
import tandooriImg from "@/assets/tandoori.jpg";
import parottaImg from "@/assets/parotta.jpg";
import dragonImg from "@/assets/dragon-chicken.jpg";
import mandiImg from "@/assets/mandi.jpg";

const specialties = [
  {
    name: "Seeraga Samba Biryani",
    desc: "Fragrant seeraga samba rice layered with tender chicken and aromatic spices",
    image: biryaniImg,
    tag: "Bestseller",
  },
  {
    name: "Chicken 65",
    desc: "Crispy, fiery, and bursting with South Indian spice",
    image: chicken65Img,
    tag: "Must Try",
  },
  {
    name: "Tandoori Chicken",
    desc: "Charcoal-kissed, marinated overnight in our secret blend",
    image: tandooriImg,
    tag: "Signature",
  },
  {
    name: "Vaazhailla Parotta",
    desc: "Our signature layered parotta, golden and flaky perfection",
    image: parottaImg,
    tag: "House Special",
  },
  {
    name: "Dragon Chicken",
    desc: "Bold Indo-Chinese flavors with a fiery kick",
    image: dragonImg,
    tag: "Spicy",
  },
  {
    name: "Chicken Mandi",
    desc: "Slow-cooked aromatic rice feast, perfect for sharing",
    image: mandiImg,
    tag: "Premium",
  },
];

const SpecialtiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="specialties" className="section-padding bg-gradient-dark" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Chef's Picks
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Specialties
          </h2>
          <div className="leaf-divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl hover-lift"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute top-4 left-4 bg-gold/90 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
