import React from 'react'
import { Link,Route,Routes,Outlet } from 'react-router'
import Layout from '../layouts/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import LoginPage from '../pages/LoginPage'
import Contact from '../pages/Contact'
import Register from '../pages/Register'
import Dashboard from '../pages/admin/Dashboard'
import Manage from '../pages/admin/Manage'
import Setting from '../pages/admin/Setting'


function AppRoutes() {
  return (
    <div>
        
        <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public */}
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<Register/>}/>
        </Route>

        {/* Private */}
        <Route path="admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage/>} />
          <Route path="setting" element={<Setting/>} />
        </Route>
        </Routes>
  </div>
  )
}

export default AppRoutes