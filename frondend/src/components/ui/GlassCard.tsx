import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@lib/utils'

const glassCardVariants = cva(
  'transition-all duration-200 relative overflow-hidden text-[#E5E2E1]',
  {
    variants: {
      variant: {
        default:
          'bg-[#1A1A1A]/70 backdrop-blur-xl border border-[#262626] shadow-lg',
        subtle:
          'bg-[#222222]/40 backdrop-blur-md border border-[#333333]',
        interactive:
          'bg-[#1A1A1A]/70 backdrop-blur-xl border border-[#262626] shadow-lg hover:border-[#ADC6FF]/30 hover:box-shadow-[0_0_20px_rgba(59,130,246,0.15)] cursor-pointer active:scale-[0.99]',
        ghost:
          'bg-transparent border border-[#262626]/50',
      },
      size: {
        none: 'p-0 rounded-2xl',
        sm: 'p-4 rounded-2xl',
        md: 'p-6 rounded-3xl',
        lg: 'p-8 rounded-[32px]',
      },
      glow: {
        true: 'before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#ADC6FF]/5 before:to-transparent before:pointer-events-none',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      glow: false,
    },
  }
)

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  asChild?: boolean
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, size, glow, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(glassCardVariants({ variant, size, glow }), className)}
        {...props}
      />
    )
  }
)
GlassCard.displayName = 'GlassCard'

export { GlassCard, glassCardVariants }
