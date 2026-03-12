import { GlassPanel } from "../components/GlassPanel";
import { StatusIndicator } from "../components/StatusIndicator";
import { LiveIndicator } from "../components/LiveIndicator";
import { tradingBots, orderBookData, recentTrades, executionHistory, riskMetrics, systemEvents, strategySignals } from "../utils/mockData";
import { Play, Pause, TrendingUp, TrendingDown, Activity, AlertTriangle, Wifi } from "lucide-react";
import { LineChart, Line, AreaChart, Area, ResponsiveContainer } from "recharts";

export function MainTerminal() {
  return (
    <div className="h-full flex flex-col gap-3 p-3 overflow-hidden">
      <div className="flex-1 flex gap-3 min-h-0 overflow-hidden">
      {/* Left Sidebar - Bot Control Panel */}
      <div className="w-80 flex flex-col gap-3 overflow-y-auto">
        <GlassPanel neonBorder="cyan" className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-mono text-white/60 tracking-wider">ACTIVE BOTS</h3>
              <LiveIndicator />
            </div>
            <span className="text-xs font-mono text-[#00D9FF]">{tradingBots.filter(b => b.status === 'running').length}/5</span>
          </div>
          <div className="space-y-2">
            {tradingBots.map((bot) => (
              <div key={bot.id} className="p-3 bg-white/[0.02] border border-white/[0.06] rounded hover:bg-white/[0.04] transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="text-sm text-white/90 mb-0.5">{bot.name}</div>
                    <div className="text-xs text-white/40 font-mono">{bot.strategy}</div>
                  </div>
                  <button className={`w-6 h-6 rounded flex items-center justify-center ${bot.status === 'running' ? 'bg-[#22C55E]/10 border border-[#22C55E]/30' : 'bg-white/[0.05] border border-white/[0.1]'}`}>
                    {bot.status === 'running' ? <Pause className="w-3 h-3 text-[#22C55E]" /> : <Play className="w-3 h-3 text-white/40" />}
                  </button>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <StatusIndicator status={bot.health} />
                  <div className={`text-sm font-mono ${bot.pnl >= 0 ? 'text-[#22C55E]' : 'text-[#FF2D55]'} flex items-center gap-1`}>
                    {bot.pnl >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    ${Math.abs(bot.pnl).toLocaleString()}
                  </div>
                </div>

                <div className="h-8 mb-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={bot.sparklineData.map((v, i) => ({ value: v }))}>
                      <Line type="monotone" dataKey="value" stroke={bot.pnl >= 0 ? "#22C55E" : "#FF2D55"} strokeWidth={1.5} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div>
                    <span className="text-white/40">CPU:</span> <span className="text-white/70">{bot.cpu}%</span>
                  </div>
                  <div>
                    <span className="text-white/40">LAT:</span> <span className="text-white/70">{bot.latency}ms</span>
                  </div>
                  <div>
                    <span className="text-white/40">TRADES:</span> <span className="text-white/70">{bot.trades}</span>
                  </div>
                  <div>
                    <span className="text-white/40">WIN:</span> <span className="text-white/70">{bot.winRate}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>

      {/* Center Main Panel */}
      <div className="flex-1 flex flex-col gap-3 overflow-hidden">
        {/* Upper Section - Market Data */}
        <div className="flex-1 flex gap-3 min-h-0">
          <GlassPanel neonBorder="blue" className="flex-1 p-4 flex flex-col">
            <h3 className="text-xs font-mono text-white/60 tracking-wider mb-3">ORDER BOOK - BTC/USD</h3>
            <div className="flex-1 grid grid-cols-2 gap-4 overflow-hidden">
              {/* Bids */}
              <div>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono text-white/40 mb-2 pb-2 border-b border-white/[0.06]">
                  <div>PRICE</div>
                  <div className="text-right">AMOUNT</div>
                  <div className="text-right">TOTAL</div>
                </div>
                <div className="space-y-1 overflow-y-auto">
                  {orderBookData.bids.map((bid, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 text-xs font-mono relative">
                      <div className="absolute inset-0 bg-[#22C55E]/[0.05]" style={{ width: `${(bid.amount / 5) * 100}%` }} />
                      <div className="text-[#22C55E] relative z-10">{bid.price.toFixed(2)}</div>
                      <div className="text-white/60 text-right relative z-10">{bid.amount.toFixed(3)}</div>
                      <div className="text-white/40 text-right relative z-10">{bid.total.toFixed(0)}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Asks */}
              <div>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono text-white/40 mb-2 pb-2 border-b border-white/[0.06]">
                  <div>PRICE</div>
                  <div className="text-right">AMOUNT</div>
                  <div className="text-right">TOTAL</div>
                </div>
                <div className="space-y-1 overflow-y-auto">
                  {orderBookData.asks.map((ask, i) => (
                    <div key={i} className="grid grid-cols-3 gap-2 text-xs font-mono relative">
                      <div className="absolute inset-0 bg-[#FF2D55]/[0.05]" style={{ width: `${(ask.amount / 5) * 100}%` }} />
                      <div className="text-[#FF2D55] relative z-10">{ask.price.toFixed(2)}</div>
                      <div className="text-white/60 text-right relative z-10">{ask.amount.toFixed(3)}</div>
                      <div className="text-white/40 text-right relative z-10">{ask.total.toFixed(0)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-white/40">SPREAD:</span> <span className="text-[#00D9FF]">${orderBookData.spread.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-white/40">MID:</span> <span className="text-white/90">${orderBookData.midPrice.toFixed(2)}</span>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel neonBorder="blue" className="w-80 p-4 flex flex-col">
            <h3 className="text-xs font-mono text-white/60 tracking-wider mb-3">RECENT TRADES</h3>
            <div className="flex-1 overflow-y-auto">
              <div className="space-y-1.5">
                {recentTrades.map((trade, i) => (
                  <div key={i} className="flex items-center justify-between text-xs font-mono p-2 bg-white/[0.02] rounded">
                    <div className="flex items-center gap-2">
                      <div className={`w-1 h-1 rounded-full ${trade.side === 'buy' ? 'bg-[#22C55E]' : 'bg-[#FF2D55]'}`} />
                      <span className="text-white/40">{trade.time}</span>
                    </div>
                    <div className={trade.side === 'buy' ? 'text-[#22C55E]' : 'text-[#FF2D55]'}>
                      {trade.price.toFixed(2)}
                    </div>
                    <div className="text-white/50">{trade.amount.toFixed(3)}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlassPanel>
        </div>

        {/* Lower Section - Execution Monitor */}
        <GlassPanel neonBorder="purple" className="flex-1 p-4 flex flex-col min-h-0">
          <h3 className="text-xs font-mono text-white/60 tracking-wider mb-3">EXECUTION MONITOR</h3>
          <div className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-9 gap-2 text-xs font-mono text-white/40 mb-2 pb-2 border-b border-white/[0.06]">
              <div>TIME</div>
              <div className="col-span-2">BOT</div>
              <div>SIDE</div>
              <div>SYMBOL</div>
              <div className="text-right">PRICE</div>
              <div className="text-right">AMOUNT</div>
              <div className="text-right">LAT</div>
              <div>STATUS</div>
            </div>
            <div className="space-y-1">
              {executionHistory.map((exec) => (
                <div key={exec.id} className="grid grid-cols-9 gap-2 text-xs font-mono items-center p-2 bg-white/[0.02] rounded hover:bg-white/[0.04] transition-all">
                  <div className="text-white/40">{exec.time}</div>
                  <div className="col-span-2 text-white/70">{exec.bot}</div>
                  <div className={exec.side === 'BUY' ? 'text-[#22C55E]' : 'text-[#FF2D55]'}>{exec.side}</div>
                  <div className="text-white/60">{exec.symbol}</div>
                  <div className="text-white/70 text-right">{exec.price.toFixed(2)}</div>
                  <div className="text-white/60 text-right">{exec.amount.toFixed(3)}</div>
                  <div className="text-[#00D9FF] text-right">{exec.latency}ms</div>
                  <div>
                    <span className={`px-2 py-0.5 rounded text-[10px] ${
                      exec.status === 'filled' ? 'bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/30' :
                      exec.status === 'partial' ? 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30' :
                      'bg-[#FF2D55]/10 text-[#FF2D55] border border-[#FF2D55]/30'
                    }`}>
                      {exec.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GlassPanel>
      </div>

      {/* Right Panel - System Intelligence */}
      <div className="w-80 flex flex-col gap-3 overflow-y-auto">
        {/* Risk Metrics */}
        <GlassPanel neonBorder="purple" className="p-4">
          <h3 className="text-xs font-mono text-white/60 tracking-wider mb-3">RISK METRICS</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-white/40">Total Exposure</span>
                <span className="text-white/90">${riskMetrics.totalExposure.toLocaleString()}</span>
              </div>
              <div className="h-16">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={[
                    { name: 'BTC', value: riskMetrics.btcExposure },
                    { name: 'ETH', value: riskMetrics.ethExposure },
                    { name: 'Other', value: riskMetrics.otherExposure }
                  ]}>
                    <Area type="monotone" dataKey="value" stroke="#00D9FF" fill="#00D9FF" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/40">Leverage</span>
                <span className="text-[#F59E0B]">{riskMetrics.leverage}x</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/40">Liquidation Distance</span>
                <span className="text-[#22C55E]">{riskMetrics.liquidationDistance}%</span>
              </div>
              <div className="flex justify-between text-xs font-mono">
                <span className="text-white/40">Margin Used</span>
                <span className="text-white/70">{riskMetrics.marginUsed}%</span>
              </div>
            </div>
          </div>
        </GlassPanel>

        {/* Strategy Signals */}
        <GlassPanel neonBorder="cyan" className="p-4">
          <h3 className="text-xs font-mono text-white/60 tracking-wider mb-3">STRATEGY SIGNALS</h3>
          <div className="space-y-2">
            {strategySignals.map((signal, i) => (
              <div key={i} className="p-2 bg-white/[0.02] border border-white/[0.06] rounded">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-white/70">{signal.strategy}</span>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                    signal.signal === 'BUY' ? 'bg-[#22C55E]/10 text-[#22C55E]' :
                    signal.signal === 'SELL' ? 'bg-[#FF2D55]/10 text-[#FF2D55]' :
                    'bg-white/[0.05] text-white/60'
                  }`}>
                    {signal.signal}
                  </span>
                </div>
                <div className="text-[10px] text-white/40 mb-1">{signal.reasoning}</div>
                <div className="flex items-center gap-1">
                  <div className="flex-1 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-[#00D9FF]" style={{ width: `${signal.confidence}%` }} />
                  </div>
                  <span className="text-[10px] text-white/40 font-mono">{signal.confidence}%</span>
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>

        {/* System Health */}
        <GlassPanel neonBorder="none" className="p-4">
          <h3 className="text-xs font-mono text-white/60 tracking-wider mb-3">SYSTEM HEALTH</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-white/[0.02] rounded">
              <div className="flex items-center gap-2">
                <Wifi className="w-3 h-3 text-[#22C55E]" />
                <span className="text-xs text-white/70">WebSocket</span>
              </div>
              <StatusIndicator status="online" />
            </div>
            <div className="flex items-center justify-between p-2 bg-white/[0.02] rounded">
              <div className="flex items-center gap-2">
                <Activity className="w-3 h-3 text-[#22C55E]" />
                <span className="text-xs text-white/70">Exchange Feed</span>
              </div>
              <StatusIndicator status="online" />
            </div>
            <div className="flex items-center justify-between p-2 bg-white/[0.02] rounded">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-3 h-3 text-[#F59E0B]" />
                <span className="text-xs text-white/70">Packet Loss</span>
              </div>
              <span className="text-xs text-white/40 font-mono">0.02%</span>
            </div>
          </div>
        </GlassPanel>
      </div>
      </div>

      {/* Bottom Event Log */}
      <GlassPanel className="h-24 p-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-mono text-white/60 tracking-wider">SYSTEM LOG</h3>
          <div className="flex items-center gap-2">
            <StatusIndicator status="online" showPulse={false} />
            <span className="text-xs text-white/40 font-mono">STREAMING</span>
          </div>
        </div>
        <div className="space-y-1 overflow-y-auto h-12">
          {systemEvents.map((event, i) => (
            <div key={i} className="flex items-start gap-2 text-xs font-mono">
              <span className="text-white/30">{event.time}</span>
              <span className={`
                ${event.type === 'trade' ? 'text-[#00D9FF]' :
                  event.type === 'warning' ? 'text-[#F59E0B]' :
                  event.type === 'error' ? 'text-[#FF2D55]' :
                  'text-white/60'}
              `}>
                {event.message}
              </span>
            </div>
          ))}
        </div>
      </GlassPanel>
    </div>
  );
}