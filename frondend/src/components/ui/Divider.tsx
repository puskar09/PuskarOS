import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@lib/utils'

const dividerVariants = cva('shrink-0 transition-colors', {
  variants: {
    orientation: {
      horizontal: 'w-full h-[1px]',
      vertical: 'h-full min-h-[16px] w-[1px] inline-block self-stretch',
    },
    variant: {
      default: 'bg-[#262626]',
      subtle: 'bg-[#1A1A1A]',
      glow: 'bg-gradient-to-r from-transparent via-[#ADC6FF]/30 to-transparent',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    variant: 'default',
  },
})

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  label?: React.ReactNode
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = 'horizontal', variant, label, ...props }, ref) => {
    if (label && orientation === 'horizontal') {
      return (
        <div
          className={cn(
            'flex items-center gap-3 w-full my-4 select-none',
            className
          )}
          {...props}
        >
          <div className={cn('flex-1 h-[1px]', dividerVariants({ variant }))} />
          <span className="text-xs font-mono text-[#C2C6D6]/60 uppercase tracking-widest shrink-0">
            {label}
          </span>
          <div className={cn('flex-1 h-[1px]', dividerVariants({ variant }))} />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation || 'horizontal'}
        className={cn(dividerVariants({ orientation, variant }), className)}
        {...props}
      />
    )
  }
)
Divider.displayName = 'Divider'

export { Divider, dividerVariants }
