import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const packages = [
  {
    name: "Essential",
    price: "Rs 30000",
    description: "Perfect for personal portraits and social media presence.",
    features: [
      "1.5 Hour Session",
      "10 High-Res Edited Photos",
      "Digital Delivery",
      "Single Location",
      "Personal License"
    ]
  },
  {
    name: "Professional",
    price: "Rs50000",
    description: "Ideal for editorial work, small brands, and professionals.",
    features: [
      "3 Hour Session",
      "25 High-Res Edited Photos",
      "Digital & Print-Ready Files",
      "Two Locations",
      "Commercial License",
      "Priority Turnaround"
    ],
    popular: true
  },
  {
    name: "Masterpiece",
    price: "Rs95000",
    description: "Comprehensive package for large projects and complete collections.",
    features: [
      "Full Day Session (8 Hours)",
      "All Edited Photos (Min. 75)",
      "Premium Photo Book",
      "Unlimited Locations",
      "Full Commercial Rights",
      "Behind-the-Scenes Video"
    ]
  }
];

export default function Packages() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Packages.</h1>
            <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              Transparent pricing for timeless monochrome photography. Choose a tier that fits your vision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col p-8 border ${
                  pkg.popular ? "border-black bg-white shadow-lg z-10" : "border-border bg-card"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 text-[10px] uppercase tracking-[0.2em] font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-serif mb-4">{pkg.price}</div>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <ul className="flex-grow space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-light">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/book">
                  <Button 
                    className={`w-full rounded-none py-6 h-auto text-xs uppercase tracking-widest transition-all ${
                      pkg.popular ? "bg-black text-white hover:bg-gray-800" : "bg-transparent border border-black text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    Select {pkg.name}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
