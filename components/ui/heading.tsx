import { cn } from "@/lib/utils";

type HeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function Heading({ title, description, align = "left" }: HeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center")}>
      <h2 className="text-4xl font-bold">{title}</h2>

      {description && <p className="mt-4 text-slate-600">{description}</p>}
    </div>
  );
}
