import { GlassPanel } from "../components/GlassPanel";
import { priceHistory } from "../utils/mockData";
import { TrendingUp, TrendingDown, Activity, BarChart3, Brain, Sparkles } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, ComposedChart } from "recharts";

export function StrategyResearch() {
  const backtestResults = {
    totalReturn: 24.5,
    sharpeRatio: 2.34,
    maxDrawdown: -8.2,
    winRate: 68.5,
    totalTrades: 1547,
    avgWin: 145.32,
    avgLoss: -87.45,
    profitFactor: 2.12
  };

  const correlationData = [
    { asset: "BTC/USD", correlation: 1.00, volatility: 3.2 },
    { asset: "ETH/USD", correlation: 0.87, volatility: 4.1 },
    { asset: "SOL/USD", correlation: 0.72, volatility: 5.8 },
    { asset: "BNB/USD", correlation: 0.65, volatility: 3.9 },
    { asset: "ADA/USD", correlation: 0.58, volatility: 4.5 }
  ];

  const factorExposure = [
    { factor: "Momentum", exposure: 0.65, color: "#00D9FF" },
    { factor: "Mean Reversion", exposure: 0.42, color: "#0EA5E9" },
    { factor: "Volatility", exposure: -0.23, color: "#8B5CF6" },
    { factor: "Liquidity", exposure: 0.38, color: "#22C55E" },
    { factor: "Sentiment", exposure: 0.15, color: "#F59E0B" }
  ];

  return (
    <div className="h-full flex gap-3 p-3 overflow-y-auto">
      <div className="flex-1 flex flex-col gap-3">
        <div className="grid grid-cols-4 gap-3">
          <GlassPanel neonBorder="cyan" className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-[#22C55E]" />
              <span className="text-xs text-white/40 font-mono">TOTAL RETURN</span>
            </div>
            <div className="text-2xl text-[#22C55E]">+{backtestResults.totalReturn}%</div>
          </GlassPanel>

          <GlassPanel neonBorder="blue" className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-xs text-white/40 font-mono">SHARPE RATIO</span>
            </div>
            <div className="text-2xl text-white/90">{backtestResults.sharpeRatio}</div>
          </GlassPanel>

          <GlassPanel neonBorder="purple" className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-4 h-4 text-[#FF2D55]" />
              <span className="text-xs text-white/40 font-mono">MAX DRAWDOWN</span>
            </div>
            <div className="text-2xl text-[#FF2D55]">{backtestResults.maxDrawdown}%</div>
          </GlassPanel>

          <GlassPanel neonBorder="none" className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-xs text-white/40 font-mono">WIN RATE</span>
            </div>
            <div className="text-2xl text-white/90">{backtestResults.winRate}%</div>
          </GlassPanel>
        </div>

        <GlassPanel neonBorder="blue" className="p-4 flex-1">
          <h3 className="text-xs font-mono text-white/60 tracking-wider mb-4">EQUITY CURVE - BACKTEST RESULTS</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={priceHistory.map((p, i) => ({ 
                time: p.time, 
                equity: 100000 + (i * 420) + Math.sin(i * 0.2) * 5000 
              }))}>
                <defs>
                  <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00D9FF" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#00D9FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="time" 
                  stroke="#ffffff30" 
                  style={{ fontSize: 10 }}
                  interval={10}
                />
                <YAxis 
                  stroke="#ffffff30" 
                  style={{ fontSize: 10 }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(20, 20, 25, 0.95)', 
                    border: '1px solid rgba(0, 217, 255, 0.3)',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Equity']}
                />
                <Area 
                  type="monotone" 
                  dataKey="equity" 
                  stroke="#00D9FF" 
                  fillOpacity={1} 
                  fill="url(#colorEquity)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassPanel>

        <div className="grid grid-cols-2 gap-3">
          <GlassPanel neonBorder="purple" className="p-4">
            <h3 className="text-xs font-mono text-white/60 tracking-wider mb-4">TRADE DISTRIBUTION</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { range: '<-10%', count: 12 },
                  { range: '-10-5%', count: 45 },
                  { range: '-5-0%', count: 234 },
                  { range: '0-5%', count: 567 },
                  { range: '5-10%', count: 456 },
                  { range: '>10%', count: 233 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="range" stroke="#ffffff30" style={{ fontSize: 10 }} />
                  <YAxis stroke="#ffffff30" style={{ fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(20, 20, 25, 0.95)', 
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Bar dataKey="count" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassPanel>

          <GlassPanel neonBorder="cyan" className="p-4">
            <h3 className="text-xs font-mono text-white/60 tracking-wider mb-4">MONTHLY RETURNS</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { month: 'Jan', return: 5.2 },
                  { month: 'Feb', return: -2.1 },
                  { month: 'Mar', return: 8.4 },
                  { month: 'Apr', return: 3.7 },
                  { month: 'May', return: -1.5 },
                  { month: 'Jun', return: 6.8 },
                  { month: 'Jul', return: 4.2 },
                  { month: 'Aug', return: -0.8 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" stroke="#ffffff30" style={{ fontSize: 10 }} />
                  <YAxis stroke="#ffffff30" style={{ fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(20, 20, 25, 0.95)', 
                      border: '1px solid rgba(0, 217, 255, 0.3)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Bar 
                    dataKey="return" 
                    fill="#00D9FF" 
                    radius={[4, 4, 0, 0]}
                    style={(data: any) => ({ fill: data.return >= 0 ? '#22C55E' : '#FF2D55' })}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassPanel>
        </div>
      </div>

      <div className="w-96 flex flex-col gap-3">
        <GlassPanel neonBorder="purple" className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-4 h-4 text-[#8B5CF6]" />
            <h3 className="text-xs font-mono text-white/60 tracking-wider">FACTOR EXPOSURE</h3>
          </div>
          <div className="space-y-3">
            {factorExposure.map((factor) => (
              <div key={factor.factor}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-white/70">{factor.factor}</span>
                  <span className="text-xs text-white/90 font-mono">{factor.exposure > 0 ? '+' : ''}{factor.exposure.toFixed(2)}</span>
                </div>
                <div className="relative h-2 bg-white/[0.05] rounded-full overflow-hidden">
                  <div 
                    className="absolute h-full transition-all"
                    style={{ 
                      backgroundColor: factor.color,
                      width: `${Math.abs(factor.exposure) * 100}%`,
                      left: factor.exposure < 0 ? `${50 - Math.abs(factor.exposure) * 50}%` : '50%',
                      opacity: 0.6
                    }}
                  />
                  <div className="absolute inset-y-0 left-1/2 w-px bg-white/20" />
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel neonBorder="cyan" className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#00D9FF]" />
            <h3 className="text-xs font-mono text-white/60 tracking-wider">ASSET CORRELATION</h3>
          </div>
          <div className="space-y-2">
            {correlationData.map((asset) => (
              <div key={asset.asset} className="p-3 bg-white/[0.02] border border-white/[0.06] rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/70 font-mono">{asset.asset}</span>
                  <span className="text-sm text-white/90 font-mono">{asset.correlation.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#00D9FF] to-[#0EA5E9]" 
                      style={{ width: `${asset.correlation * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-white/40 font-mono">σ {asset.volatility}%</span>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel neonBorder="blue" className="p-4">
          <h3 className="text-xs font-mono text-white/60 tracking-wider mb-4">PERFORMANCE METRICS</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded">
              <span className="text-sm text-white/60">Total Trades</span>
              <span className="text-sm text-white/90 font-mono">{backtestResults.totalTrades}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded">
              <span className="text-sm text-white/60">Avg Win</span>
              <span className="text-sm text-[#22C55E] font-mono">${backtestResults.avgWin}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded">
              <span className="text-sm text-white/60">Avg Loss</span>
              <span className="text-sm text-[#FF2D55] font-mono">${backtestResults.avgLoss}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded">
              <span className="text-sm text-white/60">Profit Factor</span>
              <span className="text-sm text-white/90 font-mono">{backtestResults.profitFactor}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-[#00D9FF]/[0.05] border border-[#00D9FF]/20 rounded">
              <span className="text-sm text-white/90">Expectancy</span>
              <span className="text-sm text-[#00D9FF] font-mono">$58.42</span>
            </div>
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}
