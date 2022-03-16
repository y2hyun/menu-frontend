import { useEffect } from 'react'
import axios from 'axios'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Login from './Login'

const theme = createTheme()

const App = () => {
  useEffect(() => {
    const getHello = async () => {
      try {
        const { data } = await axios.get('/hello')
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    }
    getHello().then(() => {})
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Login />
    </ThemeProvider>
  )
}

export default App
