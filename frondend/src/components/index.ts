/**
 * components/ — three-tier component system
 *
 * ┌─────────────────────────────────────────────────────────┐
 * │  ui/       Pure, stateless atomic primitives            │
 * │            GlassCard, ProgressBar, PillBadge, etc.      │
 * ├─────────────────────────────────────────────────────────┤
 * │  shared/   Business-aware, multi-feature components     │
 * │            PageHeader, NewsCard, TimelineStep, etc.     │
 * ├─────────────────────────────────────────────────────────┤
 * │  layout/   App shell, navigation, structural wrappers   │
 * │            AppLayout, Sidebar                           │
 * └─────────────────────────────────────────────────────────┘
 *
 * Import from the specific sub-folder for clarity:
 *   import { GlassCard } from '@components/ui'
 *   import { PageHeader } from '@components/shared'
 *   import { AppLayout } from '@components/layout'
 */

export * from './ui'
export * from './shared'
export * from './layout'
