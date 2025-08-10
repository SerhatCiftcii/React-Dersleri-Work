import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decremant, incirement } from './redux/counterSlice'
import UserList from './UserList'

function App() {

  return (
    <div>
      <UserList />
    </div>
  )
}

export default App
