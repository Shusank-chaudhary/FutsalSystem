import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/futsal-hero.jpg')" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      {/* Gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm md:text-base tracking-[0.3em] text-primary mb-4 uppercase"
        >
          Nepal's Premier Futsal Destination
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Play. Compete.
          <br />
          <span className="text-gradient">Dominate.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-body text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Experience world-class futsal on our premium artificial turf. Book your slot now and own the pitch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md font-heading text-lg font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            Book Now
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-4 rounded-md font-heading text-lg font-semibold border border-border text-foreground hover:bg-secondary transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 text-muted-foreground"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
