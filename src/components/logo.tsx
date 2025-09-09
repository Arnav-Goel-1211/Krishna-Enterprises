import { cn } from "@/lib/utils";
import * as React from "react";

export const Logo = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("lucide lucide-feather", className)}
        {...props}
      >
        <title>Lorikeet Inks Logo</title>
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <path d="M16 8L2 22" />
        <path d="M17.5 15H9" />
      </svg>
    );
  }
);
Logo.displayName = "Logo";
