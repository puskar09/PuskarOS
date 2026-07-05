import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ADC6FF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-[#E5E2E1] text-[#0A0A0A] hover:bg-white shadow-[0_0_20px_rgba(229,226,225,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]',
        accent:
          'bg-[#ADC6FF] text-[#001A42] hover:bg-[#D8E2FF] shadow-[0_0_15px_rgba(173,198,255,0.2)] hover:scale-[1.02] active:scale-[0.98]',
        secondary:
          'bg-[#1A1A1A] text-[#E5E2E1] border border-[#262626] hover:bg-[#2A2A2A] hover:border-[#333333] active:scale-[0.98]',
        outline:
          'bg-transparent border border-[#333333] text-[#E5E2E1] hover:bg-[#1A1A1A] hover:border-[#444444] active:scale-[0.98]',
        ghost:
          'bg-transparent text-[#C2C6D6] hover:bg-[#1A1A1A] hover:text-[#E5E2E1]',
        danger:
          'bg-[#93000A]/80 text-[#FFDAD6] border border-[#FFB4AB]/30 hover:bg-[#93000A] active:scale-[0.98]',
      },
      size: {
        sm: 'h-8 px-3 text-xs rounded-lg gap-1.5',
        md: 'h-10 px-4 text-sm rounded-xl gap-2',
        lg: 'h-12 px-6 text-base rounded-2xl gap-2.5',
        xl: 'h-14 px-8 text-lg rounded-full gap-3 font-semibold',
        icon: 'h-10 w-10 rounded-xl justify-center p-0',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'md',
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
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
