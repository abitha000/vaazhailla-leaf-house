import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const menuCategories = [
  {
    name: "Parottas & Breads",
    items: [
      "Bun Parotta", "Nool Parotta", "Chappati", "Veg Kothu Parotta",
      "Egg Kothu Parotta", "Chicken Kothu Parotta", "Vaazhailla Parotta",
      "Plain Veechu Parotta", "Egg Veechu Parotta", "Egg Lappa", "Chicken Lappa",
      "Plain Roti", "Butter Roti", "Plain Naan", "Plain Kulcha",
      "Methi Roti", "Butter Naan", "Butter Kulcha", "Garlic Naan",
      "Butter Garlic Naan", "Chur Paratha", "Amritsari Naan"
    ],
  },
  {
    name: "Non-Veg Starters — South",
    items: [
      "Omelette", "Half Boil / Full Boil", "Double Omelette", "Kalakki / Vadiyal",
      "Egg Bhurji", "Fish Fry", "Kudal Kari (Intestine)", "Pallipalayam Chicken",
      "Chicken Chinthamani", "Nallampatti Chicken", "Chicken Kaattu Varuval",
      "Prawn Thokku", "Kadama Fry", "Nattukozhi Pallipalayam",
      "Nattukozhi Chinthamani", "Nattukozhi Nallampatti", "Nattukozhi Kattu Varuval"
    ],
  },
  {
    name: "Non-Veg Starters — Indo-Chinese",
    items: [
      "Egg Chilly", "Chicken Wings", "Chicken 65", "Chilly Chicken",
      "Chicken Manchurian", "Lemon Chicken", "Dragon Chicken", "Pepper Chicken",
      "Japan Chicken", "Drums of Heaven", "Chicken 65 (Boneless)",
      "Orange Chicken", "Chilly Fish", "Fish Finger", "Fish Manchurian",
      "Golden Fry Prawns", "Pepper Prawns", "Crab Lollipop",
      "Squid Pepper Fry", "Chilly Squid", "Mutton Pepper Fry"
    ],
  },
  {
    name: "Tandoori Specials",
    items: [
      "Tandoori Mushroom", "Paneer Tikka", "Kalmi Kabab", "Tangdi Kabab",
      "Andhra Kabab", "Pepper Kabab", "Murgh Malai Kabab", "Naram Dil Ka Murg",
      "Tandoori Chicken (Quarter)", "Tandoori Chicken (Half)", "Tandoori Chicken (Full)",
      "Al Faham Chicken (Quarter)", "Al Faham Chicken (Half)", "Al Faham Chicken (Full)"
    ],
  },
  {
    name: "Biryani Specials",
    items: [
      "Chicken Biryani", "Chicken Biryani (Seeraga Samba)", "Hyderabadi Chicken Biryani",
      "Mutton Biryani", "Chicken Mandi — Quarter", "Chicken Mandi — Half",
      "Chicken Mandi — Limited", "Chicken Mandi — Unlimited Lite",
      "Chicken Mandi — Unlimited Feast"
    ],
  },
  {
    name: "Veg Main Course",
    items: [
      "Curd Rice", "Jeera Rice", "Ghee Rice",
      "Fried Rice (Veg / Babycorn / Mushroom / Paneer)",
      "Schezwan Fried Rice (Veg / Babycorn / Mushroom / Paneer)",
      "Burnt Garlic Fried Rice (Veg / Babycorn / Mushroom / Paneer)",
      "Hakka Noodles (Veg / Babycorn / Mushroom / Paneer)",
      "Schezwan Hakka Noodles (Veg / Babycorn / Mushroom / Paneer)",
      "Burnt Garlic Hakka Noodles (Veg / Babycorn / Mushroom / Paneer)"
    ],
  },
  {
    name: "Non-Veg Main Course",
    items: [
      "Fried Rice (Egg / Chicken / Prawn / Mixed)",
      "Schezwan Fried Rice (Egg / Chicken / Prawn / Mixed)",
      "Burnt Garlic Fried Rice (Egg / Chicken / Prawn / Mixed)",
      "Hakka Noodles (Egg / Chicken / Prawn / Mixed)",
      "Schezwan Hakka Noodles (Egg / Chicken / Prawn / Mixed)",
      "Burnt Garlic Hakka Noodles (Egg / Chicken / Prawn / Mixed)"
    ],
  },
];

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Our Offerings
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Menu
          </h2>
          <div className="leaf-divider mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            A curated selection of authentic South Indian, tandoori, biryani, and 
            Indo-Chinese delicacies crafted with passion.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
        >
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Menu items grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {menuCategories[activeTab].items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="glass-card px-5 py-4 flex items-center gap-3 hover:border-gold/30 transition-colors duration-300 group"
            >
              <span className="w-2 h-2 rounded-full bg-gold/60 group-hover:bg-gold transition-colors flex-shrink-0" />
              <span className="text-foreground font-body text-sm sm:text-base">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
