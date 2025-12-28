import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: InsertInquiry) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Get in touch.</h1>
            <p className="text-lg text-muted-foreground font-light">
              For bookings, collaborations, or just to say hello.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border/50 p-8 md:p-12 shadow-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your full name" 
                            className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-black bg-transparent transition-colors h-12" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your@email.com" 
                            className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-black bg-transparent transition-colors h-12" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-black bg-transparent transition-colors min-h-[150px] resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end pt-4">
                  <Button 
                    type="submit" 
                    disabled={isPending}
                    className="bg-black text-white hover:bg-gray-800 rounded-none px-8 py-6 h-auto text-sm uppercase tracking-widest transition-all"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border-t border-border pt-12">
            <div>
              <h3 className="font-serif italic text-xl mb-2">Location</h3>
              <p className="text-muted-foreground font-light text-sm">
                123 Studio Loft<br/>
                Brooklyn, NY 11211
              </p>
            </div>
            <div>
              <h3 className="font-serif italic text-xl mb-2">Contact</h3>
              <p className="text-muted-foreground font-light text-sm">
                hello@shuttersurprise.com<br/>
                +1 (555) 123-4567
              </p>
            </div>
            <div>
              <h3 className="font-serif italic text-xl mb-2">Social</h3>
              <p className="text-muted-foreground font-light text-sm">
                @shuttersurprise<br/>
                behance.net/shuttersurprise
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
