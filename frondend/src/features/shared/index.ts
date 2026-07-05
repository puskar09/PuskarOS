/**
 * features/shared/
 *
 * Reusable feature-level components shared across multiple feature pages.
 *
 * Distinction from components/shared/:
 * - components/shared/   → Presentational only, no feature context
 * - features/shared/     → May import from services or types,
 *                          wired to real data shapes, but not
 *                          specific to one feature
 *
 * Rules:
 * - May be aware of domain types (mission, project, etc.)
 * - Must NOT be tied to a single feature's internal state
 * - Imported by multiple feature modules
 *
 * Planned (Phase 3+):
 * MissionCard         — displays a mission task with state
 * PhaseProgressBar    — learn/build/ship progress indicator
 * AIMentorMessage     — System Mentor message block
 */

// export { MissionCard } from './MissionCard'
// export { PhaseProgressBar } from './PhaseProgressBar'
// export { AIMentorMessage } from './AIMentorMessage'
