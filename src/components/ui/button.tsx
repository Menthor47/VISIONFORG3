import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium font-heading ring-offset-background transition-cyber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80 shadow-neon hover:animate-neon-pulse",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 neon-border",
        outline: "border border-primary/50 bg-transparent hover:glass-card hover:text-primary hover:shadow-neon",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-neon hover:animate-neon-pulse",
        ghost: "hover:glass-card hover:text-primary transition-cyber",
        link: "text-primary underline-offset-4 hover:underline hover:neon-glow",
        cyber: "gradient-neon text-primary-foreground hover:animate-neon-pulse transform hover:scale-105 glass-card",
        glass: "glass-card text-foreground hover:bg-white/10 border border-white/20 hover:shadow-neon",
        neon: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground neon-border hover:animate-neon-pulse",
        hero: "gradient-cyber text-primary-foreground hover:animate-neon-pulse transform hover:scale-105 glass-card",
        accent: "bg-accent text-accent-foreground hover:bg-accent/80 shadow-neon hover:animate-neon-pulse",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
