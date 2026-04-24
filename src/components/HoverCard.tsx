import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  hoverY?: number;
}

export const HoverCard = ({
  children,
  className = "",
  hoverScale = 1.05,
  hoverY = -5,
  ...props
}: HoverCardProps) => (
  <motion.div
    whileHover={{ scale: hoverScale, y: hoverY }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);
