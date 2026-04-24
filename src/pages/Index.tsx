import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Droplets, WheatOff, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { useSEO } from "@/hooks/use-seo";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  { icon: Leaf, title: "100% Natural", desc: "Sem conservantes ou aditivos" },
  { icon: Droplets, title: "Pura Fruta", desc: "Feita apenas com frutas selecionadas" },
  { icon: WheatOff, title: "Sem Glúten", desc: "Seguro para celíacos" },
  { icon: Heart, title: "Agricultura Familiar", desc: "Apoiando famílias locais" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  useSEO("home");

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-bold text-lg mb-2 tracking-wide uppercase"
          >
            Rancho Polparia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-background leading-tight mb-6"
          >
            Da nossa família, <br />para a sua
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-background/80 text-lg md:text-xl mb-8 max-w-xl mx-auto"
          >
            Polpas de frutas 100% naturais, congeladas com todo o sabor da fruta fresca.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base px-8">
              <Link to="/produtos">Nossos Sabores</Link>
            </Button>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base px-8">
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-card relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Card className="text-center border-none shadow-md overflow-hidden h-full group">
                    <CardContent className="pt-8 pb-6">
                      <motion.div
                        className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <h.icon className="text-primary" size={28} />
                        </motion.div>
                      </motion.div>
                      <h3 className="font-bold text-lg text-foreground mb-1">{h.title}</h3>
                      <p className="text-muted-foreground text-sm">{h.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-background relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
            <motion.h2 animate={{ letterSpacing: "0.05em" }} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Nossos Sabores
            </motion.h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Frutas selecionadas, colhidas no ponto certo de maturação para o máximo sabor.</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {products.slice(0, 8).map((p, i) => (
              <motion.div
                key={p.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link to="/produtos">
                  <motion.div
                    whileHover={{ y: -12, rotateZ: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Card className="group overflow-hidden border-none shadow-md hover:shadow-2xl transition-shadow cursor-pointer h-full">
                      <div className={`h-32 md:h-40 ${p.bgClass} overflow-hidden relative`}>
                        <motion.img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-cover"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-2"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <span className="text-background font-bold text-sm">Ver mais</span>
                        </motion.div>
                      </div>
                      <CardContent className="p-4 text-center bg-primary/15">
                        <h3 className="font-bold text-foreground">{p.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{p.weight}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button asChild size="lg" className="font-bold">
              <Link to="/produtos">
                Ver Todos os Produtos <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Sobre Nós</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Somos uma família de Porangaba, interior de São Paulo, apaixonada pela terra e pelas frutas que ela nos dá. 
                No Rancho Polparia, cada polpa é feita com frutas frescas, sem conservantes e com muito carinho.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Acreditamos na agricultura familiar como caminho para levar saúde e sabor de verdade até a sua mesa.
              </p>
              <Button asChild variant="outline" size="lg" className="font-bold">
                <Link to="/sobre">Conheça Nossa História <ArrowRight size={18} /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-4">Fale Conosco</h2>
            <p className="text-secondary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
              Quer saber mais sobre nossos produtos ou fazer uma encomenda? Entre em contato!
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8">
              <Link to="/contato">Entrar em Contato</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
