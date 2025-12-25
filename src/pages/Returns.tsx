import { motion } from 'framer-motion';
import { RefreshCw, Package, CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const Returns = () => {
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
              Returns & <span className="text-gradient">Exchanges</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              We stand behind our products. If you're not satisfied, we'll make it right.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Return Steps */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Package, step: '01', title: 'Start Return', desc: 'Initiate your return within 60 days' },
                { icon: RefreshCw, step: '02', title: 'Ship Item', desc: 'Use our prepaid shipping label' },
                { icon: CheckCircle, step: '03', title: 'Get Refund', desc: 'Refund processed within 5-7 days' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="text-center p-8 rounded-xl bg-card border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-body text-xs text-primary tracking-wider">{item.step}</span>
                  <h3 className="font-display text-xl font-medium text-foreground mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Policy Details */}
            <motion.div
              className="p-8 rounded-xl bg-card border border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-display text-2xl font-medium text-foreground mb-6">Return Policy</h3>
              <div className="space-y-6 font-body text-muted-foreground">
                <div>
                  <h4 className="text-foreground font-medium mb-2">60-Day Return Window</h4>
                  <p>Return any unworn, unwashed item within 60 days of purchase for a full refund. Items must be in original condition with all tags attached.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-2">Free Returns</h4>
                  <p>We provide free return shipping within the continental United States. International returns may incur shipping charges.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-2">Exchanges</h4>
                  <p>Need a different size or color? We're happy to exchange your item. Simply select the exchange option when initiating your return.</p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-2">Warranty Claims</h4>
                  <p>All products come with a lifetime warranty against manufacturing defects. Contact us for warranty claims on damaged gear.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Returns;