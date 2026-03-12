export const tradingBots = [
  {
    id: "bot-001",
    name: "Alpha Momentum",
    strategy: "Mean Reversion",
    status: "running" as const,
    health: "online" as const,
    pnl: 12845.32,
    pnlChange: 2.4,
    trades: 1247,
    winRate: 67.3,
    cpu: 23,
    latency: 8,
    sparklineData: [100, 102, 98, 105, 108, 110, 115, 112, 118, 120, 125, 128]
  },
  {
    id: "bot-002",
    name: "Gamma Scalper",
    strategy: "Market Making",
    status: "running" as const,
    health: "online" as const,
    pnl: 8234.12,
    pnlChange: 1.8,
    trades: 3421,
    winRate: 58.2,
    cpu: 45,
    latency: 12,
    sparklineData: [100, 103, 105, 102, 108, 106, 110, 112, 108, 110, 115, 118]
  },
  {
    id: "bot-003",
    name: "Delta Arbitrage",
    strategy: "Statistical Arb",
    status: "running" as const,
    health: "warning" as const,
    pnl: -432.89,
    pnlChange: -0.5,
    trades: 542,
    winRate: 45.8,
    cpu: 67,
    latency: 24,
    sparklineData: [100, 98, 95, 92, 90, 88, 85, 87, 85, 86, 84, 82]
  },
  {
    id: "bot-004",
    name: "Theta Hedging",
    strategy: "Options Flow",
    status: "paused" as const,
    health: "offline" as const,
    pnl: 5621.45,
    pnlChange: 0.0,
    trades: 823,
    winRate: 62.1,
    cpu: 0,
    latency: 0,
    sparklineData: [100, 102, 105, 108, 110, 112, 115, 116, 118, 120, 122, 125]
  },
  {
    id: "bot-005",
    name: "Sigma Liquidity",
    strategy: "Liquidity Provision",
    status: "running" as const,
    health: "online" as const,
    pnl: 15234.67,
    pnlChange: 3.2,
    trades: 2156,
    winRate: 71.4,
    cpu: 34,
    latency: 9,
    sparklineData: [100, 105, 110, 108, 115, 118, 122, 125, 128, 132, 135, 140]
  }
];

export const orderBookData = {
  bids: [
    { price: 42156.50, amount: 2.34, total: 98726.31 },
    { price: 42156.25, amount: 1.85, total: 77989.06 },
    { price: 42156.00, amount: 3.12, total: 131526.72 },
    { price: 42155.75, amount: 0.92, total: 38783.29 },
    { price: 42155.50, amount: 4.21, total: 177474.66 },
    { price: 42155.25, amount: 2.67, total: 112554.52 },
    { price: 42155.00, amount: 1.45, total: 61124.75 },
    { price: 42154.75, amount: 3.89, total: 163982.28 }
  ],
  asks: [
    { price: 42157.00, amount: 1.23, total: 51853.11 },
    { price: 42157.25, amount: 2.45, total: 103285.26 },
    { price: 42157.50, amount: 0.87, total: 36676.93 },
    { price: 42157.75, amount: 3.56, total: 150081.59 },
    { price: 42158.00, amount: 1.92, total: 80943.36 },
    { price: 42158.25, amount: 2.78, total: 117199.94 },
    { price: 42158.50, amount: 1.34, total: 56492.39 },
    { price: 42158.75, amount: 4.12, total: 173694.05 }
  ],
  spread: 0.50,
  midPrice: 42156.75
};

export const recentTrades = [
  { time: "14:23:45.234", side: "buy" as const, price: 42156.75, amount: 0.234, exchange: "Binance" },
  { time: "14:23:45.123", side: "sell" as const, price: 42156.50, amount: 1.456, exchange: "Coinbase" },
  { time: "14:23:44.987", side: "buy" as const, price: 42156.75, amount: 0.892, exchange: "Kraken" },
  { time: "14:23:44.765", side: "buy" as const, price: 42157.00, amount: 2.145, exchange: "Binance" },
  { time: "14:23:44.543", side: "sell" as const, price: 42156.25, amount: 0.678, exchange: "FTX" },
  { time: "14:23:44.321", side: "sell" as const, price: 42156.00, amount: 1.234, exchange: "Coinbase" },
  { time: "14:23:44.098", side: "buy" as const, price: 42156.50, amount: 3.567, exchange: "Kraken" }
];

export const executionHistory = [
  { id: "exec-001", time: "14:23:45", bot: "Alpha Momentum", side: "BUY", symbol: "BTC/USD", price: 42156.50, amount: 0.245, status: "filled" as const, latency: 8, slippage: 0.02 },
  { id: "exec-002", time: "14:23:42", bot: "Gamma Scalper", side: "SELL", symbol: "ETH/USD", price: 2234.12, amount: 1.456, status: "filled" as const, latency: 12, slippage: 0.05 },
  { id: "exec-003", time: "14:23:38", bot: "Sigma Liquidity", side: "BUY", symbol: "BTC/USD", price: 42155.25, amount: 0.892, status: "filled" as const, latency: 9, slippage: 0.01 },
  { id: "exec-004", time: "14:23:35", bot: "Alpha Momentum", side: "SELL", symbol: "SOL/USD", price: 98.45, amount: 12.345, status: "partial" as const, latency: 15, slippage: 0.08 },
  { id: "exec-005", time: "14:23:32", bot: "Delta Arbitrage", side: "BUY", symbol: "BTC/USD", price: 42154.75, amount: 0.567, status: "cancelled" as const, latency: 24, slippage: 0.0 },
  { id: "exec-006", time: "14:23:28", bot: "Gamma Scalper", side: "BUY", symbol: "ETH/USD", price: 2233.89, amount: 2.134, status: "filled" as const, latency: 11, slippage: 0.03 }
];

export const riskMetrics = {
  totalExposure: 245678.45,
  btcExposure: 145234.12,
  ethExposure: 78234.56,
  otherExposure: 22209.77,
  leverage: 2.4,
  liquidationDistance: 18.5,
  marginUsed: 62.3,
  availableMargin: 37.7
};

export const systemEvents = [
  { time: "14:23:45", type: "trade" as const, message: "Alpha Momentum executed BUY 0.245 BTC @ 42156.50" },
  { time: "14:23:42", type: "trade" as const, message: "Gamma Scalper executed SELL 1.456 ETH @ 2234.12" },
  { time: "14:23:40", type: "info" as const, message: "WebSocket connection stable - Binance feed latency 8ms" },
  { time: "14:23:38", type: "trade" as const, message: "Sigma Liquidity executed BUY 0.892 BTC @ 42155.25" },
  { time: "14:23:35", type: "warning" as const, message: "Delta Arbitrage: High CPU usage detected (67%)" },
  { time: "14:23:32", type: "error" as const, message: "Order cancelled - insufficient liquidity" },
  { time: "14:23:30", type: "info" as const, message: "Market data stream reconnected - Coinbase" }
];

export const priceHistory = Array.from({ length: 60 }, (_, i) => ({
  time: `14:${String(23 - Math.floor(i / 12)).padStart(2, '0')}`,
  price: 42156 + Math.sin(i * 0.3) * 50 + Math.random() * 20,
  volume: 100 + Math.random() * 50
})).reverse();

export const strategySignals = [
  { time: "14:23:45", strategy: "Alpha Momentum", signal: "BUY", confidence: 87, reasoning: "RSI oversold + volume spike detected" },
  { time: "14:23:42", strategy: "Gamma Scalper", signal: "SELL", confidence: 72, reasoning: "Order book imbalance favors sellers" },
  { time: "14:23:38", strategy: "Sigma Liquidity", signal: "BUY", confidence: 91, reasoning: "Positive funding rate arbitrage opportunity" },
  { time: "14:23:35", strategy: "Delta Arbitrage", signal: "HOLD", confidence: 45, reasoning: "Spread too narrow, waiting for entry" }
];

export const latencyMetrics = Array.from({ length: 30 }, (_, i) => ({
  time: `14:${String(23 - Math.floor(i / 6)).padStart(2, '0')}`,
  exchange: 8 + Math.random() * 4,
  network: 12 + Math.random() * 6,
  execution: 3 + Math.random() * 2,
  total: 23 + Math.random() * 12
})).reverse();
