import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import ResponsiveAppBar from './demo'
import Home from './Home'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <Home />
      {/* <ResponsiveAppBar /> */}
    </>
  )
}

export default App
