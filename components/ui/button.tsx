import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

        variant === "primary" && "bg-orange-600 text-white hover:bg-orange-700",

        variant === "secondary" &&
          "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",

        variant === "ghost" && "text-slate-900 hover:bg-slate-100",

        size === "sm" && "h-9 px-3 text-sm",

        size === "md" && "h-11 px-5 text-base",

        size === "lg" && "h-12 px-6 text-lg",

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
