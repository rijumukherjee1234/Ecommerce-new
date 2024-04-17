import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from "react";
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/layout/Sidebar'

function App() {
  const [data, setData] = React.useState(null);
 
  return (
    <>
      <Sidebar/>
  

  {/* React.useEffect(() => {
    fetch("http://localhost:3002/api/ISLSHIELD")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []); */}

  
      <div>
      <p>{!data ? "Loading..." : data}</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
