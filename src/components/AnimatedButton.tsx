import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { ReactNode } from "react";

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode;
  icon?: ReactNode;
  animateOnHover?: "scale" | "slide" | "pulse";
}

const hoverVariants = {
  scale: { scale: 1.05 },
  slide: { x: 4 },
  pulse: { scale: 1.02 },
};

export const AnimatedButton = ({
  children,
  icon,
  animateOnHover = "scale",
  className = "",
  ...props
}: AnimatedButtonProps) => (
  <motion.div
    whileHover={hoverVariants[animateOnHover]}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    <Button className={className} {...props}>
      <motion.div className="flex items-center gap-2">
        <span>{children}</span>
        {icon && <motion.div whileHover={{ rotate: 20 }}>{icon}</motion.div>}
      </motion.div>
    </Button>
  </motion.div>
);
