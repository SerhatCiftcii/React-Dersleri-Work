import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login'
import { users } from './login'
import Hello from './Hello'
function App() {
  console.log(users);

  return (
    <div>
      {/* <Login /> */}
      <Hello />
    </div>
  )
}
export default App
