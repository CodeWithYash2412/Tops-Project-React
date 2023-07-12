import React from 'react'
import Home from './Pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import NavButtons from './Components/NavButtons'
import AdminModule from './Components/AdminModule'
import UserModule from './Components/UserModule'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavButtons />}>
        <Route index element={<Home />} />
        <Route path='/admin' element={<AdminModule />} />
        <Route path='/user' element={<UserModule />} />
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