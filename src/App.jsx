import { useState } from 'react'
import React from "react";
import './App.css'
import Sidebar from './components/layout/Sidebar'
import Login from './components/auth/Login';
import {Routes,Route} from 'react-router-dom';
import { Dashboard } from './components/admin/Dashboard';
import Order from './components/admin/Order';
import Promotion from './components/admin/Promotion';
import { Settings } from './components/admin/Settings';


function App() {
  const [data, setData] = React.useState(null);


 
  return (
    <>
    {/* <Sidebar/> */}
    <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       {/* <Route path="/orders" element={<Order/>}/> */}
       {/* <Route path="/contact" element={<Contact/>}/> */}
       {/* <Route path="/promotion" element={<Promotion/>}/> */}
       {/* <Route path="/settings" element={<Settings/>}/> */}
       
    </Routes>
    

  {/* React.useEffect(() => {
    fetch("http://localhost:3002/api/ISLSHIELD")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []); */}

  
      {/* <div>
      <p>{!data ? "Loading..." : data}</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
       
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
