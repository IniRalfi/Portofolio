"use client";

import { ThemeProvider } from "next-themes";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function Providers({ children }: { children: React.ReactNode }) {
  useSmoothScroll();

  return (
    <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
