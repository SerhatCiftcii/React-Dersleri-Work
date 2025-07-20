import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    console.log("her zaman çalişir.")
  })

  //1kere çalışır dizili olan.
  useEffect(() => {
    console.log("komponent ilk render edildiğinde çaliir..")
  }, [])

  //komponent ilk render edildiğinde ve firstname state değeri değiştiğinde çalışır.
  useEffect(() => {
    console.log("ilk render edildiğinde ve firstname state değeri değiştiğinde çalişir.")
  }, [firstName, lastName])

  useEffect(() => {
    console.log("ilk render edildiğinde ve lastname state değeri değiştiğinde çalişir.")
  }, [lastName])


  return (
    <div>
      <div>
        <button onClick={() => setFirstName("Serhat")}> Adı değiştir.</button>
      </div>
      <div>
        <button onClick={() => setLastName("Çiftçi")}> soyismi  değiştir.</button>
      </div>

    </div>
  )
}

export default App
