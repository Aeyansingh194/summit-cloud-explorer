import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const openPositions = [
  { title: 'Senior Product Designer', location: 'Boulder, CO', type: 'Full-time', department: 'Design' },
  { title: 'Outdoor Gear Specialist', location: 'Remote', type: 'Full-time', department: 'Product' },
  { title: 'E-commerce Manager', location: 'Boulder, CO', type: 'Full-time', department: 'Marketing' },
  { title: 'Materials Engineer', location: 'Boulder, CO', type: 'Full-time', department: 'R&D' },
  { title: 'Customer Experience Lead', location: 'Remote', type: 'Full-time', department: 'Support' },
];

const Careers = () => {
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
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
              Help us build gear that empowers explorers to push boundaries and discover the extraordinary.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="font-display text-2xl font-medium text-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Open Positions
            </motion.h2>

            <div className="space-y-4">
              {openPositions.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to="/contact"
                    className="block p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <span className="font-body text-xs uppercase tracking-wider text-primary mb-1 block">
                          {job.department}
                        </span>
                        <h3 className="font-display text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 font-body text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-16 p-8 rounded-xl bg-card border border-border text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Briefcase className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-medium text-foreground mb-2">
                Don't see the right role?
              </h3>
              <p className="font-body text-muted-foreground mb-4">
                We're always looking for talented people. Send us your resume and we'll keep you in mind.
              </p>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 rounded-full bg-foreground text-background font-body text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Careers;