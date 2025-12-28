import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
               {/* Photographer portrait placeholder */}
              <img 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop" 
                alt="Portrait of Hemant Ojha"
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-background border border-border flex items-center justify-center hidden md:flex">
              <span className="font-serif italic text-2xl">Est. 2018</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-serif">Behind the camera.</h1>
            
            <div className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
              <p>
                My name is Hemant Ojha, and I see the world in monochrome. I believe that removing color reveals the soul of a subject, stripping away distractions to focus on texture, emotion, and light.
              </p>
              <p>
                Based in New York City, I specialize in editorial portraiture and architectural photography. My work has been featured in leading design publications and exhibited in galleries across Europe and North America.
              </p>
              <p>
                When I'm not shooting, I'm likely exploring brutalist architecture or developing film in my darkroom. I strive for minimalism in all things—my work, my home, and my lifestyle.
              </p>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-border">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Exhibitions</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>2023 - Shadows & Light, NYC</li>
                  <li>2022 - Mono Collective, Berlin</li>
                  <li>2021 - Form Follows, London</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Publications</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Vogue Italia</li>
                  <li>Kinfolk Magazine</li>
                  <li>Cereal</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
