import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@lib/utils'

const progressBarVariants = cva(
  'w-full bg-[#1A1A1A] rounded-full overflow-hidden border border-[#262626] relative',
  {
    variants: {
      size: {
        sm: 'h-1.5',
        md: 'h-2',
        lg: 'h-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const progressFillVariants = cva(
  'h-full rounded-full transition-all duration-500 ease-out relative',
  {
    variants: {
      variant: {
        default:
          'bg-[#ADC6FF] shadow-[0_0_10px_rgba(173,198,255,0.3)]',
        accent:
          'bg-[#4D8EFF] shadow-[0_0_12px_rgba(77,142,255,0.35)]',
        success:
          'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)]',
        gradient:
          'bg-gradient-to-r from-[#4D8EFF] via-[#ADC6FF] to-[#E5E2E1] shadow-[0_0_12px_rgba(173,198,255,0.4)]',
        subtle:
          'bg-[#C2C6D6]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressBarVariants>,
    VariantProps<typeof progressFillVariants> {
  value: number
  max?: number
  showLabel?: boolean
  label?: React.ReactNode
  labelPosition?: 'top' | 'right' | 'bottom'
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      className,
      value,
      max = 100,
      size,
      variant,
      showLabel = false,
      label,
      labelPosition = 'top',
      ...props
    },
    ref
  ) => {
    const clampedValue = Math.min(Math.max(0, value), max)
    const percentage = Math.round((clampedValue / max) * 100)

    const labelContent = (
      <div className="flex justify-between items-center text-xs font-mono text-[#C2C6D6] mb-1.5">
        <span>{label}</span>
        <span className="text-[#ADC6FF] font-medium">{percentage}%</span>
      </div>
    )

    return (
      <div className={cn('w-full', className)} {...props}>
        {showLabel && labelPosition === 'top' && labelContent}

        <div className="flex items-center gap-3">
          <div
            ref={ref}
            role="progressbar"
            aria-valuenow={clampedValue}
            aria-valuemin={0}
            aria-valuemax={max}
            className={cn(progressBarVariants({ size }))}
          >
            <div
              className={cn(progressFillVariants({ variant }))}
              style={{ width: `${percentage}%` }}
            >
              {/* Subtle top gloss reflection matching Mission Briefing */}
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 pointer-events-none rounded-full" />
            </div>
          </div>

          {showLabel && labelPosition === 'right' && (
            <span className="text-xs font-mono text-[#ADC6FF] font-medium shrink-0 min-w-[36px] text-right">
              {percentage}%
            </span>
          )}
        </div>

        {showLabel && labelPosition === 'bottom' && (
          <div className="flex justify-between items-center text-xs font-mono text-[#C2C6D6] mt-1.5">
            <span>{label}</span>
            <span className="text-[#ADC6FF] font-medium">{percentage}%</span>
          </div>
        )}
      </div>
    )
  }
)
ProgressBar.displayName = 'ProgressBar'

export { ProgressBar, progressBarVariants, progressFillVariants }
