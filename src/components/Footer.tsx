import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const linkHoverVariants = {
  initial: { opacity: 0.6 },
  whileHover: { opacity: 1, x: 4 },
  transition: { duration: 0.2 },
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <h3 className="text-xl font-bold mb-4">Rancho Polparia</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Da nossa família, para a sua. Polpas de frutas 100% naturais, produzidas com carinho através da agricultura familiar.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <h4 className="font-bold mb-4 text-lg">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "Produtos", path: "/produtos" },
                { label: "Sobre Nós", path: "/sobre" },
                { label: "Contato", path: "/contato" },
              ].map((link) => (
                <li key={link.path}>
                  <motion.div
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1, x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors inline-flex items-center"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <h4 className="font-bold mb-4 text-lg">Contato</h4>
            <ul className="space-y-3 text-sm">
              <motion.li
                className="flex items-start gap-3"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">Rua Carlos de Almeida Machado, 214 - Colina Verde, Porangaba - SP</span>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={16} className="shrink-0 text-secondary" />
                <a href="tel:+5515997455015" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  (15) 99745-5015
                </a>
              </motion.li>
              <motion.li
                className="flex items-center gap-3"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={16} className="shrink-0 text-secondary" />
                <a href="mailto:contato@ranchopolparia.online" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  contato@ranchopolparia.online
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-primary-foreground/20 mt-8 pt-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          style={{ originX: 0 }}
        />

        {/* Footer Bottom */}
        <motion.div
          className="text-center text-xs text-primary-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Rancho Polparia. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 24.230.486/0001-12</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
