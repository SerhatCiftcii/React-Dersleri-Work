import { useState } from 'react'

import './App.css'

function App() {
  const [vize1, setVize1] = useState(0)
  const [vize2, setVize2] = useState(0)

  const ortalamaBul = () => {
    debugger; // Bu satırda debugger kullanarak kodu adım adım inceleyebilirsiniz.
    const toplamSonuc = topla() / 2;
    yazdir(toplamSonuc);
  }

  const topla = () => {
    debugger//nerede probelem varsa oraya koyun 
    const toplam = vize1 + vize2
    return toplam;
  }
  const yazdir = (sonuc) => {
    debugger
    console.log("Ortlama: " + sonuc)
  }
  return (

    <div>
      <div>
        <input type="number" value={vize1} onChange={(e) => setVize1(Number(e.target.value))} placeholder='vize1' />
      </div>
      <div>
        <input type="number" value={vize2} onChange={(e) => setVize2(Number(e.target.value))} placeholder='vize2' />
      </div>
      <div>
        <button onClick={ortalamaBul}>
          Ortalama  Bul
        </button>
      </div>
    </div>

  )
}

export default App
