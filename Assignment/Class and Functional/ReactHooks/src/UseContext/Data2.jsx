import React from 'react'
import { useContext } from 'react'
import { AppContext } from './UserContext'


const Data2 = () => {
    const userData = useContext(AppContext)
    const { name, age } = userData
    return (
        <div>Data2 : My Name is {name} and My Age is {age} </div>
    )
}

export default Data2