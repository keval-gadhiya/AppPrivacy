import * as React from "react";
import Image from "next/image";
import appIcon from "@/assets/app-icon.png";
import { cn } from "@/lib/utils";

/**
 * Decision Journal app icon (the real App Store artwork).
 * The PNG already carries its own rounded-tile shape with transparent corners,
 * so we don't clip it. Callers pass a `drop-shadow` filter via `className` to
 * give the tile definition against whatever background it sits on.
 */
export function AppIcon({
  className,
  size = 88,
  priority = false,
}: {
  className?: string;
  size?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src={appIcon}
      alt="Decision Journal app icon"
      width={size}
      height={size}
      priority={priority}
      sizes={`${size}px`}
      className={cn("select-none", className)}
    />
  );
}
