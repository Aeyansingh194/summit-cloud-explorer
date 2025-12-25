import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const Privacy = () => {
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
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="font-body text-muted-foreground mb-8">
                Last updated: January 2024
              </p>

              <div className="space-y-8 font-body text-muted-foreground">
                <section>
                  <h2 className="font-display text-2xl font-medium text-foreground mb-4">Information We Collect</h2>
                  <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, postal address, phone number, and payment information.</p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-medium text-foreground mb-4">How We Use Your Information</h2>
                  <p>We use the information we collect to process transactions, send order updates, respond to your requests, and improve our services. We may also use your information to send promotional communications if you've opted in.</p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-medium text-foreground mb-4">Information Sharing</h2>
                  <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website and conducting our business, as long as they agree to keep this information confidential.</p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-medium text-foreground mb-4">Data Security</h2>
                  <p>We implement a variety of security measures to maintain the safety of your personal information. All transactions are processed through a secure payment gateway and we do not store credit card details on our servers.</p>
                </section>

                <section>
                  <h2 className="font-display text-2xl font-medium text-foreground mb-4">Contact Us</h2>
                  <p>If you have any questions about this Privacy Policy, please contact us at privacy@summit.com.</p>
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

export default Privacy;