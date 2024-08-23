import { Grid } from '@mui/material'
import './App.css'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'
import Settings from './pages/Settings'

function App() {

  return (
    <>
      <Header></Header>
      <Grid container>
        <Grid item xs={2}>
          <Aside></Aside>
        </Grid>
        <Grid item xs={10}>
            <Settings></Settings>
        </Grid>
      </Grid>
    </>
  )
}

export default App
