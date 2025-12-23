import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="font-display text-[150px] md:text-[200px] font-light leading-none text-gradient">
          404
        </span>
        <h1 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
          Lost in the Mountains
        </h1>
        <p className="font-body text-muted-foreground max-w-md mx-auto mb-10">
          The page you're looking for has ventured off the beaten path.
        </p>
        <Link to="/">
          <Button variant="hero" size="lg">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
