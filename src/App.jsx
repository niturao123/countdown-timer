// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {Timer} from './components/Timer'
import './components/Timer.css'
function App() {
  return (
    <>
    <Timer number={100}/>
    <Timer number={10}/>
    </>
  )
}

export default App
