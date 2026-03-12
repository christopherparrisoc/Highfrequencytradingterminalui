import { Outlet, Link, useLocation } from "react-router";
import { Activity, Bot, LineChart, Zap, Power, Settings, User, TrendingUp } from "lucide-react";
import { StatusIndicator } from "./StatusIndicator";
import { GlassPanel } from "./GlassPanel";

export function Layout() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Terminal", icon: Activity },
    { path: "/bots", label: "Bots", icon: Bot },
    { path: "/research", label: "Research", icon: LineChart },
    { path: "/analytics", label: "Analytics", icon: Zap },
  ];

  return (
    <div className="h-screen flex flex-col bg-[#0A0A0A] text-white/90 overflow-hidden">
      {/* Top Navigation Bar */}
      <div className="h-14 border-b border-white/[0.08] bg-black/40 backdrop-blur-xl flex items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_10px_rgba(0,217,255,0.7)]" />
            <span className="text-sm font-mono tracking-wider text-white/90">QUANTUM TRADING</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    px-3 py-1.5 rounded text-xs font-mono transition-all
                    ${isActive 
                      ? 'bg-[#00D9FF]/10 text-[#00D9FF] shadow-[0_0_15px_rgba(0,217,255,0.2)]' 
                      : 'text-white/50 hover:text-white/80 hover:bg-white/[0.03]'
                    }
                  `}
                >
                  <div className="flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    {link.label}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-mono">
            <StatusIndicator status="online" label="EXCHANGE" />
            <div className="text-white/60">
              LATENCY <span className="text-[#00D9FF]">12ms</span>
            </div>
            <div className="text-white/60">
              EQUITY <span className="text-[#22C55E]">$2,451,823</span>
            </div>
          </div>
          
          <button className="px-3 py-1.5 bg-[#FF2D55]/10 border border-[#FF2D55]/30 rounded text-xs font-mono text-[#FF2D55] hover:bg-[#FF2D55]/20 transition-all shadow-[0_0_15px_rgba(255,45,85,0.15)] flex items-center gap-1.5">
            <Power className="w-3.5 h-3.5" />
            KILL SWITCH
          </button>

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded bg-white/[0.05] hover:bg-white/[0.08] flex items-center justify-center border border-white/[0.08] transition-all">
              <Settings className="w-4 h-4 text-white/60" />
            </button>
            <button className="w-8 h-8 rounded bg-white/[0.05] hover:bg-white/[0.08] flex items-center justify-center border border-white/[0.08] transition-all">
              <User className="w-4 h-4 text-white/60" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}
