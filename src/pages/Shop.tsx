import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AddToCartButton } from '@/components/AddToCartButton';

import productJacket from '@/assets/product-jacket.jpg';
import productPants from '@/assets/product-pants.jpg';
import productBoots from '@/assets/product-boots.jpg';
import productGloves from '@/assets/product-gloves.jpg';
import productBackpack from '@/assets/product-backpack.jpg';

const allProducts = [
  { id: 1, name: 'Arctic Shell Pro', category: 'Jackets', price: 849, image: productJacket },
  { id: 2, name: 'Summit Insulated Pants', category: 'Pants', price: 549, image: productPants },
  { id: 3, name: 'K2 Expedition Boots', category: 'Footwear', price: 699, image: productBoots },
  { id: 4, name: 'Thermal Grip Gloves', category: 'Accessories', price: 189, image: productGloves },
  { id: 5, name: 'Everest 80L Pack', category: 'Backpacks', price: 429, image: productBackpack },
  { id: 6, name: 'Storm Shield Jacket', category: 'Jackets', price: 749, image: productJacket },
  { id: 7, name: 'Base Layer Pro', category: 'Base Layers', price: 129, image: productPants },
  { id: 8, name: 'Alpine Crampon Boots', category: 'Footwear', price: 599, image: productBoots },
  { id: 9, name: 'Expedition Mittens', category: 'Accessories', price: 149, image: productGloves },
];

const categories = ['All', 'Jackets', 'Pants', 'Footwear', 'Accessories', 'Backpacks', 'Base Layers'];

const Shop = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Page Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-4">
              Shop <span className="text-gradient">Collection</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Expedition-grade gear engineered for the most demanding conditions on Earth
            </p>
          </motion.div>

          {/* Filters Bar */}
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-6 border-b border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-foreground text-background'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Options */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted text-muted-foreground font-body text-sm hover:bg-muted/80 transition-colors">
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                <span className="font-body text-sm text-muted-foreground">Sort by</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="hidden md:flex items-center gap-1 p-1 rounded-lg bg-muted">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-card text-foreground' : 'text-muted-foreground'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-card text-foreground' : 'text-muted-foreground'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div ref={containerRef} className={`grid gap-8 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`group ${viewMode === 'list' ? 'flex gap-8 items-center' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Link to={`/product/${product.id}`} className={viewMode === 'list' ? 'w-1/3' : 'block'}>
                  <div className={`relative overflow-hidden rounded-lg bg-card ${viewMode === 'list' ? 'aspect-square' : 'aspect-[3/4]'}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
                <div className={viewMode === 'list' ? 'flex-1' : 'mt-4'}>
                  <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    {product.category}
                  </p>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-display text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="font-body text-lg text-foreground font-medium mb-4">
                    ${product.price}
                  </p>
                  <AddToCartButton />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="px-8 py-3 rounded-full border border-border text-foreground font-body text-sm hover:bg-muted transition-colors duration-300">
              Load More Products
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Shop;
