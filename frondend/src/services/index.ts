/**
 * services/
 *
 * All external data interactions live here.
 * This layer abstracts API calls, localStorage reads/writes,
 * and any future integrations (GitHub API, Spotify, LLM, etc.)
 * away from components and features.
 *
 * Rules:
 * - No JSX / React components
 * - No direct state management
 * - Returns typed data or Promises
 * - Each service is scoped to a single domain
 *
 * Planned services (V1 → V2+):
 * storageService   — localStorage read/write helpers
 * missionService   — daily mission data (static V1, AI-generated V2+)
 * githubService    — GitHub API integration (V2)
 * spotifyService   — Spotify API integration (V2)
 * newsService      — AI news feed (V2)
 */

// export { storageService } from './storageService'
// export { missionService } from './missionService'
