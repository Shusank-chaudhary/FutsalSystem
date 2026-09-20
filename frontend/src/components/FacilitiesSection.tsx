import { motion } from "framer-motion";
import { Zap, Shield, Wifi, Car, ShowerHead, Coffee } from "lucide-react";

const facilities = [
  {
    icon: Zap,
    title: "LED Floodlights",
    desc: "Professional-grade lighting for day and night play.",
  },
  {
    icon: Shield,
    title: "Premium Turf",
    desc: "FIFA-quality artificial grass for optimal ball control.",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    desc: "Stay connected while you wait for your game.",
  },
  {
    icon: Car,
    title: "Parking Space",
    desc: "Ample parking for bikes and cars on-site.",
  },
  {
    icon: ShowerHead,
    title: "Changing Rooms",
    desc: "Clean showers and lockers for your convenience.",
  },
  {
    icon: Coffee,
    title: "Canteen",
    desc: "Refreshments and snacks to fuel your game.",
  },
];

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            World-Class <span className="text-gradient">Facilities</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-card hover:shadow-glow"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Facility image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <img
            src="/images/futsal-facility.jpg"
            alt="Premium futsal facility amenities"
            className="w-full rounded-lg shadow-card object-cover max-h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
