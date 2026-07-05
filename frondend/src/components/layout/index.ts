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
 *
 * Current components:
 * AppLayout  — root shell (sidebar + main workspace)
 * Sidebar    — 80px fixed icon sidebar
 */

export { AppLayout } from './AppLayout'
export { Sidebar } from './Sidebar'
