import { motion } from "framer-motion";
import { Leaf, Eye, Target, Heart, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const iconVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

const values = [
  { icon: Target, title: "Missão", desc: "Levar saúde e sabor natural à mesa das famílias brasileiras, oferecendo polpas de frutas 100% naturais com qualidade e carinho." },
  { icon: Eye, title: "Visão", desc: "Ser referência em polpas de frutas naturais no interior de São Paulo, valorizando a agricultura familiar e a sustentabilidade." },
  { icon: Heart, title: "Valores", desc: "Família, qualidade, sustentabilidade, respeito à natureza e compromisso com a saúde dos nossos clientes." },
];

const Sobre = () => {
  useSEO("sobre");

  return (
    <main className="pt-20 pb-16">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-primary/5 py-16"
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Sobre Nós</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A história do Rancho Polparia começa no coração do interior paulista, em Porangaba, 
              onde uma família apaixonada pela terra decidiu transformar as frutas mais saborosas 
              em polpas 100% naturais.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0"
              >
                <Leaf className="text-secondary" size={24} />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Nossa História</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Tudo começou com o amor pela terra e pelas frutas que ela nos oferece. No bairro Colina Verde, 
                em Porangaba, nossa família cultiva frutas há gerações, sempre com respeito ao meio ambiente 
                e à tradição da agricultura familiar.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Percebemos que muitas pessoas buscavam praticidade sem abrir mão do sabor natural e da qualidade. 
                Assim nasceu o Rancho Polparia: um jeito delicioso de levar a frescura das frutas do nosso pomar 
                direto para sua cozinha, pronta para usar em sucos, vitaminas, sobremesas e muito mais.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Cada polpa é feita com carinho, respeitando o processo natural e mantendo todos os nutrientes 
                e o sabor autêntico das frutas. Nós não usamos conservantes, corantes artificiais ou aditivos químicos. 
                É apenas frutas, congeladas no ponto certo.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Missão, Visão e Valores</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Princípios que guiam cada decisão que tomamos</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                  <Card className="border-none shadow-md hover:shadow-xl transition-shadow h-full">
                    <CardContent className="pt-8">
                      <motion.div
                        className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4"
                        variants={iconVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <v.icon className="text-primary" size={32} />
                      </motion.div>
                      <h3 className="font-bold text-xl text-foreground text-center mb-3">{v.title}</h3>
                      <p className="text-muted-foreground text-center">{v.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                variants={iconVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
              >
                <MapPin className="text-primary" size={24} />
              </motion.div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">Onde Nos Encontrar</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Estamos localizados em Porangaba, no interior de São Paulo. Você pode nos encontrar através dos nossos canais de contato 
              para conhecer nossos produtos e fazer encomendas.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
