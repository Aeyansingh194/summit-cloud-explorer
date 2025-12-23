import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export const AddToCartButton = ({ onAdd }: { onAdd?: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isHovered) {
      // Generate particles around the button
      const newParticles: Particle[] = [];
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const distance = 80 + Math.random() * 40;
        newParticles.push({
          id: i,
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        });
      }
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.1;
    const deltaY = (e.clientY - centerY) * 0.1;
    
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsAdded(true);
    onAdd?.();
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="relative inline-block">
      {/* Floating Particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full bg-primary/60"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: -4,
              marginTop: -4,
              boxShadow: '0 0 10px hsl(var(--primary))',
            }}
            initial={{ x: particle.x, y: particle.y, opacity: 0.8, scale: 1 }}
            animate={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        ref={buttonRef}
        className="relative px-8 py-3 rounded-full bg-muted text-foreground font-body font-medium text-sm overflow-hidden magnetic-glow"
        style={{ x, y }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Button Content */}
        <span className="relative flex items-center gap-2">
          <AnimatePresence mode="wait">
            {isAdded ? (
              <motion.span
                key="added"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex items-center gap-2"
              >
                <Check className="w-4 h-4 text-primary" />
                Added
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </motion.button>
    </div>
  );
};
