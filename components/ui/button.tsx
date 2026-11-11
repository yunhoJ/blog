import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] font-semibold transition-colors disabled:pointer-events-none disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-brand-focus-ring",
  {
    variants: {
      variant: {
        default: "bg-brand-subtle text-brand-on-subtle hover:bg-brand-subtle-hover hover:text-brand-on-subtle-hover active:bg-brand-subtle-pressed active:text-brand-on-subtle-hover disabled:bg-brand-surface-2 disabled:text-brand-disabled-text",
        secondary: "bg-brand-surface-2 text-brand-text hover:bg-brand-surface-3 active:bg-brand-surface-4 disabled:text-brand-disabled-text",
        outline: "border border-brand-btn-border bg-transparent text-brand-text hover:bg-brand-surface-2 active:bg-brand-surface-3 disabled:border-brand-border disabled:text-brand-disabled-text",
        ghost: "bg-transparent text-brand-text-muted hover:bg-brand-surface-2 hover:text-brand-text active:bg-brand-surface-3 disabled:text-brand-disabled-text",
        destructive: "bg-brand-danger-solid text-brand-on-danger hover:bg-brand-danger-solid hover:text-brand-on-danger hover:opacity-90 active:bg-brand-danger-solid active:text-brand-on-danger active:opacity-90 disabled:opacity-100 disabled:bg-brand-surface-2 disabled:text-brand-disabled-text",
        link: "bg-transparent text-brand-link underline-offset-4 hover:text-brand-link-hover hover:underline active:text-brand-link-hover disabled:text-brand-disabled-text",
      },
      size: {
        default: "h-10 px-4 text-[14px] leading-none has-[>svg]:px-3",
        sm: "h-8 px-3 text-[13px] leading-none gap-1.5 has-[>svg]:px-2.5",
        lg: "h-10 px-5 text-[14px] leading-none has-[>svg]:px-4",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
