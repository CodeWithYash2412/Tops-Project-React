import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home'
import Modules from './Pages/Modules'
import RootLayout from './RootLayout'
import UserModule from './Pages/UserModule'
import AdminModule from './Pages/AdminModule'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='modules' element={<Modules />}>
          <Route path='usermodule' element={<UserModule />} />
          <Route path='adminmodule' element={<AdminModule />} />
        </Route>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App