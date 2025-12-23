import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { name: 'Shop', href: '/shop', hasMegaMenu: true },
  { name: 'Collections', href: '/collections', hasMegaMenu: true },
  { name: 'Expedition', href: '/expedition', hasMegaMenu: false },
  { name: 'About', href: '/about', hasMegaMenu: false },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass py-3' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <motion.div
                className="font-display text-2xl md:text-3xl font-light tracking-[0.15em] text-foreground"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-gradient">S</span>UMMIT
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasMegaMenu && setActiveMenu(link.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    to={link.href}
                    className={`nav-link-underline font-body text-sm tracking-wide uppercase transition-colors duration-300 ${
                      location.pathname === link.href
                        ? 'text-primary'
                        : 'text-foreground/80 hover:text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors duration-300">
                <Search className="w-5 h-5 text-foreground/80" />
              </button>
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors duration-300">
                <User className="w-5 h-5 text-foreground/80" />
              </button>
              <Link 
                to="/cart"
                className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors duration-300"
              >
                <ShoppingBag className="w-5 h-5 text-foreground/80" />
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                  2
                </span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-muted transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-foreground" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {activeMenu && (
            <MegaMenu
              activeMenu={activeMenu}
              onMouseEnter={() => {}}
              onMouseLeave={() => setActiveMenu(null)}
            />
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
