import { motion } from 'framer-motion';
import { Ruler } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const sizeData = {
  tops: [
    { size: 'XS', chest: '32-34', waist: '26-28', hips: '34-36' },
    { size: 'S', chest: '35-37', waist: '29-31', hips: '37-39' },
    { size: 'M', chest: '38-40', waist: '32-34', hips: '40-42' },
    { size: 'L', chest: '41-43', waist: '35-37', hips: '43-45' },
    { size: 'XL', chest: '44-46', waist: '38-40', hips: '46-48' },
    { size: 'XXL', chest: '47-49', waist: '41-43', hips: '49-51' },
  ],
  footwear: [
    { us: '7', eu: '40', uk: '6', cm: '25' },
    { us: '8', eu: '41', uk: '7', cm: '26' },
    { us: '9', eu: '42', uk: '8', cm: '27' },
    { us: '10', eu: '43', uk: '9', cm: '28' },
    { us: '11', eu: '44', uk: '10', cm: '29' },
    { us: '12', eu: '45', uk: '11', cm: '30' },
  ],
};

const SizeGuide = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Ruler className="w-7 h-7 text-primary" />
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-light text-foreground mb-4">
              Size <span className="text-gradient">Guide</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Find your perfect fit with our comprehensive sizing charts
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Tops & Outerwear */}
            <motion.div
              className="p-8 rounded-xl bg-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-display text-2xl font-medium text-foreground mb-6">Tops & Outerwear</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-4 text-left font-body text-sm text-muted-foreground">Size</th>
                      <th className="py-3 px-4 text-left font-body text-sm text-muted-foreground">Chest (in)</th>
                      <th className="py-3 px-4 text-left font-body text-sm text-muted-foreground">Waist (in)</th>
                      <th className="py-3 px-4 text-left font-body text-sm text-muted-foreground">Hips (in)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeData.tops.map((row) => (
                      <tr key={row.size} className="border-b border-border/50">
                        <td className="py-3 px-4 font-body text-foreground font-medium">{row.size}</td>
                        <td className="py-3 px-4 font-body text-muted-foreground">{row.chest}</td>
                        <td className="py-3 px-4 font-body text-muted-foreground">{row.waist}</td>
                        <td className="py-3 px-4 font-body text-muted-foreground">{row.hips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Footwear */}
            <motion.div
              className="p-8 rounded-xl bg-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="font-display text-2xl font-medium text-foreground mb-6">Footwear</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-4 text-left font-body text-sm text-muted-foreground">US</th>
                      <th className="py-3 px-4 text-left font-body text-sm text-muted-foreground">EU</th>
                      <th className="py-3 px-4 text-left font-body text-sm text-muted-foreground">UK</th>
                      <th className="py-3 px-4 text-left font-body text-sm text-muted-foreground">CM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeData.footwear.map((row) => (
                      <tr key={row.us} className="border-b border-border/50">
                        <td className="py-3 px-4 font-body text-foreground font-medium">{row.us}</td>
                        <td className="py-3 px-4 font-body text-muted-foreground">{row.eu}</td>
                        <td className="py-3 px-4 font-body text-muted-foreground">{row.uk}</td>
                        <td className="py-3 px-4 font-body text-muted-foreground">{row.cm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Fit Tips */}
            <motion.div
              className="p-8 rounded-xl bg-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-display text-2xl font-medium text-foreground mb-4">Fit Tips</h3>
              <ul className="space-y-3 font-body text-muted-foreground">
                <li>• Measure your chest at the widest point, keeping the tape parallel to the ground</li>
                <li>• For layering in cold conditions, consider sizing up for outerwear</li>
                <li>• Footwear should have about a thumb's width of space at the toe</li>
                <li>• When in doubt, our customer service team is happy to help with sizing questions</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SizeGuide;