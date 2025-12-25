import { motion } from 'framer-motion';
import { Truck, Clock, Globe, Package } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const shippingOptions = [
  {
    icon: Truck,
    title: 'Standard Shipping',
    time: '5-7 business days',
    price: 'Free on orders over $150',
  },
  {
    icon: Clock,
    title: 'Express Shipping',
    time: '2-3 business days',
    price: '$15',
  },
  {
    icon: Package,
    title: 'Overnight Shipping',
    time: 'Next business day',
    price: '$35',
  },
  {
    icon: Globe,
    title: 'International Shipping',
    time: '7-14 business days',
    price: 'Calculated at checkout',
  },
];

const Shipping = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-light text-foreground mb-4">
              Shipping <span className="text-gradient">Information</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              We deliver expedition-grade gear to adventurers worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {shippingOptions.map((option, index) => (
              <motion.div
                key={option.title}
                className="p-8 rounded-xl bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <option.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="font-body text-muted-foreground mb-1">{option.time}</p>
                <p className="font-body text-foreground font-medium">{option.price}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="max-w-3xl mx-auto prose prose-neutral"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-display text-2xl font-medium text-foreground mb-4">Shipping Policy</h3>
              <div className="space-y-4 font-body text-muted-foreground">
                <p>
                  All orders are processed within 1-2 business days. Orders placed after 2 PM EST will be processed the following business day.
                </p>
                <p>
                  Free standard shipping is available for orders over $150 within the continental United States. Alaska, Hawaii, and international orders may have additional shipping charges.
                </p>
                <p>
                  During peak seasons and promotional periods, processing times may be slightly longer. You will receive tracking information via email once your order ships.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Shipping;