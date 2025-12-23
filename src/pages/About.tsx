import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BuyNowButton } from '@/components/BuyNowButton';
import heroImage from '@/assets/hero-mountain.jpg';
import editorial1 from '@/assets/editorial-1.jpg';
import editorial2 from '@/assets/editorial-2.jpg';

const values = [
  {
    title: 'Uncompromising Quality',
    description: 'Every product undergoes rigorous testing in the most extreme conditions on Earth.',
  },
  {
    title: 'Sustainable Innovation',
    description: 'We pioneer eco-conscious materials without sacrificing performance or durability.',
  },
  {
    title: 'Explorer First',
    description: 'Designed in collaboration with world-class alpinists and expedition leaders.',
  },
];

const team = [
  { name: 'Sarah Chen', role: 'Founder & CEO', image: editorial1 },
  { name: 'Marcus Berg', role: 'Head of Design', image: editorial2 },
  { name: 'Elena Volkov', role: 'Lead Engineer', image: heroImage },
];

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{ y: heroY }}
          >
            <img
              src={heroImage}
              alt="Mountain expedition"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center px-6"
            style={{ opacity: heroOpacity }}
          >
            <div>
              <motion.span
                className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-6 block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Our Story
              </motion.span>
              <motion.h1
                className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Born From
                <br />
                <span className="text-gradient">The Summit</span>
              </motion.h1>
              <motion.p
                className="font-body text-lg text-muted-foreground max-w-xl mx-auto"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                For over 15 years, we've been engineering gear for explorers who refuse to accept limits
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section ref={containerRef} className="py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <span className="font-body text-xs uppercase tracking-[0.3em] text-secondary mb-6 block">
                  Our Mission
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
                  To Empower
                  <br />
                  <span className="italic">Every</span> Explorer
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  We believe that the right gear can transform an impossible journey into an unforgettable achievement. That's why we dedicate ourselves to creating equipment that performs when it matters most—at the edge of human endurance.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-8">
                  From the frozen peaks of the Himalayas to the windswept glaciers of Antarctica, our products have accompanied explorers on some of the most demanding expeditions in history.
                </p>
                <BuyNowButton />
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={editorial1}
                    alt="Our mission"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-8 -left-8 p-8 glass-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <span className="font-display text-5xl font-light text-primary">15+</span>
                  <p className="font-body text-sm uppercase tracking-wider text-muted-foreground mt-2">
                    Years of Excellence
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
                What Drives Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
                Our <span className="text-gradient">Values</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="p-8 rounded-2xl bg-card border border-border"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <span className="font-display text-xl text-primary">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-medium text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">
                The Team
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
                Meet Our <span className="text-gradient-ember">Leaders</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
