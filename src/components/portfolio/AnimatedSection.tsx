import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade" | "scale";
}

const directionVariants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0, filter: "blur(6px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) => {
  const variants = directionVariants[direction];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default AnimatedSection;
