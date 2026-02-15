import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Calendar, Users, Clock } from "lucide-react";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  guests: z.string().min(1, "Number of guests is required"),
  message: z.string().max(500).optional(),
});

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({
    name: "", phone: "", date: "", time: "", guests: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const text = `🍽️ *New Table Booking — Vaazhailla*%0A%0A👤 Name: ${encodeURIComponent(form.name)}%0A📞 Phone: ${encodeURIComponent(form.phone)}%0A📅 Date: ${encodeURIComponent(form.date)}%0A🕐 Time: ${encodeURIComponent(form.time)}%0A👥 Guests: ${encodeURIComponent(form.guests)}${form.message ? `%0A💬 Note: ${encodeURIComponent(form.message)}` : ""}`;

    window.open(`https://wa.me/919442690391?text=${text}`, "_blank");
  };

  const inputClass = "w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all font-body text-sm";

  return (
    <section id="booking" className="section-padding bg-gradient-dark" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Reservations
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Book a Table
          </h2>
          <div className="leaf-divider mb-6" />
          <p className="text-muted-foreground">
            Reserve your spot and we'll confirm via WhatsApp.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-card p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Your Name</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className={inputClass} />
              {errors.name && <p className="text-spice text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" className={inputClass} />
              {errors.phone && <p className="text-spice text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <label className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                <Calendar className="w-3.5 h-3.5" /> Date
              </label>
              <input name="date" type="date" value={form.date} onChange={handleChange} className={inputClass} />
              {errors.date && <p className="text-spice text-xs mt-1">{errors.date}</p>}
            </div>
            <div>
              <label className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                <Clock className="w-3.5 h-3.5" /> Time
              </label>
              <input name="time" type="time" value={form.time} onChange={handleChange} className={inputClass} />
              {errors.time && <p className="text-spice text-xs mt-1">{errors.time}</p>}
            </div>
            <div>
              <label className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                <Users className="w-3.5 h-3.5" /> Guests
              </label>
              <select name="guests" value={form.guests} onChange={handleChange} className={inputClass}>
                <option value="">Select</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, "10+"].map((n) => (
                  <option key={n} value={String(n)}>{n} {typeof n === "number" && n === 1 ? "Guest" : "Guests"}</option>
                ))}
              </select>
              {errors.guests && <p className="text-spice text-xs mt-1">{errors.guests}</p>}
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Special Requests (Optional)</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Any special requests..." rows={3} className={inputClass} />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-leaf-light text-primary-foreground py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <Send className="w-4 h-4" />
            Confirm Booking via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
