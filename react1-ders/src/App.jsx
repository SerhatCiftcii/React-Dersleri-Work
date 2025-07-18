import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //jsx:{} süslü parantez aslında javascript kodu yazmak için kullanılır.
  //JAVA Script kodları burada yazılır.
  // return içindede html kodları yazılır. yazılan jsx kodları yukarda allta returnde döndürülür.
  // let a = 15;
  // const firstName = "Ahmet";

  let vize1 = 20;
  let vize2 = 90;

  let sonuc = false;

  let isimller = ["Ahmet",
    "Mehmet",
    "Ayşe",
    "Fatma"];

  return (
    <div>
      {/* <p>a değişkeni değeri=: {a}</p>
      <p>Müşterinin Adı: {firstName}</p> */}

      {/* <h1>Vize Notu Hesaplama</h1>
      <p>Vize 1: {vize1}</p>
      <p>Vize 2: {vize2}</p>
      <p>Vize  Ortlama: {(vize1 + vize2) / 2}</p> */}

      {/* {sonuc ? <p>Ehliyeti Alabilirsin</p> : <p>Ehliyeti Alamazsın!</p>} */}

      {/* {
        (vize1 + vize2) / 2 >= 60 ? <p>Sinavi Geçtin </p> : <p>Sinavi Geçemedin</p>
      } */}

      <div style={{ color: "red", backgroundColor: "black", border: "1px solid yellow", padding: "10px" }}>
        <h1>İsimler Listesi</h1>
        {
          isimller.map((isim, index) => {
            return <p key={index}>{index + 1} - {isim}</p>
          })
        }
      </div>

    </div>
  )
}

export default App
