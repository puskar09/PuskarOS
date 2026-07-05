import { Routes, Route } from 'react-router-dom'
import { AppLayout } from '@layouts/AppLayout'

// Feature entry points — populated in future phases
import { HomePage } from '@features/home'
import { CareerPage } from '@features/career'
import { LearningPage } from '@features/learning'
import { ProjectsPage } from '@features/projects'
import { FitnessPage } from '@features/fitness'
import { SettingsPage } from '@features/settings'

/**
 * AppRouter — defines all top-level routes.
 * Each route maps to a feature as per DECISIONS.md routing strategy.
 */
export function AppRouter() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/"         element={<HomePage />} />
        <Route path="/career"   element={<CareerPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/fitness"  element={<FitnessPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </AppLayout>
  )
}
