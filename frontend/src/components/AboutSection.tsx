import { motion } from "framer-motion";
import { Trophy, Users, Clock, Star } from "lucide-react";

const stats = [
  { icon: Trophy, value: "5+", label: "Years of Excellence" },
  { icon: Users, value: "10K+", label: "Happy Players" },
  { icon: Clock, value: "16hrs", label: "Daily Open Hours" },
  { icon: Star, value: "4.9", label: "Average Rating" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-hero-gradient">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/images/futsal-action.jpg"
              alt="Futsal players in action on the court"
              className="rounded-lg shadow-card w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-lg" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">About Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              The Home of <span className="text-gradient">Futsal</span> in Nepal
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Located in the heart of Kathmandu, Futsal Arena offers a premium playing experience 
              with international-standard artificial turf, professional lighting, and top-notch 
              facilities. Whether you're a casual player or a competitive team, our arena is built 
              for everyone who loves the beautiful game.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              We host regular tournaments, coaching sessions, and corporate events. 
              Join our community and take your game to the next level.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 rounded-lg bg-secondary/50"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="font-heading text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="font-body text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
