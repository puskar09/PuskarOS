import * as React from 'react'
import { GlassCard, type GlassCardProps } from './GlassCard'

/**
 * GlassCardSubtle
 * Convenience wrapper for GlassCard with subtle variant and medium size by default.
 * Ideal for secondary widgets, activity grids, and brief summary panels.
 */
const GlassCardSubtle = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ variant = 'subtle', size = 'md', ...props }, ref) => {
    return <GlassCard ref={ref} variant={variant} size={size} {...props} />
  }
)
GlassCardSubtle.displayName = 'GlassCardSubtle'

export { GlassCardSubtle }
