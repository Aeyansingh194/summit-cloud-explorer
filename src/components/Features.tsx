import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Snowflake, Wind, Mountain } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Battle-Tested Durability',
    description: 'Engineered to withstand extreme conditions. Every stitch, every seam, designed for the harshest environments on Earth.',
  },
  {
    icon: Snowflake,
    title: 'Arctic Insulation',
    description: 'Revolutionary thermal technology maintains core temperature at -40°C while remaining breathable and lightweight.',
  },
  {
    icon: Wind,
    title: 'Storm Shield Tech',
    description: 'Proprietary waterproof membrane blocks wind up to 100mph while allowing moisture vapor to escape.',
  },
  {
    icon: Mountain,
    title: 'Alpine Precision Fit',
    description: 'Articulated patterns engineered for full range of motion. Move freely, climb confidently.',
  },
];

export const Features = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Engineered for the
            <br />
            <span className="text-gradient">Impossible</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Every piece of gear represents decades of alpine expertise and relentless innovation
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500">
                  <feature.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 w-14 h-14 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rotate-45" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
