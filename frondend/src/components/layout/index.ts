/**
 * components/layout/
 *
 * Structural layout components.
 * These define the app shell, navigation, and page containers.
 *
 * Rules:
 * - Responsible for structure and positioning only
 * - May use routing (NavLink, useLocation)
 * - Must NOT contain feature-specific content
 */

export { AppLayout, type AppLayoutProps } from './AppLayout'
export { Sidebar } from './Sidebar'
export { RightSidebar, type RightSidebarProps } from './RightSidebar'
export {
  FloatingPromptBar,
  type FloatingPromptBarProps,
} from './FloatingPromptBar'
