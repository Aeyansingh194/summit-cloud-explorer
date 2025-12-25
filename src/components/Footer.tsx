import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Youtube, Twitter, Mail } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'Jackets', href: '/shop?category=jackets' },
    { name: 'Pants', href: '/shop?category=pants' },
    { name: 'Footwear', href: '/shop?category=footwear' },
    { name: 'Accessories', href: '/shop?category=accessories' },
    { name: 'Equipment', href: '/shop?category=equipment' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Care Instructions', href: '/care' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export const Footer = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [hoveredText, setHoveredText] = useState(false);

  return (
    <footer ref={containerRef} className="relative pt-32 pb-12 overflow-hidden bg-card">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted via-card to-card" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative">
        {/* Large Text CTA */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="/shop"
            className="group block"
            onMouseEnter={() => setHoveredText(true)}
            onMouseLeave={() => setHoveredText(false)}
          >
            <div className="relative overflow-hidden">
              {/* Main Text with SVG Stroke Animation */}
              <svg
                className="w-full h-auto"
                viewBox="0 0 1200 200"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="50%" stopColor="hsl(var(--secondary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                  <mask id="textMask">
                    <text
                      x="50%"
                      y="50%"
                      dominantBaseline="middle"
                      textAnchor="middle"
                      className="font-display text-[180px] font-light fill-white"
                    >
                      EXPLORE
                    </text>
                  </mask>
                </defs>
                
                {/* Stroke Text */}
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="font-display text-[180px] font-light"
                  fill="none"
                  stroke="url(#textGradient)"
                  strokeWidth={hoveredText ? "2" : "1"}
                  style={{
                    transition: 'stroke-width 0.5s ease',
                  }}
                >
                  EXPLORE
                </text>

                {/* Fill on Hover */}
                <motion.rect
                  x="0"
                  y="0"
                  width="1200"
                  height="200"
                  fill="url(#textGradient)"
                  mask="url(#textMask)"
                  initial={{ x: -1200 }}
                  animate={{ x: hoveredText ? 0 : -1200 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                />
              </svg>

              {/* Arrow */}
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2"
                animate={{ x: hoveredText ? 0 : -20, opacity: hoveredText ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="w-16 h-16 text-primary" />
              </motion.div>
            </div>
          </Link>
        </motion.div>

        {/* Footer Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-light tracking-[0.15em] text-foreground">
                <span className="text-gradient">S</span>UMMIT
              </span>
            </Link>
            <p className="font-body text-muted-foreground max-w-sm mb-6">
              Expedition-grade gear engineered for those who dare to venture where others cannot.
            </p>
            
            {/* Newsletter */}
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 pl-12 pr-4 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 font-body text-sm"
                />
              </div>
              <button className="h-12 px-6 rounded-full bg-foreground text-background font-body text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* Shop Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-medium text-foreground mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-display text-lg font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h4 className="font-display text-lg font-medium text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="font-body text-xs text-muted-foreground">
            © 2024 Summit. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};