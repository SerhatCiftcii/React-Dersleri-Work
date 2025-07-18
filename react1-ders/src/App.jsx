import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let name = "Serhat";
  let surname = "Cıftcı";
  //JAVA Script kodları burada yazılır.
  // return içindede html kodları yazılır. yazılan jsx kodları yukarda allta returnde döndürülür.
  return (
    <div>
      <div>
        <h1>Hello {name} {surname}</h1>
      </div>
      <p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </p>
    </div>
  );
}

export default App
