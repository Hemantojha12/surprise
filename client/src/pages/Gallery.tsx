import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const images = [
  {
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    title: "Portrait Study",
    category: "Editorial"
  },
  {
    url: "https://images.unsplash.com/photo-1449156001931-8283327c5914?q=80&w=1000&auto=format&fit=crop",
    title: "Brutalist Forms",
    category: "Architecture"
  },
  {
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000&auto=format&fit=crop",
    title: "Minimal Horizon",
    category: "Landscape"
  },
  {
    url: "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=1000&auto=format&fit=crop",
    title: "City Lines",
    category: "Architecture"
  },
  {
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    title: "Shadow Play",
    category: "Editorial"
  },
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    title: "Peak Contrast",
    category: "Landscape"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Gallery.</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl">
              A curated selection of monochrome captures across editorial, architecture, and landscapes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-[4/5] bg-gray-100 overflow-hidden"
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-white text-xs uppercase tracking-widest mb-2">{img.category}</span>
                  <h3 className="text-white font-serif text-2xl">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
