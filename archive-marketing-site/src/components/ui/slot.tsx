import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Minimal Slot: merges its own props onto a single child element instead of
 * rendering a wrapper. We intentionally do not forward a ref — every call site
 * renders a plain anchor/Link that needs no imperative handle, and manufacturing
 * a ref here would leak into the RSC payload of server-rendered call sites.
 */
export const Slot = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ children, ...slotProps }, _ref) => {
    if (!React.isValidElement(children)) {
      return null;
    }

    const child = children as React.ReactElement<Record<string, unknown>>;
    const childProps = child.props;

    return React.cloneElement(child, {
      ...slotProps,
      ...childProps,
      className: cn(
        slotProps.className as string | undefined,
        childProps.className as string | undefined
      ),
    });
  }
);
Slot.displayName = "Slot";
