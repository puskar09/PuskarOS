import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'

interface AppLayoutProps {
  children: ReactNode
}

/**
 * AppLayout — root layout shell.
 * Renders the 80px fixed sidebar and the scrollable main workspace.
 * All pages are rendered as children inside the main workspace.
 */
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Fixed sidebar */}
      <Sidebar />

      {/* Main workspace — offset by sidebar width, scrollable */}
      <main
        className="ml-[80px] flex-1 h-screen overflow-y-auto overflow-x-hidden"
        id="main-workspace"
      >
        {children}
      </main>
    </div>
  )
}
