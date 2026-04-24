import { motion } from "framer-motion";

interface AnimatedTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "fadeUp" | "fadeIn" | "slideIn" | "typewriter";
}

const animationVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideIn: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
};

export const AnimatedText = ({
  children,
  as: Component = "p",
  className,
  delay = 0,
  duration = 0.6,
  animation = "fadeUp",
}: AnimatedTextProps) => {
  const variant = animationVariants[animation];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variant}
      transition={{ duration, delay }}
    >
      {Component === "h1" && <h1 className={className}>{children}</h1>}
      {Component === "h2" && <h2 className={className}>{children}</h2>}
      {Component === "h3" && <h3 className={className}>{children}</h3>}
      {Component === "h4" && <h4 className={className}>{children}</h4>}
      {Component === "p" && <p className={className}>{children}</p>}
      {Component === "span" && <span className={className}>{children}</span>}
    </motion.div>
  );
};
