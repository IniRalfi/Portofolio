import { cn } from "@/lib/utils";

type TextProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

/** Heading utama — DM Sans, berat, editorial */
export function Heading({ children, className, as: Tag = "h1" }: TextProps) {
  return (
    <Tag className={cn("font-bold leading-tight tracking-tight text-[--color-primary]", className)}>
      {children}
    </Tag>
  );
}

/** Teks body standar */
export function Body({ children, className, as: Tag = "p" }: TextProps) {
  return (
    <Tag className={cn("text-base leading-relaxed text-[--color-muted]", className)}>
      {children}
    </Tag>
  );
}

/** Label kecil — uppercase tracking lebar */
export function Label({ children, className, as: Tag = "span" }: TextProps) {
  return (
    <Tag
      className={cn(
        "text-xs font-medium uppercase tracking-widest text-[--color-muted]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Accent script — Caveat font, hanya untuk highlight */
export function ScriptText({ children, className, as: Tag = "span" }: TextProps) {
  return <Tag className={cn("font-script text-[--color-primary]", className)}>{children}</Tag>;
}
