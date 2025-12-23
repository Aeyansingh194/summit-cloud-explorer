import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Mountain, Compass, Package, Users } from 'lucide-react';

const menuItems = [
  { name: 'Shop', href: '/shop', icon: Package },
  { name: 'Collections', href: '/collections', icon: Compass },
  { name: 'Expedition', href: '/expedition', icon: Mountain },
  { name: 'About', href: '/about', icon: Users },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.nav
            className="absolute inset-x-0 top-20 bottom-0 flex flex-col p-6 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-muted transition-colors duration-300 group"
                    onClick={onClose}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                        <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <span className="font-display text-2xl font-light text-foreground">
                        {item.name}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <motion.div
              className="mt-auto pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm text-muted-foreground mb-4">
                Gear for the relentless explorer
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  YouTube
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
