import { Navigation } from "@/components/Navigation";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6 pt-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.9] mb-6">
            Capturing the<br/>
            <span className="italic">Unseen</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
            Minimalist photography exploring the space between light and shadow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-foreground/50 animate-bounce" />
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section className="px-1 md:px-0">
        <PhotoGrid />
      </section>

      {/* Quote Section */}
      <section className="py-24 md:py-32 px-6 flex justify-center">
        <div className="max-w-2xl text-center">
          <p className="text-2xl md:text-4xl font-serif italic leading-relaxed text-gray-800">
            "Photography is the story I fail to put into words."
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">Destin Sparks</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
