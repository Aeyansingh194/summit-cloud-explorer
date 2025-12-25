import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const Terms = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-light text-foreground mb-8">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-body text-muted-foreground mb-8">
                Last updated: January 2024
              </p>

              <div className="space-y-8 font-body text-muted-foreground">
                <section>
                  <h2 className="font-display text-2xl font-medium text-foreground mb-4">Agreement to Terms</h2>
                  <p>By accessing and using the Summit website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access the service.</p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-medium text-foreground mb-4">Products and Pricing</h2>
                  <p>All prices are displayed in USD unless otherwise noted. We reserve the right to modify prices at any time. Product descriptions and images are for illustrative purposes and may vary slightly from actual products.</p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-medium text-foreground mb-4">Orders and Payments</h2>
                  <p>By placing an order, you warrant that all information provided is accurate and that you are authorized to use the payment method. We reserve the right to refuse or cancel any order for any reason.</p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-medium text-foreground mb-4">Intellectual Property</h2>
                  <p>All content on this website, including text, graphics, logos, and images, is the property of Summit and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our written consent.</p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-medium text-foreground mb-4">Limitation of Liability</h2>
                  <p>Summit shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or services. Our total liability shall not exceed the amount paid for the product in question.</p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-medium text-foreground mb-4">Contact</h2>
                  <p>For questions about these Terms of Service, please contact us at legal@summit.com.</p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;