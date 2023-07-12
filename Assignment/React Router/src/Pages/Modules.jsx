import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Modules = () => {
    return (
        <div>

            <div className="mainModule">
                <h1>This is the content of Main Module Page</h1>
                <div>
                    <NavLink to='usermodule'>User Module</NavLink>
                    <NavLink to='adminmodule'>Admin Module</NavLink>
                </div>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Modules