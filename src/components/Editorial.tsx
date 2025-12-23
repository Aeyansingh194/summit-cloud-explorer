import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import editorial1 from '@/assets/editorial-1.jpg';
import editorial2 from '@/assets/editorial-2.jpg';

export const Editorial = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-6 relative">
        {/* First Editorial Block */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
              style={{ y: y1 }}
            >
              <img
                src={editorial1}
                alt="Mountain expedition"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </motion.div>
            
            {/* Floating Stats Card */}
            <motion.div
              className="absolute -bottom-8 -right-8 p-6 glass-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <span className="font-display text-4xl font-light text-primary">-40°C</span>
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Tested Temperature
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-6 block">
              The Journey
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Where Others See
              <br />
              <span className="italic">Limits</span>, We See
              <br />
              <span className="text-gradient">Possibility</span>
            </h2>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Every expedition begins with a single step into the unknown. Our gear is forged in the crucible of the world's most demanding peaks, tested by athletes who refuse to accept anything less than excellence.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-wide text-foreground hover:text-primary transition-colors duration-300 group"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Second Editorial Block - Reversed */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="lg:order-2 relative"
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              style={{ y: y2 }}
            >
              <img
                src={editorial2}
                alt="Premium gear detail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-background/40 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-secondary mb-6 block">
              Craftsmanship
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6 leading-tight">
              Precision in Every
              <br />
              <span className="text-gradient-ember">Detail</span>
            </h2>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Each piece of equipment is the result of obsessive attention to detail. From reinforced seams to custom-developed fabrics, we engineer solutions that perform when it matters most.
            </p>
            <div className="flex gap-8">
              <div>
                <span className="font-display text-3xl font-light text-foreground">847</span>
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Test Hours
                </p>
              </div>
              <div>
                <span className="font-display text-3xl font-light text-foreground">12</span>
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Patents
                </p>
              </div>
              <div>
                <span className="font-display text-3xl font-light text-foreground">99%</span>
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Satisfaction
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
