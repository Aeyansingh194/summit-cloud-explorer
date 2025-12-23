import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { AddToCartButton } from './AddToCartButton';

import productJacket from '@/assets/product-jacket.jpg';
import productPants from '@/assets/product-pants.jpg';
import productBoots from '@/assets/product-boots.jpg';
import productGloves from '@/assets/product-gloves.jpg';
import productBackpack from '@/assets/product-backpack.jpg';
import editorial1 from '@/assets/editorial-1.jpg';

const products = [
  {
    id: 1,
    name: 'Arctic Shell Pro',
    category: 'Jackets',
    price: 849,
    image: productJacket,
    hoverImage: editorial1,
  },
  {
    id: 2,
    name: 'Summit Insulated Pants',
    category: 'Pants',
    price: 549,
    image: productPants,
    hoverImage: productPants,
  },
  {
    id: 3,
    name: 'K2 Expedition Boots',
    category: 'Footwear',
    price: 699,
    image: productBoots,
    hoverImage: productBoots,
  },
  {
    id: 4,
    name: 'Thermal Grip Gloves',
    category: 'Accessories',
    price: 189,
    image: productGloves,
    hoverImage: productGloves,
  },
  {
    id: 5,
    name: 'Everest 80L Pack',
    category: 'Backpacks',
    price: 429,
    image: productBackpack,
    hoverImage: productBackpack,
  },
  {
    id: 6,
    name: 'Storm Shield Jacket',
    category: 'Jackets',
    price: 749,
    image: productJacket,
    hoverImage: editorial1,
  },
];

export const ProductGrid = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="font-body text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">
              Featured Gear
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Expedition <span className="text-gradient-ember">Essentials</span>
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-6 md:mt-0 font-body text-sm uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300 nav-link-underline"
          >
            View All Products
          </Link>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group product-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/product/${product.id}`} className="block">
                {/* Image Container */}
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-card mb-4">
                  {/* Primary Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="primary-image absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Hover Image */}
                  <img
                    src={product.hoverImage}
                    alt={product.name}
                    className="secondary-image absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Quick Add Button */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                  >
                    <AddToCartButton />
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                  <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                    {product.category}
                  </p>
                  <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="font-body text-foreground font-medium">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
