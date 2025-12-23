import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

import productJacket from '@/assets/product-jacket.jpg';
import productBoots from '@/assets/product-boots.jpg';

const initialCartItems = [
  {
    id: 1,
    name: 'Arctic Shell Pro',
    size: 'M',
    color: 'Navy',
    price: 849,
    quantity: 1,
    image: productJacket,
  },
  {
    id: 3,
    name: 'K2 Expedition Boots',
    size: '42',
    color: 'Black',
    price: 699,
    quantity: 1,
    image: productBoots,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

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
              Your <span className="text-gradient">Cart</span>
            </h1>
            <p className="font-body text-muted-foreground">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </motion.div>

          {cartItems.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="font-body text-xl text-muted-foreground mb-8">
                Your cart is empty
              </p>
              <Link to="/shop">
                <Button variant="hero" size="lg">
                  Continue Shopping
                </Button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="flex gap-6 p-6 rounded-2xl bg-card border border-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Image */}
                    <Link to={`/product/${item.id}`} className="flex-shrink-0">
                      <div className="w-24 h-32 rounded-lg overflow-hidden bg-muted">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <Link to={`/product/${item.id}`}>
                            <h3 className="font-display text-lg font-medium text-foreground hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="font-body text-sm text-muted-foreground mt-1">
                            Size: {item.size} / Color: {item.color}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-end justify-between mt-4">
                        {/* Quantity */}
                        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-muted">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-card transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-body text-foreground w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-card transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-display text-xl text-foreground">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Order Summary */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="sticky top-32 p-8 rounded-2xl bg-card border border-border">
                  <h2 className="font-display text-2xl font-medium text-foreground mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="font-body text-muted-foreground">Subtotal</span>
                      <span className="font-body text-foreground">${subtotal}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-muted-foreground">Shipping</span>
                      <span className="font-body text-primary">Free</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg text-foreground">Total</span>
                      <span className="font-display text-2xl text-foreground">${total}</span>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Promo code"
                        className="flex-1 h-12 px-4 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body text-sm"
                      />
                      <Button variant="outline" className="h-12">
                        Apply
                      </Button>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Button variant="hero" className="w-full h-14 text-base">
                    <span>Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <p className="font-body text-xs text-muted-foreground text-center mt-4">
                    Secure checkout powered by Stripe
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
