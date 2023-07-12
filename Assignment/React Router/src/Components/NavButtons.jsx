import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavButtons = () => {
    return (
        <>
            <div className='nabBG'>
                <NavLink to='/' ><button >Home</button></NavLink>

            </div>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default NavButtons