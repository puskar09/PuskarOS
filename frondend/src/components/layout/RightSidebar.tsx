import type { ReactNode } from 'react'
import { cn } from '@lib/utils'
import { SectionTitle, Divider } from '@components/ui'

export interface RightSidebarProps {
  children?: ReactNode
  className?: string
  title?: string
}

/**
 * RightSidebar — structural Right Sidebar container.
 *
 * Features:
 * - Fixed/sticky layout on the right edge of the operating system shell
 * - Responsive: visible on xl screens and above (380px/400px width), hidden on smaller viewports
 * - Independent scroll behavior (overflow-y-auto) so scrolling widgets does not scroll main workspace
 * - Acts as an empty OS container ready to receive modules (Active Sprint, Activity Grid, AI Brief)
 */
export function RightSidebar({
  children,
  className,
  title = 'System Workspace',
}: RightSidebarProps) {
  return (
    <aside
      className={cn(
        'hidden xl:flex xl:w-[380px] 2xl:w-[400px] h-full border-l border-[#262626] bg-[#0A0A0A]/40 backdrop-blur-xl flex-col p-6 gap-6 overflow-y-auto shrink-0 z-30 select-none',
        className
      )}
      aria-label="Right Workspace Sidebar"
    >
      {/* Structural Header */}
      <div className="flex flex-col gap-3 shrink-0">
        <SectionTitle size="sm" variant="muted">
          {title}
        </SectionTitle>
        <Divider variant="subtle" />
      </div>

      {/* Container Content or Empty OS State */}
      <div className="flex-1 flex flex-col gap-6">
        {children || (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 gap-3 rounded-2xl border border-dashed border-[#262626]/60 bg-[#131313]/20 min-h-[400px] opacity-40">
            <div className="w-2 h-2 rounded-full bg-[#ADC6FF]/40 animate-pulse" />
            <span className="text-xs font-mono text-[#C2C6D6] uppercase tracking-wider">
              Ready for Modules
            </span>
          </div>
        )}
      </div>
    </aside>
  )
}
