import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import editorial1 from '@/assets/editorial-1.jpg';

const menuData = {
  Shop: {
    categories: [
      {
        title: 'Apparel',
        links: ['Jackets', 'Base Layers', 'Pants', 'Accessories'],
      },
      {
        title: 'Footwear',
        links: ['Mountaineering Boots', 'Approach Shoes', 'Gaiters'],
      },
      {
        title: 'Equipment',
        links: ['Backpacks', 'Climbing Gear', 'Tents', 'Sleeping Systems'],
      },
      {
        title: 'By Activity',
        links: ['Alpine Climbing', 'Ice Climbing', 'Ski Touring', 'Expedition'],
      },
    ],
    featured: {
      title: 'Arctic Shell Pro',
      description: 'Engineered for -40°C expeditions',
      image: editorial1,
    },
  },
  Collections: {
    categories: [
      {
        title: 'Seasonal',
        links: ['Winter 2024', 'Summit Series', 'Heritage Collection'],
      },
      {
        title: 'Performance',
        links: ['Pro Line', 'Technical Series', 'Ultra-Light'],
      },
      {
        title: 'Collaborations',
        links: ['Artist Series', 'Explorer Editions'],
      },
    ],
    featured: {
      title: 'Summit Series',
      description: 'Born from the world\'s highest peaks',
      image: editorial1,
    },
  },
};

interface MegaMenuProps {
  activeMenu: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const MegaMenu = ({ activeMenu, onMouseEnter, onMouseLeave }: MegaMenuProps) => {
  const menu = menuData[activeMenu as keyof typeof menuData];
  if (!menu) return null;

  return (
    <motion.div
      className="absolute top-full left-0 right-0 bg-popover/95 backdrop-blur-xl border-t border-border/50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Categories */}
          <div className="col-span-8 grid grid-cols-4 gap-8">
            {menu.categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <h3 className="font-display text-lg font-medium text-foreground mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.links.map((link) => (
                    <li key={link}>
                      <Link
                        to={`/shop?category=${link.toLowerCase().replace(' ', '-')}`}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Featured */}
          <motion.div
            className="col-span-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link to="/collections/featured" className="group block relative overflow-hidden rounded-lg aspect-[4/3]">
              <img
                src={menu.featured.image}
                alt={menu.featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="font-display text-xl font-medium text-foreground mb-1">
                  {menu.featured.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {menu.featured.description}
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
