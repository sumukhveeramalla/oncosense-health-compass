
import * as React from "react"

import { cn } from "@/lib/utils"

// Chart Container
interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative", className)}
      {...props}
    />
  )
)
ChartContainer.displayName = "ChartContainer"

// Chart Tooltip
interface ChartTooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  visible?: boolean
}

const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(
  ({ className, visible = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 pointer-events-none opacity-0 transition-opacity",
        visible && "opacity-100",
        className
      )}
      {...props}
    />
  )
)
ChartTooltip.displayName = "ChartTooltip"

// Chart Tooltip Content
interface ChartTooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    />
  )
)
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }
