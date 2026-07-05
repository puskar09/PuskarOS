import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { RightSidebar } from './RightSidebar'
import { FloatingPromptBar } from './FloatingPromptBar'

export interface AppLayoutProps {
  children: ReactNode
  rightSidebar?: ReactNode
  floatingPromptBar?: ReactNode
}

/**
 * AppLayout — root structural operating system shell.
 *
 * Implements:
 * 1. Fixed Left Sidebar (80px icon navigation)
 * 2. Main Workspace Container (scrollable center column with responsive padding and spacing)
 * 3. Right Sidebar Container (independent scrollable right column for widgets/modules)
 * 4. Floating AI Prompt Bar Container (fixed bottom bar dynamically centered in workspace)
 *
 * Designed as a calm, empty operating system shell ready to receive functional modules.
 */
export function AppLayout({
  children,
  rightSidebar,
  floatingPromptBar,
}: AppLayoutProps) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0A0A0A] text-[#E5E2E1] font-sans selection:bg-[#ADC6FF]/20 selection:text-[#ADC6FF]">
      {/* Fixed Left Sidebar */}
      <Sidebar />

      {/* Workspace wrapper — offset by 80px sidebar width, flex row layout */}
      <div className="ml-[80px] flex-1 flex h-screen overflow-hidden relative">
        {/* Main Workspace Container — independent scrollable center column */}
        <main
          className="flex-1 h-full overflow-y-auto overflow-x-hidden p-6 md:p-10 lg:p-12 pb-32 flex flex-col gap-8 scroll-smooth"
          id="main-workspace"
        >
          {children}
        </main>

        {/* Right Sidebar Container — independent scrollable right column */}
        <RightSidebar>{rightSidebar}</RightSidebar>
      </div>

      {/* Floating AI Prompt Bar Container — positioned over workspace */}
      <FloatingPromptBar>{floatingPromptBar}</FloatingPromptBar>
    </div>
  )
}
