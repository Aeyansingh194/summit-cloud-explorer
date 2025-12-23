import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Loader } from '@/components/Loader';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { ProductGrid } from '@/components/ProductGrid';
import { Editorial } from '@/components/Editorial';
import { Trust } from '@/components/Trust';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navbar />
        <main>
          <Hero />
          <Features />
          <ProductGrid />
          <Editorial />
          <Trust />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
