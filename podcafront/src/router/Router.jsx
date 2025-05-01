import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../podca/layout/Layout'
import Home from '../podca/home/Home'
import Dashboard from "../podca/dashboard/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default Router