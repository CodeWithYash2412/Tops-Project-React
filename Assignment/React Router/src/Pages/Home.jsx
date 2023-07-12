import React from 'react'
import NavButtons from '../Components/NavButtons'

const Home = () => {
    return (
        <div>


            <NavLink to='/admin' ><button >Admin Module</button></NavLink>
            <NavLink to='/user'><button>User Module</button></NavLink>
        </div>
    )
}

export default Home