import { motion } from "motion/react";

export function LiveIndicator() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="relative flex items-center justify-center">
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-[#00D9FF]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] shadow-[0_0_8px_rgba(0,217,255,0.8)]" />
      </div>
      <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">LIVE</span>
    </div>
  );
}
