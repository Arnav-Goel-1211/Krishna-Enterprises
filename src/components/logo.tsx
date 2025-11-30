import Image from "next/image";
import { cn } from "@/lib/utils";
import * as React from "react";
import logo from "./logo.png";

export const Logo = React.forwardRef<
  HTMLImageElement,
  Omit<React.ComponentPropsWithoutRef<typeof Image>, "src" | "alt">
>(({ className, ...props }, ref) => {
  return (
    <Image
      src={logo}
      alt="Lorikeet Inks Logo"
      width={100}
      height={100}
      className={cn(className)}
      {...props}
      ref={ref}
      unoptimized
    />
  );
});
Logo.displayName = "Logo";
