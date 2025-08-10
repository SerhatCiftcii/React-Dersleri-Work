import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decremant, incirement } from './redux/counterSlice'

function App() {
  const { value } = useSelector((store) => store.counter)

  const dispatch = useDispatch();
  return (
    <div>
      <div>{value}</div>
      <div>
        <button onClick={() => dispatch(incirement())} >Arttır </button>
        <button onClick={() => dispatch(decremant())}>Azalt </button>
      </div>
    </div>
  )
}

export default App
