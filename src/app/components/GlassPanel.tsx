import { ReactNode } from "react";
import { motion } from "motion/react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  neonBorder?: "cyan" | "blue" | "purple" | "none";
  blur?: boolean;
}

export function GlassPanel({ 
  children, 
  className = "", 
  neonBorder = "none",
  blur = true 
}: GlassPanelProps) {
  const borderColors = {
    cyan: "shadow-[0_0_15px_rgba(0,217,255,0.15)] border-[#00D9FF]/20 hover:border-[#00D9FF]/30 hover:shadow-[0_0_20px_rgba(0,217,255,0.25)]",
    blue: "shadow-[0_0_15px_rgba(14,165,233,0.15)] border-[#0EA5E9]/20 hover:border-[#0EA5E9]/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.25)]",
    purple: "shadow-[0_0_15px_rgba(139,92,246,0.15)] border-[#8B5CF6]/20 hover:border-[#8B5CF6]/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]",
    none: "border-white/[0.08] hover:border-white/[0.12]"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`
        bg-white/[0.03] 
        ${blur ? 'backdrop-blur-xl' : ''} 
        border 
        ${borderColors[neonBorder]}
        rounded-lg 
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}