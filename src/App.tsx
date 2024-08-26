import { Grid } from '@mui/material'
import './App.css'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'
import Settings from './pages/Settings'
import { router } from './router/Router'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
