import { motion } from "motion/react";

interface StatusIndicatorProps {
  status: "online" | "warning" | "error" | "offline";
  label?: string;
  showPulse?: boolean;
}

export function StatusIndicator({ status, label, showPulse = true }: StatusIndicatorProps) {
  const statusColors = {
    online: { bg: "bg-[#22C55E]", glow: "shadow-[0_0_10px_rgba(34,197,94,0.5)]" },
    warning: { bg: "bg-[#F59E0B]", glow: "shadow-[0_0_10px_rgba(245,158,11,0.5)]" },
    error: { bg: "bg-[#FF2D55]", glow: "shadow-[0_0_10px_rgba(255,45,85,0.5)]" },
    offline: { bg: "bg-gray-600", glow: "" }
  };

  const colors = statusColors[status];

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className={`w-2 h-2 rounded-full ${colors.bg} ${colors.glow}`} />
        {showPulse && status !== "offline" && (
          <motion.div
            className={`absolute inset-0 rounded-full ${colors.bg} opacity-50`}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>
      {label && <span className="text-xs text-white/60">{label}</span>}
    </div>
  );
}
