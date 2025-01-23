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
  {
    name: "Wemby",
    points: 21.4,
    rebounds: 10.6,
    assists: 3.9,
    steals: 1.2,
    blocks: 3.6,
    threes: 1.8,
  },
  {
    name: "Lebron",
    points: 25.7,
    rebounds: 7.3,
    assists: 8.3,
    steals: 1.3,
    blocks: 0.5,
    threes: 2.1,
  },
  {
    name: "Jokic",
    points: 26.4,
    rebounds: 12.4,
    assists: 9.0,
    steals: 1.4,
    blocks: 0.9,
    threes: 1.1,
  },
  {
    name: "Steph",
    points: 26.4,
    rebounds: 4.5,
    assists: 5.1,
    steals: 0.7,
    blocks: 0.4,
    threes: 4.8,
  },
  {
    name: "Harden",
    points: 16.6,
    rebounds: 5.1,
    assists: 8.5,
    steals: 1.1,
    blocks: 0.8,
    threes: 2.6,
  },
  {
    name: "Luka",
    points: 33.9,
    rebounds: 9.2,
    assists: 9.8,
    steals: 1.4,
    blocks: 0.5,
    threes: 4.1,
  },
];

const chartConfig = {
  points: {
    label: "Points",
    color: "hsl(var(--chart-1))",
  },
  rebounds: {
    label: "Rebounds",
    color: "hsl(var(--chart-2))",
  },
  assists: {
    label: "Assists",
    color: "hsl(var(--chart-3))",
  },
  steals: {
    label: "Steals",
    color: "hsl(var(--chart-4))",
  },
  blocks: {
    label: "Blocks",
    color: "hsl(var(--chart-5))",
  },
  threes: {
    label: "Threes",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig;

export const description = "A stacked bar chart with NBA player stats";

export function NbaChartPG() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          className="tracking-tighter md:tracking-tight"
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              indicator="line"
              formatter={(value, name, item, index) => (
                <>
                  <div
                    className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                    style={
                      {
                        "--color-bg": `var(--color-${name})`,
                      } as React.CSSProperties
                    }
                  />
                  {chartConfig[name as keyof typeof chartConfig]?.label || name}
                  <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                    {value}
                  </div>
                  {/* Add this after the last item */}
                  {index === 5 && (
                    <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                      Average
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {Math.floor(
                          (item.payload.points +
                            item.payload.rebounds +
                            item.payload.assists +
                            item.payload.steals +
                            item.payload.blocks +
                            item.payload.threes) /
                            6,
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}
            />
          }
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="points"
          fill="var(--color-points)"
          stackId="a"
          radius={[0, 0, 4, 4]}
        />
        <Bar
          dataKey="rebounds"
          fill="var(--color-rebounds)"
          stackId="a"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="assists"
          fill="var(--color-assists)"
          stackId="a"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="steals"
          fill="var(--color-steals)"
          stackId="a"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="blocks"
          fill="var(--color-blocks)"
          stackId="a"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="threes"
          fill="var(--color-threes)"
          stackId="a"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
}
