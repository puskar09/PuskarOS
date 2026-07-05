/**
 * Puskar OS — Application Constants
 * Single source of truth for app-wide values.
 */

export const APP_NAME = 'Puskar OS'
export const APP_VERSION = '1.0.0'

/** Navigation items for the sidebar */
export const NAV_ITEMS = [
  { id: 'home',     label: 'Home',     path: '/',          icon: 'Home' },
  { id: 'career',   label: 'Career',   path: '/career',    icon: 'Target' },
  { id: 'learning', label: 'Learning', path: '/learning',  icon: 'GraduationCap' },
  { id: 'projects', label: 'Projects', path: '/projects',  icon: 'Wrench' },
  { id: 'fitness',  label: 'Fitness',  path: '/fitness',   icon: 'Activity' },
] as const

export type NavItemId = typeof NAV_ITEMS[number]['id']

/** Routes */
export const ROUTES = {
  HOME:     '/',
  CAREER:   '/career',
  LEARNING: '/learning',
  PROJECTS: '/projects',
  FITNESS:  '/fitness',
  SETTINGS: '/settings',
} as const

/** Theme storage key */
export const THEME_KEY = 'puskar-os-theme'
export type Theme = 'dark' | 'light'
