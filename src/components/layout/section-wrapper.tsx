import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Tambah padding vertikal besar (default: true) */
  spacing?: boolean;
};

export function SectionWrapper({ children, className, id, spacing = true }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full max-w-5xl mx-auto px-6 md:px-12",
        spacing && "py-20 md:py-28",
        className,
      )}
    >
      {children}
    </section>
  );
}
