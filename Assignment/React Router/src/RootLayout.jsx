import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <>
            <div>
                <div>RootLayout</div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/modules">Modules</NavLink>
            </div>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout