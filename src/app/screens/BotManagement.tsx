import { GlassPanel } from "../components/GlassPanel";
import { StatusIndicator } from "../components/StatusIndicator";
import { tradingBots } from "../utils/mockData";
import { Play, Pause, Settings, Trash2, Copy, TrendingUp, TrendingDown, Cpu, Zap, Target } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

export function BotManagement() {
  return (
    <div className="h-full flex gap-3 p-3 overflow-hidden">
      {/* Left Panel - Bot List */}
      <div className="w-96 flex flex-col gap-3">
        <GlassPanel neonBorder="cyan" className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-mono text-white/60 tracking-wider">TRADING BOTS</h3>
            <button className="px-3 py-1.5 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded text-xs font-mono text-[#00D9FF] hover:bg-[#00D9FF]/20 transition-all">
              + NEW BOT
            </button>
          </div>
          <div className="space-y-2">
            {tradingBots.map((bot) => (
              <button
                key={bot.id}
                className="w-full p-3 bg-white/[0.02] border border-white/[0.06] rounded hover:bg-white/[0.05] hover:border-[#00D9FF]/20 transition-all text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-sm text-white/90">{bot.name}</div>
                    <div className="text-xs text-white/40 font-mono">{bot.strategy}</div>
                  </div>
                  <StatusIndicator status={bot.health} />
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white/40">PnL:</span>
                  <span className={bot.pnl >= 0 ? 'text-[#22C55E]' : 'text-[#FF2D55]'}>
                    ${bot.pnl.toLocaleString()}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </GlassPanel>
      </div>

      {/* Center Panel - Bot Details */}
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
        <GlassPanel neonBorder="blue" className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl text-white/90 mb-1">Alpha Momentum</h2>
              <div className="text-sm text-white/40 font-mono">Mean Reversion Strategy</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center hover:bg-[#22C55E]/20 transition-all">
                <Play className="w-5 h-5 text-[#22C55E]" />
              </button>
              <button className="w-10 h-10 rounded bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.08] transition-all">
                <Settings className="w-5 h-5 text-white/60" />
              </button>
              <button className="w-10 h-10 rounded bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.08] transition-all">
                <Copy className="w-5 h-5 text-white/60" />
              </button>
              <button className="w-10 h-10 rounded bg-[#FF2D55]/10 border border-[#FF2D55]/30 flex items-center justify-center hover:bg-[#FF2D55]/20 transition-all">
                <Trash2 className="w-5 h-5 text-[#FF2D55]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded">
              <div className="text-xs text-white/40 mb-1 font-mono">STATUS</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#22C55E] shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-sm text-white/90">Running</span>
              </div>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded">
              <div className="text-xs text-white/40 mb-1 font-mono">TOTAL PNL</div>
              <div className="text-xl text-[#22C55E] flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                $12,845
              </div>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded">
              <div className="text-xs text-white/40 mb-1 font-mono">WIN RATE</div>
              <div className="text-xl text-white/90">67.3%</div>
            </div>
            <div className="p-4 bg-white/[0.02] border border-white/[0.06] rounded">
              <div className="text-xs text-white/40 mb-1 font-mono">TRADES</div>
              <div className="text-xl text-white/90">1,247</div>
            </div>
          </div>

          <div className="h-64 mb-6">
            <div className="text-xs font-mono text-white/60 mb-3">PERFORMANCE CHART</div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={tradingBots[0].sparklineData.map((v, i) => ({ time: i, value: v * 100 }))}>
                <defs>
                  <linearGradient id="colorPnl" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00D9FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00D9FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#ffffff20" style={{ fontSize: 10 }} />
                <YAxis stroke="#ffffff20" style={{ fontSize: 10 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(20, 20, 25, 0.95)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                />
                <Area type="monotone" dataKey="value" stroke="#00D9FF" fillOpacity={1} fill="url(#colorPnl)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassPanel>

        <div className="grid grid-cols-2 gap-3">
          <GlassPanel neonBorder="purple" className="p-4">
            <h3 className="text-xs font-mono text-white/60 tracking-wider mb-4">STRATEGY PARAMETERS</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded">
                <span className="text-sm text-white/60">Entry Threshold</span>
                <span className="text-sm text-white/90 font-mono">2.5σ</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded">
                <span className="text-sm text-white/60">Exit Threshold</span>
                <span className="text-sm text-white/90 font-mono">0.5σ</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded">
                <span className="text-sm text-white/60">Max Position Size</span>
                <span className="text-sm text-white/90 font-mono">$50,000</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded">
                <span className="text-sm text-white/60">Stop Loss</span>
                <span className="text-sm text-[#FF2D55] font-mono">-2.5%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded">
                <span className="text-sm text-white/60">Take Profit</span>
                <span className="text-sm text-[#22C55E] font-mono">+5.0%</span>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel neonBorder="purple" className="p-4">
            <h3 className="text-xs font-mono text-white/60 tracking-wider mb-4">RESOURCE USAGE</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#00D9FF]" />
                    <span className="text-sm text-white/60">CPU Usage</span>
                  </div>
                  <span className="text-sm text-white/90 font-mono">23%</span>
                </div>
                <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9]" style={{ width: '23%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-sm text-white/60">Memory</span>
                  </div>
                  <span className="text-sm text-white/90 font-mono">145 MB</span>
                </div>
                <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#F59E0B] to-[#F97316]" style={{ width: '45%' }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#8B5CF6]" />
                    <span className="text-sm text-white/60">Network I/O</span>
                  </div>
                  <span className="text-sm text-white/90 font-mono">8 ms</span>
                </div>
                <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]" style={{ width: '12%' }} />
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06]">
                <div className="text-xs text-white/40 mb-2 font-mono">UPTIME</div>
                <div className="text-lg text-white/90 font-mono">47h 23m 15s</div>
              </div>
            </div>
          </GlassPanel>
        </div>

        <GlassPanel neonBorder="cyan" className="p-4">
          <h3 className="text-xs font-mono text-white/60 tracking-wider mb-4">RECENT TRADES</h3>
          <div className="grid grid-cols-7 gap-2 text-xs font-mono text-white/40 mb-2 pb-2 border-b border-white/[0.06]">
            <div>TIME</div>
            <div>SIDE</div>
            <div>SYMBOL</div>
            <div className="text-right">ENTRY</div>
            <div className="text-right">EXIT</div>
            <div className="text-right">PNL</div>
            <div className="text-right">SLIPPAGE</div>
          </div>
          <div className="space-y-1">
            {[
              { time: "14:23:45", side: "BUY", symbol: "BTC/USD", entry: 42156.50, exit: 42245.30, pnl: 88.80, slippage: 0.02 },
              { time: "14:18:32", side: "SELL", symbol: "BTC/USD", entry: 42234.10, exit: 42189.25, pnl: 44.85, slippage: 0.03 },
              { time: "14:12:18", side: "BUY", symbol: "ETH/USD", entry: 2234.50, exit: 2241.20, pnl: 6.70, slippage: 0.01 },
              { time: "14:05:42", side: "SELL", symbol: "BTC/USD", entry: 42198.75, exit: 42245.30, pnl: -46.55, slippage: 0.05 },
              { time: "13:58:15", side: "BUY", symbol: "SOL/USD", entry: 98.45, exit: 99.12, pnl: 0.67, slippage: 0.02 },
            ].map((trade, i) => (
              <div key={i} className="grid grid-cols-7 gap-2 text-xs font-mono p-2 bg-white/[0.02] rounded hover:bg-white/[0.04] transition-all">
                <div className="text-white/40">{trade.time}</div>
                <div className={trade.side === 'BUY' ? 'text-[#22C55E]' : 'text-[#FF2D55]'}>{trade.side}</div>
                <div className="text-white/60">{trade.symbol}</div>
                <div className="text-white/70 text-right">{trade.entry.toFixed(2)}</div>
                <div className="text-white/70 text-right">{trade.exit.toFixed(2)}</div>
                <div className={`text-right ${trade.pnl >= 0 ? 'text-[#22C55E]' : 'text-[#FF2D55]'}`}>
                  ${trade.pnl.toFixed(2)}
                </div>
                <div className="text-white/40 text-right">{trade.slippage.toFixed(2)}%</div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
