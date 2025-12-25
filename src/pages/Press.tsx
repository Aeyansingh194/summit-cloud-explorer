import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

import heroImage from '@/assets/hero-mountain.jpg';

const pressReleases = [
  { date: 'Jan 15, 2024', title: 'Summit Launches Revolutionary Arctic Shell Pro' },
  { date: 'Dec 8, 2023', title: 'Summit Partners with National Parks Foundation' },
  { date: 'Nov 22, 2023', title: 'Summit Achieves B Corp Certification' },
  { date: 'Oct 5, 2023', title: 'Summit Opens New Flagship Store in Boulder' },
];

const Press = () => {
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
              Press & <span className="text-gradient">Media</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
              Resources for journalists and media professionals
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Press Kit */}
            <motion.div
              className="p-8 rounded-xl bg-card border border-border"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-display text-2xl font-medium text-foreground mb-6">Press Kit</h3>
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <img src={heroImage} alt="Summit brand" className="w-full h-full object-cover" />
              </div>
              <p className="font-body text-muted-foreground mb-6">
                Download our press kit containing high-resolution logos, brand guidelines, product images, and company information.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-body text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                <Download className="w-4 h-4" />
                Download Press Kit
              </button>
            </motion.div>

            {/* Press Contact */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-8 rounded-xl bg-card border border-border">
                <h3 className="font-display text-2xl font-medium text-foreground mb-4">Press Contact</h3>
                <p className="font-body text-muted-foreground mb-4">
                  For press inquiries, interviews, or additional materials, please contact our communications team.
                </p>
                <a
                  href="mailto:press@summit.com"
                  className="inline-flex items-center gap-2 font-body text-primary hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  press@summit.com
                </a>
              </div>

              <div className="p-8 rounded-xl bg-card border border-border">
                <h3 className="font-display text-2xl font-medium text-foreground mb-6">Recent Press Releases</h3>
                <div className="space-y-4">
                  {pressReleases.map((release) => (
                    <div key={release.title} className="pb-4 border-b border-border/50 last:border-0 last:pb-0">
                      <p className="font-body text-xs text-muted-foreground mb-1">{release.date}</p>
                      <p className="font-body text-foreground hover:text-primary transition-colors cursor-pointer">
                        {release.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Press;