import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const commonStyles = {
  flex: " flex justify-center align-middle items-center gap-4",
};

const containerVariants = cva("", {
  variants: {
    variant: {
      "float-to-center": "h-auto w-auto".concat(commonStyles.flex),
      hero: "min-h-screen w-100".concat(commonStyles.flex),
      half: "w-1/2 h-100 w-100 min-h-screen flex-grow min-h-screen".concat(
        commonStyles.flex
      ),
    },
  },
  defaultVariants: {},
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ asChild = false, className, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        className={cn(containerVariants({ className, variant }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Container, containerVariants };
