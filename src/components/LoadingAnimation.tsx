import { motion } from "framer-motion";

interface LoadingAnimationProps {
  size?: "sm" | "md" | "lg";
  message?: string;
}

const sizeMap = {
  sm: { width: 30, height: 30 },
  md: { width: 50, height: 50 },
  lg: { width: 70, height: 70 },
};

export const LoadingAnimation = ({ size = "md", message }: LoadingAnimationProps) => {
  const dimensions = sizeMap[size];

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        className="relative"
        style={dimensions}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full"
          style={dimensions}
        />
      </motion.div>
      {message && (
        <motion.p
          className="text-muted-foreground text-sm font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {message}
        </motion.p>
      )}
    </div>
  );
};
