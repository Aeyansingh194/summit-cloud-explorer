import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const BuyNowButton = () => {
  return (
    <Link to="/shop">
      <motion.button
        className="group relative px-10 py-4 rounded-full bg-foreground text-background font-body font-semibold text-sm uppercase tracking-[0.2em] overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 -translate-x-full"
            animate={{
              translateX: ['100%', '-100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 1,
            }}
          >
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-primary/40 to-transparent skew-x-12" />
          </motion.div>
        </div>

        {/* Button Content */}
        <span className="relative flex items-center gap-3">
          <span>Explore Collection</span>
          <motion.span
            className="inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
        </span>
      </motion.button>
    </Link>
  );
};
