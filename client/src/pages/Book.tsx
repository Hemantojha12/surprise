import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  date: z.string().min(1, "Date is required"),
  sessionType: z.string().min(1, "Session type is required"),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function Book() {
  const { toast } = useToast();
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      date: "",
      sessionType: "",
      message: "",
    },
  });

  function onSubmit(data: BookingFormValues) {
    console.log("Booking submitted:", data);
    toast({
      title: "Booking Request Sent",
      description: "We'll get back to you shortly to confirm your session.",
    });
    form.reset();
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
            className="mb-12 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">Book a Session.</h1>
            <p className="text-lg text-muted-foreground font-light">
              Secure your date for an exclusive monochrome photography session.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border/50 p-8 md:p-12"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Hemant Ojha" 
                            className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-black bg-transparent h-12" 
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
                        <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="you@example.com" 
                            className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-black bg-transparent h-12" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Preferred Date</FormLabel>
                        <FormControl>
                          <Input 
                            type="date"
                            className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-black bg-transparent h-12" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="sessionType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase text-xs tracking-widest text-muted-foreground">Session Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-0 border-b border-border rounded-none px-0 focus:ring-0 focus:border-black bg-transparent h-12">
                              <SelectValue placeholder="Select a session" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="editorial">Editorial Portrait</SelectItem>
                            <SelectItem value="architecture">Architecture Shoot</SelectItem>
                            <SelectItem value="commercial">Commercial/Brand</SelectItem>
                            <SelectItem value="private">Private Collection</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-center pt-8">
                  <Button 
                    type="submit" 
                    className="bg-black text-white hover:bg-gray-800 rounded-none px-12 py-6 h-auto text-sm uppercase tracking-widest transition-all"
                  >
                    Request Appointment
                  </Button>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
