import { motion } from 'framer-motion';
import { Sparkles, Droplets, Wind, AlertTriangle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const careInstructions = [
  {
    icon: Droplets,
    title: 'Washing',
    tips: [
      'Machine wash cold with like colors',
      'Use a gentle, non-detergent soap',
      'Avoid fabric softeners on technical fabrics',
      'Close all zippers before washing',
    ],
  },
  {
    icon: Wind,
    title: 'Drying',
    tips: [
      'Tumble dry on low heat or hang dry',
      'Remove promptly to prevent wrinkles',
      'Restore DWR coating with low heat tumble',
      'Avoid direct sunlight for extended periods',
    ],
  },
  {
    icon: Sparkles,
    title: 'Maintenance',
    tips: [
      'Reapply DWR treatment after heavy use',
      'Store in a cool, dry place',
      'Hang garments to maintain shape',
      'Repair small tears promptly to prevent spreading',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Avoid',
    tips: [
      'Do not use bleach or harsh chemicals',
      'Do not iron waterproof membranes',
      'Do not dry clean unless specified',
      'Do not store when wet or damp',
    ],
  },
];

const Care = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-light text-foreground mb-4">
              Care <span className="text-gradient">Instructions</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Proper care extends the life of your gear and maintains peak performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {careInstructions.map((section, index) => (
              <motion.div
                key={section.title}
                className="p-8 rounded-xl bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Care;