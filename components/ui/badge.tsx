import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
