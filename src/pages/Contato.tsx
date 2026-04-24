import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const Contato = () => {
  useSEO("contato");

  return (
    <main className="pt-20 pb-16">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-primary/5 py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">Contato</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">Tem dúvidas ou quer fazer uma encomenda? Fale conosco!</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">Informações de Contato</h2>
              </div>

              {[
                {
                  icon: MapPin,
                  title: "Endereço",
                  content: "Rua Carlos de Almeida Machado, 214\nColina Verde - Porangaba/SP",
                },
                {
                  icon: Phone,
                  title: "WhatsApp",
                  content: "(15) 99745-5015",
                  link: "https://wa.me/5515997455015",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "contato@ranchopolparia.online",
                  link: "mailto:contato@ranchopolparia.online",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <item.icon className="text-primary" size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                    {item.link ? (
                      <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}

            </motion.div>

            {/* Map + WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <iframe
                  title="Localização Rancho Polparia"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14676.66!2d-48.14!3d-23.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c04!2sPorangaba%2C+SP!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-primary/10 bg-primary/5 p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">Fale conosco pelo WhatsApp</h3>
                <p className="text-muted-foreground mb-4">
                  Envie sua mensagem direto no WhatsApp e receba resposta rápida de nosso representante comercial.
                </p>
                <a
                  href="https://wa.me/5515997455015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary text-white px-5 py-3 font-semibold shadow-sm hover:bg-primary/90 transition-colors"
                >
                  Abrir WhatsApp
                </a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contato;
