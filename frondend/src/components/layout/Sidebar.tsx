import { NavLink, useLocation } from 'react-router-dom'
import {
  Home,
  Target,
  GraduationCap,
  Wrench,
  Activity,
  Settings,
} from 'lucide-react'
import { cn } from '@lib/utils'
import { NAV_ITEMS } from '@lib/constants'

const ICON_MAP = {
  Home,
  Target,
  GraduationCap,
  Wrench,
  Activity,
} as const

type IconName = keyof typeof ICON_MAP

export function Sidebar() {
  const { pathname } = useLocation()

  return (
    <aside className="fixed left-0 top-0 h-screen w-[80px] flex flex-col items-center py-10 z-50 border-r border-[#262626] bg-[#0A0A0A]">
      {/* Logo */}
      <div className="mb-10 flex-shrink-0">
        <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center border border-[#262626]">
          <span className="text-[#ADC6FF] text-lg font-bold select-none">P</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-2 w-full items-center">
        {NAV_ITEMS.map(item => {
          const Icon = ICON_MAP[item.icon as IconName]
          const isActive = item.path === '/'
            ? pathname === '/'
            : pathname.startsWith(item.path)

          return (
            <NavLink
              key={item.id}
              to={item.path}
              title={item.label}
              className={cn(
                'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-150 relative group',
                isActive
                  ? 'bg-[#1A1A1A] text-[#ADC6FF] border border-[#262626]'
                  : 'text-[#C2C6D6] hover:text-[#E5E2E1] hover:bg-[#1A1A1A]'
              )}
            >
              <Icon size={20} />
              {/* Active indicator ring */}
              {isActive && (
                <span className="absolute inset-0 rounded-xl border border-[#ADC6FF]/30 pointer-events-none" />
              )}
              {/* Tooltip */}
              <span className="absolute left-14 bg-[#1A1A1A] text-[#E5E2E1] text-xs px-2 py-1 rounded-md border border-[#262626] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 shadow-lg">
                {item.label}
              </span>
            </NavLink>
          )
        })}
      </nav>

      {/* Bottom — Settings + Avatar */}
      <div className="mt-auto flex flex-col gap-4 items-center">
        <NavLink
          to="/settings"
          title="Settings"
          className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-150 group relative',
            pathname === '/settings'
              ? 'bg-[#1A1A1A] text-[#ADC6FF] border border-[#262626]'
              : 'text-[#C2C6D6] hover:text-[#E5E2E1] hover:bg-[#1A1A1A]'
          )}
        >
          <Settings size={20} />
          <span className="absolute left-14 bg-[#1A1A1A] text-[#E5E2E1] text-xs px-2 py-1 rounded-md border border-[#262626] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 shadow-lg">
            Settings
          </span>
        </NavLink>

        {/* Avatar placeholder */}
        <div className="w-10 h-10 rounded-full border border-[#262626] bg-[#1A1A1A] flex items-center justify-center cursor-pointer hover:border-[#ADC6FF]/40 transition-colors">
          <span className="text-[#C2C6D6] text-sm font-medium select-none">P</span>
        </div>
      </div>
    </aside>
  )
}
