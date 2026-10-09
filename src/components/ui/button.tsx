import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "orange"
    | "teal"
    | "olive"
    | "glass";
  size?: "default" | "sm" | "lg" | "xl" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer";

    const variantStyles = {
      default:
        "bg-[#053225] text-[#F5EFED] hover:bg-[#084333] shadow-md shadow-[#053225]/20 focus-visible:ring-[#053225]",
      secondary:
        "bg-[#F5EFED] text-[#053225] hover:bg-[#eee4e1] border border-[#e3d5d1] focus-visible:ring-[#053225]",
      outline:
        "border-2 border-[#053225] text-[#053225] bg-transparent hover:bg-[#053225]/5 focus-visible:ring-[#053225]",
      ghost:
        "text-[#053225] hover:bg-[#053225]/10 focus-visible:ring-[#053225]",
      orange:
        "bg-[#D96C06] text-white hover:bg-[#f57d0a] shadow-lg shadow-[#D96C06]/30 hover:shadow-[#D96C06]/50 focus-visible:ring-[#D96C06]",
      teal:
        "bg-[#2292A4] text-white hover:bg-[#2da7bb] shadow-lg shadow-[#2292A4]/30 focus-visible:ring-[#2292A4]",
      olive:
        "bg-[#BDBF09] text-[#053225] hover:bg-[#d6d81e] shadow-md shadow-[#BDBF09]/30 focus-visible:ring-[#BDBF09]",
      glass:
        "bg-white/80 backdrop-blur-md text-[#053225] border border-white/50 hover:bg-white shadow-md focus-visible:ring-[#053225]",
    };

    const sizeStyles = {
      default: "h-11 px-5 py-2.5",
      sm: "h-9 rounded-xl px-3.5 text-xs",
      lg: "h-13 rounded-2xl px-7 text-base font-bold",
      xl: "h-14 rounded-2xl px-8 text-lg font-bold",
      icon: "h-11 w-11 rounded-2xl",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
