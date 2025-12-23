import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import heroImage from '@/assets/hero-mountain.jpg';
import editorial1 from '@/assets/editorial-1.jpg';
import editorial2 from '@/assets/editorial-2.jpg';

const collections = [
  {
    id: 'winter-2024',
    name: 'Winter 2024',
    description: 'Our most advanced cold-weather collection yet',
    image: heroImage,
    productCount: 24,
  },
  {
    id: 'summit-series',
    name: 'Summit Series',
    description: 'Born from the world\'s highest peaks',
    image: editorial1,
    productCount: 18,
  },
  {
    id: 'expedition-pro',
    name: 'Expedition Pro',
    description: 'Professional-grade gear for extreme conditions',
    image: editorial2,
    productCount: 32,
  },
];

const Collections = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-4">
              <span className="text-gradient">Collections</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Curated selections designed for specific expeditions and environments
            </p>
          </motion.div>

          {/* Collections Grid */}
          <div ref={containerRef} className="space-y-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <Link
                  to={`/shop?collection=${collection.id}`}
                  className="group block relative overflow-hidden rounded-2xl"
                >
                  {/* Image */}
                  <div className="relative aspect-[21/9] md:aspect-[3/1]">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="p-8 md:p-12 lg:p-16 max-w-2xl">
                      <motion.span
                        className="inline-block font-body text-xs uppercase tracking-[0.3em] text-primary mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {collection.productCount} Products
                      </motion.span>
                      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {collection.name}
                      </h2>
                      <p className="font-body text-muted-foreground mb-6 max-w-md">
                        {collection.description}
                      </p>
                      <div className="flex items-center gap-2 font-body text-sm uppercase tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
                        <span>Explore Collection</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Collections;
