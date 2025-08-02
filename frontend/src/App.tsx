import './App.css'
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes'
import RootLayout from './layouts/RootLayout'

function App() {

  return (
    <BrowserRouter>
      <RootLayout>
        <AppRoutes />
      </RootLayout>
    </BrowserRouter>
  )
}

export default App
