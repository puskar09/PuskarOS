import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@store/ThemeProvider'
import { AppRouter } from '@router/AppRouter'

/**
 * App — root component.
 * Provides: BrowserRouter → ThemeProvider → AppRouter (layout + routes)
 */
export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  )
}
