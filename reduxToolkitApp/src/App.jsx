import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Parent from './components/Parent'
import ApiLoad from './components/ApiLoad'

function App() {

  return (
    <>
      <h1>Learn About Redux Toolkit</h1>
      {/* <Parent /> */}
      <ApiLoad />
    </>
  )
}

export default App
