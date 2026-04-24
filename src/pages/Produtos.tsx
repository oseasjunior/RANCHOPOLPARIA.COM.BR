import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, WheatOff, Snowflake, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/data/products";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const Produtos = () => {
  useSEO("produtos");
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <main className="pt-20 pb-16">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">Nossos Produtos</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">Polpas de frutas congeladas, 100% naturais. Escolha seu sabor favorito!</p>
          <motion.div
            className="flex justify-center gap-3 mt-6 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: ShieldCheck, label: "Sem conservantes" },
              { icon: WheatOff, label: "Sem glúten" },
              { icon: Snowflake, label: "Produto congelado" },
            ].map((badge, i) => (
              <motion.div key={badge.label} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 + i * 0.1 }}>
                <Badge variant="outline" className="gap-1 py-1 px-3">
                  <badge.icon size={14} /> {badge.label}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {products.map((p, i) => (
            <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => setSelected(p)}
              >
                <Card className="group overflow-hidden border-none shadow-md hover:shadow-2xl transition-shadow cursor-pointer h-full flex flex-col">
                  <div className={`h-44 ${p.bgClass} flex items-center justify-center relative overflow-hidden`}>
                    <motion.img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                  <CardContent className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-1">{p.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{p.description.slice(0, 60)}...</p>
                    </div>
                    <p className="text-xs font-semibold text-primary">Embalagem: {p.weight}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-40 ${selected.bgClass} flex items-center justify-center relative overflow-hidden`}>
                <img src={selected.image} alt={selected.name} className="h-full w-full object-cover" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-card/80 hover:bg-card rounded-full"
                  onClick={() => setSelected(null)}
                >
                  <X size={18} />
                </Button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">{selected.name}</h2>
                <p className="text-muted-foreground text-sm mb-4">{selected.description}</p>
                <p className="text-sm font-semibold text-primary mb-4">Embalagem: {selected.weight}</p>

                <h4 className="font-bold text-foreground mb-2 text-sm uppercase tracking-wide">Informação Nutricional (por 100g)</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    ["Calorias", selected.nutrition.calories],
                    ["Carboidratos", selected.nutrition.carbs],
                    ["Proteínas", selected.nutrition.protein],
                    ["Gorduras", selected.nutrition.fat],
                    ["Fibras", selected.nutrition.fiber],
                    ["Vitamina C", selected.nutrition.vitaminC],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between bg-muted rounded-lg px-3 py-2">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-semibold text-foreground">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 mt-5 flex-wrap">
                  <Badge className="bg-primary/10 text-primary border-none"><ShieldCheck size={12} className="mr-1" /> Sem conservantes</Badge>
                  <Badge className="bg-primary/10 text-primary border-none"><WheatOff size={12} className="mr-1" /> Sem glúten</Badge>
                  <Badge className="bg-primary/10 text-primary border-none"><Snowflake size={12} className="mr-1" /> Congelado</Badge>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Produtos;
