import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "scale-in";
}

export default function Reveal({ children, className = "" }: RevealProps) {
  return <div className={className}>{children}</div>;
}
