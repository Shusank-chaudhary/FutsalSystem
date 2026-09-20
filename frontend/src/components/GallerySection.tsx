import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/images/futsal-hero.jpg", alt: "Futsal court aerial view" },
  { src: "/images/futsal-action.jpg", alt: "Players in action" },
  { src: "/images/futsal-facility.jpg", alt: "Facility amenities" },
  { src: "/images/futsal-hero.jpg", alt: "Night game under lights" },
  { src: "/images/futsal-action.jpg", alt: "Competitive match" },
  { src: "/images/futsal-facility.jpg", alt: "Rest area" },
];

const GallerySection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.2em] uppercase mb-2">
            Our Arena
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Photo <span className="text-gradient">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="cursor-pointer overflow-hidden rounded-lg group"
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              >
                <X size={32} />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selected}
                alt="Gallery preview"
                className="max-w-full max-h-[80vh] rounded-lg shadow-card object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
