import { motion } from 'framer-motion';
import { Leaf, Recycle, Mountain, Heart } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const initiatives = [
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    description: 'We use recycled and responsibly sourced materials in 80% of our products, reducing our environmental footprint while maintaining peak performance.',
  },
  {
    icon: Recycle,
    title: 'Circular Economy',
    description: 'Our repair program extends product life, and our recycling initiative ensures old gear gets a second chance through proper recycling or upcycling.',
  },
  {
    icon: Mountain,
    title: 'Conservation Partnerships',
    description: 'We donate 1% of revenue to wilderness preservation organizations working to protect the wild places we love to explore.',
  },
  {
    icon: Heart,
    title: 'Ethical Manufacturing',
    description: 'All our products are made in factories that meet strict labor and environmental standards, ensuring fair treatment of workers.',
  },
];

const Sustainability = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-4">
              Our <span className="text-gradient">Commitment</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
              We believe the gear that takes you to the world's wildest places should protect those places for future generations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                className="p-8 rounded-xl bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <initiative.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-medium text-foreground mb-3">
                  {initiative.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {initiative.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="font-display text-2xl font-medium text-foreground mb-4">Our 2030 Goals</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="font-display text-4xl text-primary mb-2">100%</p>
                  <p className="font-body text-sm text-muted-foreground">Sustainable Materials</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-primary mb-2">50%</p>
                  <p className="font-body text-sm text-muted-foreground">Carbon Reduction</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-primary mb-2">Zero</p>
                  <p className="font-body text-sm text-muted-foreground">Waste to Landfill</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Sustainability;