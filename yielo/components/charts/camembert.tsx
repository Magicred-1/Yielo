"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

const chartData = [
  { browser: "chrome", visitors: 10.2, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 9, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 12.1, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 7.5, fill: "var(--color-edge)" },
  { browser: "other", visitors: 9.9, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "BTC",
    color: "#802B85",
  },
  safari: {
    label: "ETH",
    color: "#9180EB",
  },
  firefox: {
    label: "DOGE",
    color: "#C84ECE",
  },
  edge: {
    label: "USDC",
    color: "#57CEE3",
  },
  other: {
    label: "Other",
    color: "#2276C5",
  },
} satisfies ChartConfig

export function Camembert() {
  // const totalVisitors = React.useMemo(() => {
  //   return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  // }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Investment Distribution</CardTitle>
        <CardDescription>Click on a pie share to see</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          +48.7%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          APR est.
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Last update 4mn ago
        </div>
      </CardFooter>
    </Card>
  )
}
