import { useState } from 'react'
import React from "react";
import './App.css'
import Login from './components/auth/Login';
import {Routes,Route} from 'react-router-dom';
import { Dashboard } from './components/admin/Dashboard';
import Order from './components/admin/Order';
import Promotion from './components/admin/Promotion';
import { Settings } from './components/admin/Settings';
import { ToastContainer } from 'react-toastify';
import requireAuth from './components/hoc/requireAuth';
import { useSelector } from 'react-redux';
import { userSelector } from './redux/Slices/authSlice';

function App() {
  const { isLoggedIn} = useSelector(userSelector);
  console.log(isLoggedIn,"aaaaaaaaaa")
  return (
    <>
    {/* <Sidebar/> */}
    <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/dashboard" element={requireAuth(Dashboard)}/>
       {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
      
       
    </Routes>

    <ToastContainer
        position='top-center'
        draggable={true}
        autoClose={1000}
        hideProgressBar={true}
        theme='dark'
      />

     {/* <Route path="/orders" element={<Order/>}/> */}
       {/* <Route path="/contact" element={<Contact/>}/> */}
       {/* <Route path="/promotion" element={<Promotion/>}/> */}
       {/* <Route path="/settings" element={<Settings/>}/> */}

    </>
  )
}

export default App
