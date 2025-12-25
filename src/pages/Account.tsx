import { motion } from 'framer-motion';
import { User, Package, Heart, MapPin, CreditCard, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const accountLinks = [
  { name: 'Orders', href: '/orders', icon: Package, description: 'View your order history' },
  { name: 'Wishlist', href: '/wishlist', icon: Heart, description: 'Your saved items' },
  { name: 'Addresses', href: '/addresses', icon: MapPin, description: 'Manage shipping addresses' },
  { name: 'Payment Methods', href: '/payment', icon: CreditCard, description: 'Your saved cards' },
];

const Account = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="text-center mb-16">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-muted-foreground" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-light text-foreground mb-2">
                My Account
              </h1>
              <p className="font-body text-muted-foreground">
                Manage your account settings and preferences
              </p>
            </div>

            {/* Account Links */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {accountLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Sign Out */}
            <div className="text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-muted-foreground hover:text-destructive hover:border-destructive transition-colors duration-300 font-body text-sm">
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Account;