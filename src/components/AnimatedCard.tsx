import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface AnimatedCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  index?: number;
  onClick?: () => void;
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: (i || 0) * 0.1, duration: 0.5 },
  }),
};

export const AnimatedCard = ({ children, className = "", index = 0, onClick, ...props }: AnimatedCardProps) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUpVariants}
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    onClick={onClick}
    {...props}
  >
    <Card className={`border-none shadow-md hover:shadow-xl transition-shadow ${className}`}>
      <CardContent>{children}</CardContent>
    </Card>
  </motion.div>
);
