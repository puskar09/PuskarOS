import type { ReactNode } from 'react'
import { cn } from '@lib/utils'
import { GlassCard, PillBadge } from '@components/ui'

export interface FloatingPromptBarProps {
  children?: ReactNode
  className?: string
}

/**
 * FloatingPromptBar — structural Floating AI Prompt Bar container.
 *
 * Features:
 * - Persistent floating command container at the bottom of the OS workspace
 * - Horizontally centered within the Main Workspace container across all responsive breakpoints
 * - Uses GlassCard primitive for a calm, premium Arc / Raycast luminous glass aesthetic
 * - Ready to receive the functional AI Prompt module in future phases
 */
export function FloatingPromptBar({
  children,
  className,
}: FloatingPromptBarProps) {
  return (
    <div
      className={cn(
        'fixed bottom-6 left-[80px] right-0 xl:right-[380px] 2xl:right-[400px] z-40 flex justify-center pointer-events-none px-6 transition-all duration-300',
        className
      )}
      aria-label="Floating AI Prompt Bar Container"
    >
      <GlassCard
        variant="interactive"
        size="sm"
        className="pointer-events-auto w-full max-w-3xl rounded-full border-[#333333]/80 shadow-[0_15px_50px_rgba(0,0,0,0.85)] bg-[#131313]/85 backdrop-blur-2xl px-6 py-3.5 flex items-center justify-between gap-4"
      >
        {children || (
          <div className="flex items-center justify-between w-full gap-4 select-none">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#ADC6FF]/60" />
              <span className="text-xs font-mono text-[#C2C6D6]/70 tracking-wide">
                AI Operating System Prompt — Awaiting Module...
              </span>
            </div>
            <div className="flex items-center gap-2">
              <PillBadge size="sm" variant="outline">
                ⌘K
              </PillBadge>
            </div>
          </div>
        )}
      </GlassCard>
    </div>
  )
}
