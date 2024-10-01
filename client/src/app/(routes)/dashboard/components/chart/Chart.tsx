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
  { month: "January", money: 152300, lost: 3500 },
  { month: "February", money: 167478, lost: 2500 },
  { month: "March", money: 182345, lost: 42567 },
  { month: "April", money: 197412, lost: 1200 },
  { month: "May", money: 202378, lost: 75235 },
  { month: "June", money: 217445, lost: 29765 },
];

const chartConfig = {
  money: {
    label: "Money",
    color: "#2563eb",
  },
  lost: {
    label: "Lost",
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
        <Bar dataKey="money" fill="var(--color-money)" radius={6} />
        <Bar dataKey="lost" fill="var(--color-lost)" radius={6} />
      </BarChart>
    </ChartContainer>
  );
}
