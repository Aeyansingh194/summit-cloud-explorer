import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BuyNowButton } from '@/components/BuyNowButton';
import heroImage from '@/assets/hero-mountain.jpg';
import editorial1 from '@/assets/editorial-1.jpg';

const expeditions = [
  {
    title: 'K2 Winter Ascent 2024',
    date: 'January 2024',
    location: 'Karakoram Range, Pakistan',
    description: 'Supporting the first winter summit attempt of the world\'s most dangerous peak.',
  },
  {
    title: 'Antarctic Traverse',
    date: 'December 2023',
    location: 'South Pole, Antarctica',
    description: 'A 900-mile unsupported journey across the frozen continent.',
  },
  {
    title: 'Denali Clean-Up Mission',
    date: 'May 2024',
    location: 'Alaska, USA',
    description: 'Environmental initiative to remove debris from North America\'s highest peak.',
  },
];

const Expedition = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[80vh] overflow-hidden">
          <img
            src={heroImage}
            alt="Expedition"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <span className="font-body text-xs uppercase tracking-[0.3em] text-secondary mb-6 block">
                Adventure Awaits
              </span>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6">
                Expedition
                <br />
                <span className="text-gradient-ember">Stories</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
                Join us on the world's most challenging adventures
              </p>
            </div>
          </motion.div>
        </section>

        {/* Expeditions List */}
        <section ref={containerRef} className="py-32">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                Current Missions
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
                Active <span className="text-gradient">Expeditions</span>
              </h2>
            </motion.div>

            <div className="grid gap-8">
              {expeditions.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="group flex flex-col md:flex-row gap-8 p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="md:w-1/3">
                    <div className="aspect-[16/9] rounded-lg overflow-hidden">
                      <img
                        src={editorial1}
                        alt={exp.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs uppercase tracking-wider">
                        {exp.date}
                      </span>
                      <span className="font-body text-sm text-muted-foreground">
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="font-body text-muted-foreground mb-6">
                      {exp.description}
                    </p>
                    <div>
                      <Link
                        to="#"
                        className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-wide text-foreground hover:text-primary transition-colors duration-300"
                      >
                        Read Full Story →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
                Ready for Your
                <br />
                <span className="text-gradient">Next Adventure?</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-xl mx-auto mb-10">
                Explore our collection of expedition-grade gear built for the most demanding conditions
              </p>
              <BuyNowButton />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Expedition;
