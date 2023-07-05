import React from 'react'
import { useContext } from 'react'
import { AppContext } from './UserContext'

const Data1 = () => {

    const userData = useContext(AppContext);

    const { name, age } = userData

    return (
        <div>Data1 : My Name is {name} and My Age is {age} </div>
    )
}

export default Data1