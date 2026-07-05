import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@lib/utils'

const sectionTitleVariants = cva('font-sans tracking-tight', {
  variants: {
    size: {
      sm: 'text-base md:text-lg font-medium text-[#E5E2E1]',
      md: 'text-xl md:text-2xl font-semibold text-[#E5E2E1]',
      lg: 'text-3xl md:text-4xl font-semibold text-[#E5E2E1]',
      xl: 'text-4xl md:text-5xl font-bold text-[#E5E2E1] tracking-tighter',
    },
    variant: {
      default: 'text-[#E5E2E1]',
      gradient:
        'bg-gradient-to-r from-[#E5E2E1] via-[#ADC6FF] to-[#4D8EFF] bg-clip-text text-transparent',
      muted: 'text-[#C2C6D6]',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
})

export interface SectionTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof sectionTitleVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  subtitle?: React.ReactNode
  badge?: React.ReactNode
  action?: React.ReactNode
}

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  (
    {
      className,
      size,
      variant,
      as: Comp = 'h2',
      subtitle,
      badge,
      action,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('flex flex-col gap-1.5 w-full', className)}>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 flex-wrap">
            <Comp
              ref={ref}
              className={cn(sectionTitleVariants({ size, variant }))}
              {...props}
            >
              {children}
            </Comp>
            {badge && <div className="shrink-0">{badge}</div>}
          </div>
          {action && <div className="shrink-0 flex items-center">{action}</div>}
        </div>
        {subtitle && (
          <p className="text-sm md:text-base text-[#C2C6D6] leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    )
  }
)
SectionTitle.displayName = 'SectionTitle'

export { SectionTitle, sectionTitleVariants }
