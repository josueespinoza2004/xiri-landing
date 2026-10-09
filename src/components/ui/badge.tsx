import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "orange" | "teal" | "olive" | "dark";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#053225]/10 text-[#053225] border-[#053225]/20",
    secondary: "bg-[#F5EFED] text-[#053225] border-[#e3d5d1]",
    outline: "text-[#053225] border-[#053225]/30 bg-transparent",
    orange: "bg-[#D96C06]/15 text-[#D96C06] border-[#D96C06]/30 font-semibold",
    teal: "bg-[#2292A4]/15 text-[#2292A4] border-[#2292A4]/30 font-semibold",
    olive: "bg-[#BDBF09]/20 text-[#6f7004] border-[#BDBF09]/40 font-semibold",
    dark: "bg-[#053225] text-[#F5EFED] border-transparent font-semibold",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
