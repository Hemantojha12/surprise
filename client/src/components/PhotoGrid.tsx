import { motion } from "framer-motion";
import { useState } from "react";

// Mock data for the portfolio
const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    title: "Ethereal Portrait",
    category: "Portrait"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=1000&auto=format&fit=crop",
    title: "Urban Silence",
    category: "Street"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1000&auto=format&fit=crop",
    title: "Monochrome Study",
    category: "Studio"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    title: "Analog Texture",
    category: "Film"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1552168324-d612d77725e3?q=80&w=1000&auto=format&fit=crop",
    title: "Shadow Play",
    category: "Architecture"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1542038784456-1ea0e93ca64b?q=80&w=1000&auto=format&fit=crop",
    title: "Raw Emotion",
    category: "Editorial"
  }
];

export function PhotoGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative aspect-[3/4] group cursor-pointer overflow-hidden bg-gray-100"
          onMouseEnter={() => setHoveredId(photo.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          {/* Descriptive comment for Unsplash images */}
          {/* photo placeholder based on category */}
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale hover:grayscale-0"
          />
          
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center text-white p-4">
              <h3 className="text-2xl font-serif italic mb-1">{photo.title}</h3>
              <p className="text-xs uppercase tracking-widest opacity-80">{photo.category}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
