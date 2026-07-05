import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@lib/utils'

const pillBadgeVariants = cva(
  'inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-colors select-none shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-[#1A1A1A] text-[#E5E2E1] border border-[#262626]',
        primary:
          'bg-[#ADC6FF]/10 text-[#ADC6FF] border border-[#ADC6FF]/20',
        active:
          'bg-[#4D8EFF]/15 text-[#6BA1FF] border border-[#4D8EFF]/30 shadow-[0_0_12px_rgba(77,142,255,0.15)]',
        success:
          'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
        warning:
          'bg-amber-500/10 text-amber-400 border border-amber-500/20',
        outline:
          'bg-transparent text-[#C2C6D6] border border-[#333333]',
      },
      size: {
        sm: 'text-[11px] px-2.5 py-0.5 font-mono uppercase tracking-wider',
        md: 'text-xs px-3 py-1',
        lg: 'text-sm px-3.5 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface PillBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof pillBadgeVariants> {
  dot?: boolean
  dotPulse?: boolean
  dotColorClass?: string
  icon?: React.ReactNode
}

const PillBadge = React.forwardRef<HTMLSpanElement, PillBadgeProps>(
  (
    {
      className,
      variant,
      size,
      dot = false,
      dotPulse = false,
      dotColorClass,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    // Default dot color based on variant if not explicitly provided
    const defaultDotClass =
      dotColorClass ||
      (variant === 'primary' || variant === 'active'
        ? 'bg-[#ADC6FF]'
        : variant === 'success'
        ? 'bg-emerald-400'
        : variant === 'warning'
        ? 'bg-amber-400'
        : 'bg-[#C2C6D6]')

    return (
      <span
        ref={ref}
        className={cn(pillBadgeVariants({ variant, size }), className)}
        {...props}
      >
        {dot && (
          <span className="relative flex h-2 w-2 shrink-0">
            {dotPulse && (
              <span
                className={cn(
                  'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                  defaultDotClass
                )}
              />
            )}
            <span
              className={cn(
                'relative inline-flex rounded-full h-2 w-2',
                defaultDotClass
              )}
            />
          </span>
        )}
        {icon && <span className="shrink-0 flex items-center">{icon}</span>}
        {children && <span>{children}</span>}
      </span>
    )
  }
)
PillBadge.displayName = 'PillBadge'

export { PillBadge, pillBadgeVariants }
