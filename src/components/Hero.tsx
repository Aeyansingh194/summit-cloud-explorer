import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { BuyNowButton } from './BuyNowButton';
import heroImage from '@/assets/hero-mountain.jpg';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();
  
  // Smooth spring physics for scroll
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  
  // Image expansion based on scroll (from 60% to 100%)
  const imageScale = useTransform(smoothScrollY, [0, windowHeight * 0.8], [0.6, 1]);
  const imageRoundness = useTransform(smoothScrollY, [0, windowHeight * 0.8], [40, 0]);
  
  // Parallax effect for background
  const bgY = useTransform(smoothScrollY, [0, windowHeight], [0, windowHeight * 0.3]);
  
  // Text animations
  const textOpacity = useTransform(smoothScrollY, [0, windowHeight * 0.5], [1, 0]);
  const textY = useTransform(smoothScrollY, [0, windowHeight * 0.5], [0, -100]);
  const text1X = useTransform(smoothScrollY, [0, windowHeight * 0.5], [0, -50]);
  const text2X = useTransform(smoothScrollY, [0, windowHeight * 0.5], [0, 50]);

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Layer */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-alpine-900 via-alpine-950 to-background"
          style={{ y: bgY }}
        />

        {/* Animated Hero Image */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            scale: imageScale,
          }}
        >
          <motion.div
            className="relative w-full h-full overflow-hidden"
            style={{
              borderRadius: imageRoundness,
            }}
          >
            <img
              src={heroImage}
              alt="Mountain expedition"
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
          </motion.div>
        </motion.div>

        {/* Hero Text Content */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6"
          style={{ opacity: textOpacity, y: textY }}
        >
          {/* Main Headline */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight text-foreground"
              style={{ x: text1X }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              BEYOND THE
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight"
              style={{ x: text2X }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="text-gradient">SUMMIT</span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Expedition-grade gear engineered for those who dare to venture where others cannot
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <BuyNowButton />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          style={{ opacity: textOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-px h-24 bg-gradient-to-b from-transparent via-secondary/50 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        />
      </div>
    </section>
  );
};
