import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const Contact = () => {
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
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              We're here to help with any questions about our gear or your adventures
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full h-12 px-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-foreground mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full h-12 px-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full h-12 px-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full h-12 px-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full p-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body resize-none"
                    placeholder="Tell us more..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-foreground text-background font-body text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="p-8 rounded-xl bg-card border border-border">
                <h3 className="font-display text-2xl font-medium text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">Email</p>
                      <p className="font-body text-foreground">hello@summit.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">Phone</p>
                      <p className="font-body text-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">Address</p>
                      <p className="font-body text-foreground">
                        1234 Mountain View Drive<br />
                        Boulder, CO 80301
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">Hours</p>
                      <p className="font-body text-foreground">
                        Mon - Fri: 9am - 6pm<br />
                        Sat - Sun: 10am - 4pm
                      </p>
                    </div>
                  </div>
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

export default Contact;