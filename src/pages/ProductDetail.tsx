import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Minus, Plus, Heart, Share2, ChevronRight, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AddToCartButton } from '@/components/AddToCartButton';
import { BuyNowButton } from '@/components/BuyNowButton';

import productJacket from '@/assets/product-jacket.jpg';
import editorial1 from '@/assets/editorial-1.jpg';
import editorial2 from '@/assets/editorial-2.jpg';

const productData = {
  id: 1,
  name: 'Arctic Shell Pro',
  category: 'Jackets',
  price: 849,
  description: 'Engineered for extreme alpine conditions, the Arctic Shell Pro combines revolutionary thermal technology with uncompromising durability. Built to maintain core temperature at -40°C while remaining breathable and lightweight.',
  features: [
    'Proprietary Storm Shield waterproof membrane',
    'PrimaLoft Gold insulation rated to -40°C',
    'Articulated pattern for full range of motion',
    'Helmet-compatible hood with wire brim',
    'Reinforced high-wear zones',
    'Internal snow gaiter with gripper elastic',
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  colors: ['Navy', 'Black', 'Storm Grey'],
  images: [productJacket, editorial1, editorial2],
  rating: 4.9,
  reviews: 127,
};

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Navy');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Breadcrumbs */}
          <motion.nav
            className="flex items-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/shop" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Shop
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="font-body text-sm text-foreground">{productData.name}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card">
                <motion.img
                  key={activeImage}
                  src={productData.images[activeImage]}
                  alt={productData.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Wishlist & Share */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-card transition-colors">
                    <Heart className="w-5 h-5 text-foreground" />
                  </button>
                  <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-card transition-colors">
                    <Share2 className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-4">
                {productData.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      activeImage === index ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              className="lg:py-8"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-3">
                {productData.category}
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
                {productData.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(productData.rating) ? 'text-secondary fill-secondary' : 'text-muted'}`}
                    />
                  ))}
                </div>
                <span className="font-body text-sm text-muted-foreground">
                  {productData.rating} ({productData.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="font-display text-3xl text-foreground mb-6">
                ${productData.price}
              </p>

              {/* Description */}
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                {productData.description}
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <p className="font-body text-sm text-foreground mb-3">
                  Color: <span className="text-muted-foreground">{selectedColor}</span>
                </p>
                <div className="flex gap-3">
                  {productData.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full border font-body text-sm transition-all duration-300 ${
                        selectedColor === color
                          ? 'border-primary text-primary bg-primary/10'
                          : 'border-border text-muted-foreground hover:border-foreground'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-body text-sm text-foreground">
                    Size: <span className="text-muted-foreground">{selectedSize}</span>
                  </p>
                  <button className="font-body text-sm text-primary hover:underline">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {productData.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 rounded-lg border font-body text-sm transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-primary text-primary bg-primary/10'
                          : 'border-border text-muted-foreground hover:border-foreground'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-8">
                <p className="font-body text-sm text-foreground">Quantity:</p>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-muted">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-card transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-body text-foreground w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-card transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex-1">
                  <AddToCartButton />
                </div>
                <BuyNowButton />
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-border">
                <div className="text-center">
                  <Truck className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="font-body text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="font-body text-xs text-muted-foreground">2 Year Warranty</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="font-body text-xs text-muted-foreground">Easy Returns</p>
                </div>
              </div>

              {/* Features */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-display text-lg font-medium text-foreground mb-4">Features</h3>
                <ul className="space-y-2">
                  {productData.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
