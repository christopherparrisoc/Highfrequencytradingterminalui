import { GlassPanel } from "../components/GlassPanel";
import { latencyMetrics, tradingBots } from "../utils/mockData";
import { Zap, Activity, TrendingUp, Clock, Server, Wifi } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, ComposedChart, Legend } from "recharts";

export function PerformanceAnalytics() {
  const systemMetrics = {
    avgLatency: 11.2,
    p50Latency: 9.5,
    p95Latency: 18.3,
    p99Latency: 24.7,
    uptime: 99.94,
    requestsPerSecond: 2847,
    totalRequests: 8234567,
    errorRate: 0.02
  };

  const executionSpeed = [
    { bot: "Alpha Momentum", avgExec: 8.2, p95: 15.3, p99: 22.1 },
    { bot: "Gamma Scalper", avgExec: 12.4, p95: 21.7, p99: 28.5 },
    { bot: "Delta Arbitrage", avgExec: 24.1, p95: 35.8, p99: 42.3 },
    { bot: "Sigma Liquidity", avgExec: 9.1, p95: 16.2, p99: 23.8 },
    { bot: "Theta Hedging", avgExec: 11.3, p95: 19.4, p99: 25.6 }
  ];

  const networkLatency = Array.from({ length: 50 }, (_, i) => ({
    time: i,
    binance: 8 + Math.random() * 3,
    coinbase: 12 + Math.random() * 4,
    kraken: 15 + Math.random() * 5
  }));

  return (
    <div className="h-full flex flex-col gap-3 p-3 overflow-y-auto">
      <div className="grid grid-cols-4 gap-3">
        <GlassPanel neonBorder="cyan" className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-[#00D9FF]" />
            <span className="text-xs text-white/40 font-mono">AVG LATENCY</span>
          </div>
          <div className="text-2xl text-[#00D9FF]">{systemMetrics.avgLatency}ms</div>
          <div className="text-xs text-white/40 mt-1">P50: {systemMetrics.p50Latency}ms</div>
        </GlassPanel>

        <GlassPanel neonBorder="blue" className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-[#22C55E]" />
            <span className="text-xs text-white/40 font-mono">UPTIME</span>
          </div>
          <div className="text-2xl text-[#22C55E]">{systemMetrics.uptime}%</div>
          <div className="text-xs text-white/40 mt-1">47h 23m 15s</div>
        </GlassPanel>

        <GlassPanel neonBorder="purple" className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-[#8B5CF6]" />
            <span className="text-xs text-white/40 font-mono">REQ/SEC</span>
          </div>
          <div className="text-2xl text-[#8B5CF6]">{systemMetrics.requestsPerSecond.toLocaleString()}</div>
          <div className="text-xs text-white/40 mt-1">{(systemMetrics.totalRequests / 1000000).toFixed(1)}M total</div>
        </GlassPanel>

        <GlassPanel neonBorder="none" className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-[#F59E0B]" />
            <span className="text-xs text-white/40 font-mono">ERROR RATE</span>
          </div>
          <div className="text-2xl text-white/90">{systemMetrics.errorRate}%</div>
          <div className="text-xs text-[#22C55E] mt-1">Within SLA</div>
        </GlassPanel>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <GlassPanel neonBorder="blue" className="p-4">
          <h3 className="text-xs font-mono text-white/60 tracking-wider mb-4">LATENCY BREAKDOWN - REAL-TIME</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={latencyMetrics}>
                <defs>
                  <linearGradient id="colorExchange" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00D9FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00D9FF" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorNetwork" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExecution" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="time" stroke="#ffffff30" style={{ fontSize: 10 }} />
                <YAxis stroke="#ffffff30" style={{ fontSize: 10 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(20, 20, 25, 0.95)', 
                    border: '1px solid rgba(0, 217, 255, 0.3)',
                    borderRadius: '8px',
                    fontSize: '11px'
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Area type="monotone" dataKey="exchange" stroke="#00D9FF" fill="url(#colorExchange)" strokeWidth={2} name="Exchange" />
                <Area type="monotone" dataKey="network" stroke="#0EA5E9" fill="url(#colorNetwork)" strokeWidth={2} name="Network" />
                <Area type="monotone" dataKey="execution" stroke="#8B5CF6" fill="url(#colorExecution)" strokeWidth={2} name="Execution" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassPanel>

        <GlassPanel neonBorder="purple" className="p-4">
          <h3 className="text-xs font-mono text-white/60 tracking-wider mb-4">EXCHANGE LATENCY COMPARISON</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={networkLatency}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis stroke="#ffffff30" style={{ fontSize: 10 }} />
                <YAxis stroke="#ffffff30" style={{ fontSize: 10 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(20, 20, 25, 0.95)', 
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    borderRadius: '8px',
                    fontSize: '11px'
                  }}
                />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Line type="monotone" dataKey="binance" stroke="#F59E0B" strokeWidth={2} dot={false} name="Binance" />
                <Line type="monotone" dataKey="coinbase" stroke="#00D9FF" strokeWidth={2} dot={false} name="Coinbase" />
                <Line type="monotone" dataKey="kraken" stroke="#8B5CF6" strokeWidth={2} dot={false} name="Kraken" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassPanel>
      </div>

      <GlassPanel neonBorder="cyan" className="p-4">
        <h3 className="text-xs font-mono text-white/60 tracking-wider mb-4">BOT EXECUTION SPEED ANALYSIS</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={executionSpeed} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis type="number" stroke="#ffffff30" style={{ fontSize: 10 }} />
              <YAxis dataKey="bot" type="category" stroke="#ffffff30" style={{ fontSize: 10 }} width={120} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(20, 20, 25, 0.95)', 
                  border: '1px solid rgba(0, 217, 255, 0.3)',
                  borderRadius: '8px',
                  fontSize: '11px'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px' }} />
              <Bar dataKey="avgExec" fill="#00D9FF" radius={[0, 4, 4, 0]} name="Avg (ms)" />
              <Bar dataKey="p95" fill="#0EA5E9" radius={[0, 4, 4, 0]} name="P95 (ms)" />
              <Bar dataKey="p99" fill="#8B5CF6" radius={[0, 4, 4, 0]} name="P99 (ms)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </GlassPanel>

      <div className="grid grid-cols-3 gap-3">
        <GlassPanel neonBorder="cyan" className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Server className="w-4 h-4 text-[#00D9FF]" />
            <h3 className="text-xs font-mono text-white/60 tracking-wider">LATENCY PERCENTILES</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded">
              <span className="text-sm text-white/60">P50 (Median)</span>
              <span className="text-sm text-[#22C55E] font-mono">{systemMetrics.p50Latency}ms</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded">
              <span className="text-sm text-white/60">P95</span>
              <span className="text-sm text-[#F59E0B] font-mono">{systemMetrics.p95Latency}ms</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded">
              <span className="text-sm text-white/60">P99</span>
              <span className="text-sm text-[#FF2D55] font-mono">{systemMetrics.p99Latency}ms</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#00D9FF]/[0.05] border border-[#00D9FF]/20 rounded">
              <span className="text-sm text-white/90">Average</span>
              <span className="text-sm text-[#00D9FF] font-mono">{systemMetrics.avgLatency}ms</span>
            </div>
          </div>
        </GlassPanel>

        <GlassPanel neonBorder="blue" className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Wifi className="w-4 h-4 text-[#0EA5E9]" />
            <h3 className="text-xs font-mono text-white/60 tracking-wider">CONNECTION STATUS</h3>
          </div>
          <div className="space-y-2">
            {[
              { exchange: "Binance", status: "online" as const, latency: 8.2, uptime: 100 },
              { exchange: "Coinbase", status: "online" as const, latency: 12.4, uptime: 99.98 },
              { exchange: "Kraken", status: "online" as const, latency: 15.1, uptime: 99.95 },
              { exchange: "FTX", status: "warning" as const, latency: 28.3, uptime: 98.5 }
            ].map((conn) => (
              <div key={conn.exchange} className="p-3 bg-white/[0.02] border border-white/[0.06] rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/70">{conn.exchange}</span>
                  <div className={`w-2 h-2 rounded-full ${
                    conn.status === 'online' ? 'bg-[#22C55E] shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 
                    'bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                  }`} />
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white/40">LAT: <span className="text-[#00D9FF]">{conn.latency}ms</span></span>
                  <span className="text-white/40">UP: <span className="text-white/70">{conn.uptime}%</span></span>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel neonBorder="purple" className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-[#8B5CF6]" />
            <h3 className="text-xs font-mono text-white/60 tracking-wider">SYSTEM RESOURCES</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/60">CPU Usage</span>
                <span className="text-sm text-white/90 font-mono">34%</span>
              </div>
              <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9]" style={{ width: '34%' }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/60">Memory</span>
                <span className="text-sm text-white/90 font-mono">2.3 GB</span>
              </div>
              <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]" style={{ width: '58%' }} />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-white/60">Network I/O</span>
                <span className="text-sm text-white/90 font-mono">145 MB/s</span>
              </div>
              <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#22C55E] to-[#16A34A]" style={{ width: '72%' }} />
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06]">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white/40">Active Threads</span>
                <span className="text-white/70">24</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono mt-1">
                <span className="text-white/40">Queue Depth</span>
                <span className="text-white/70">142</span>
              </div>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
