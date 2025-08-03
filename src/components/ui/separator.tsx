import { motion } from "framer-motion";

interface SeparatorProps {
  variant?: "default" | "gradient" | "safari" | "elegant";
  className?: string;
}

const Separator = ({ variant = "default", className = "" }: SeparatorProps) => {
  const variants = {
    default: "w-24 h-1 bg-[#5c0811] rounded-full mx-auto",
    gradient: "w-32 h-1 bg-gradient-to-r from-[#5c0811] via-amber-600 to-[#5c0811] rounded-full mx-auto",
    safari: "w-40 h-1 bg-gradient-to-r from-transparent via-[#5c0811] to-transparent rounded-full mx-auto",
    elegant: "relative w-48 h-1 mx-auto"
  };

  if (variant === "elegant") {
    return (
      <motion.div 
        className={`${variants.elegant} ${className}`}
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5c0811] to-transparent rounded-full" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#5c0811] rounded-full" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#5c0811] rounded-full" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-600 rounded-full" />
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`${variants[variant]} ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  );
};

export default Separator;