import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = ['ASCEND', 'EXPLORE', 'CONQUER', 'DISCOVER'];

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= words.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800);
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* SVG Filter for Gooey Effect */}
          <svg className="absolute w-0 h-0">
            <defs>
              <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"
                  result="gooey"
                />
              </filter>
            </defs>
          </svg>

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-frost-900/20 via-transparent to-transparent" />

          {/* Morphing Text */}
          <div className="relative" style={{ filter: 'url(#gooey)' }}>
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.2em] text-foreground"
                initial={{ opacity: 0, filter: 'blur(20px)', y: 40 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{ opacity: 0, filter: 'blur(20px)', y: -40 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                {words[currentIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3">
            {words.map((_, index) => (
              <motion.div
                key={index}
                className="h-0.5 rounded-full bg-muted"
                initial={{ width: 20 }}
                animate={{
                  width: index === currentIndex ? 40 : 20,
                  backgroundColor: index <= currentIndex ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
                }}
                transition={{ duration: 0.4 }}
              />
            ))}
          </div>

          {/* Subtle floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/30"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 20,
              }}
              animate={{
                y: -20,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
