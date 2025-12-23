import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Globe, Leaf } from 'lucide-react';

const trustItems = [
  {
    icon: Award,
    value: '15+',
    label: 'Years of Excellence',
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Explorers Equipped',
  },
  {
    icon: Globe,
    value: '140',
    label: 'Countries Reached',
  },
  {
    icon: Leaf,
    value: '100%',
    label: 'Sustainable Materials',
  },
];

const logos = [
  'National Geographic',
  'REI Co-op',
  'Patagonia',
  'Outside Magazine',
  'Adventure Journal',
];

export const Trust = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />

      <div className="container mx-auto px-6 relative">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-light text-foreground mb-2">
                {item.value}
              </div>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Trusted By */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {logos.map((logo, index) => (
              <motion.span
                key={logo}
                className="font-display text-lg md:text-xl text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                {logo}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
