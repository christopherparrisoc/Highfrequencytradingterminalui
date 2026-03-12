import { createBrowserRouter } from "react-router";
import { MainTerminal } from "./screens/MainTerminal";
import { BotManagement } from "./screens/BotManagement";
import { StrategyResearch } from "./screens/StrategyResearch";
import { PerformanceAnalytics } from "./screens/PerformanceAnalytics";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: MainTerminal },
      { path: "bots", Component: BotManagement },
      { path: "research", Component: StrategyResearch },
      { path: "analytics", Component: PerformanceAnalytics },
    ],
  },
]);
