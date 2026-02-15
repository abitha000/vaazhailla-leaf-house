import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import interiorImg from "@/assets/interior.jpeg";
import biryaniImg from "@/assets/hero-biryani.jpg";
import tandooriImg from "@/assets/tandoori.jpg";
import parottaImg from "@/assets/parotta.jpg";
import friedRiceImg from "@/assets/fried-rice.jpg";
import mandiImg from "@/assets/mandi.jpg";

const images = [
  { src: interiorImg, alt: "Restaurant interior", span: "col-span-2 row-span-2" },
  { src: biryaniImg, alt: "Biryani", span: "" },
  { src: tandooriImg, alt: "Tandoori", span: "" },
  { src: parottaImg, alt: "Parotta", span: "" },
  { src: friedRiceImg, alt: "Fried rice", span: "" },
  { src: mandiImg, alt: "Mandi", span: "col-span-2" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Visual Feast
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Experience
          </h2>
          <div className="leaf-divider" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
