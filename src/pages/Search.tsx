import { motion } from 'framer-motion';
import { Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

import productJacket from '@/assets/product-jacket.jpg';
import productBoots from '@/assets/product-boots.jpg';
import productBackpack from '@/assets/product-backpack.jpg';

const popularSearches = ['Jackets', 'Boots', 'Backpacks', 'Gloves', 'Winter Gear'];

const trendingProducts = [
  { id: 1, name: 'Arctic Shell Pro', price: 849, image: productJacket },
  { id: 3, name: 'K2 Expedition Boots', price: 699, image: productBoots },
  { id: 5, name: 'Everest 80L Pack', price: 429, image: productBackpack },
];

const Search = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Search Input */}
            <div className="relative mb-12">
              <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for products..."
                className="w-full h-16 pl-16 pr-6 rounded-full bg-card border border-border text-foreground text-lg placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 font-body"
                autoFocus
              />
            </div>

            {/* Popular Searches */}
            <div className="mb-16">
              <h3 className="font-display text-xl font-medium text-foreground mb-6">Popular Searches</h3>
              <div className="flex flex-wrap gap-3">
                {popularSearches.map((term) => (
                  <Link
                    key={term}
                    to={`/shop?q=${term.toLowerCase()}`}
                    className="px-5 py-2.5 rounded-full bg-muted text-muted-foreground font-body text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    {term}
                  </Link>
                ))}
              </div>
            </div>

            {/* Trending Products */}
            <div>
              <h3 className="font-display text-xl font-medium text-foreground mb-6">Trending Now</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {trendingProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group">
                    <div className="relative aspect-square rounded-lg overflow-hidden bg-card mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h4 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h4>
                    <p className="font-body text-muted-foreground">${product.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Search;