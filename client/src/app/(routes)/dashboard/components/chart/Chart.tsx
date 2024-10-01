"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", won: 152300, losted: 3500 },
  { month: "February", won: 167478, losted: 2500 },
  { month: "March", won: 182345, losted: 42567 },
  { month: "April", won: 197412, losted: 1200 },
  { month: "May", won: 202378, losted: 75235 },
  { month: "June", won: 217445, losted: 29765 },
];

const chartConfig = {
  won: {
    label: "Won",
    color: "#2563eb",
  },
  losted: {
    label: "Losted",
    color: "#f59e0b",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-[330px] w-full font-semibold text-sm dark:text-white"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={true}
          axisLine={true}
          tickMargin={10}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          labelClassName="text-white"
          content={<ChartTooltipContent />}
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="won" fill="var(--color-won)" radius={6} />
        <Bar dataKey="losted" fill="var(--color-losted)" radius={6} />
      </BarChart>
    </ChartContainer>
  );
}
