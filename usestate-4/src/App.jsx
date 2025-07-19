import { useState } from 'react'
import './App.css'

function App() {
  // String tckn="515154" javadaki karşılığı
  //useState : hooks aslında reactaki karşılığı

  const [firstName, setFirstName] = useState('Serhat')
  const [lastName, setLastName] = useState("çiftçi")
  const handleChange = () => {
    debugger;
    setFirstName('Ali')
  }
  const [names, setNmaes] = useState(['Serhat', 'Ahmet', 'Mehmet'])

  const [userInfo, setUserInfo] = useState({ username: "serhat", password: "123456" })
  //----------*///////////
  //Önemli :
  //bir statein değeri set metodunu kullnarak değiştiğinde o compopnnet yeniden render edilir 1000satırmkod yazdık sürekli render edeilirse zararlı  @@@@

  const [count, setCount] = useState(0)
  const arttir = () => {
    setCount(count + 1)
  }
  console.log("render oldum")
  return (
    <div>
      <div> {firstName}  {lastName}</div>
      <button onClick={() => setFirstName('Ahmet')}>İsmi Ahmet Yap</button>
      <div>  <button onClick={handleChange}> İsmiDeğitşir</button></div>

      <div>
        <ul className="list-group">
          {names.map((name, index) => (
            <li key={index} className="list-group-item">
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {userInfo.username} {userInfo.password}
      </div>

      <div>
        <div>
          <h1>{count}</h1>
          <button onClick={arttir}>Arttır</button>
        </div>
      </div>

    </div>



  )
}

export default App
