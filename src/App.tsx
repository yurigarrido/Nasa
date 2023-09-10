import { globalStyles } from '../stitches.config'
import { Router } from './routes'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { LayoutProvider } from './context/layoutContext'

function App() {
  globalStyles()
  return (
    <BrowserRouter>
      <LayoutProvider>
        <Toaster />
        <Router />
      </LayoutProvider>
    </BrowserRouter>
  )
}

export default App
