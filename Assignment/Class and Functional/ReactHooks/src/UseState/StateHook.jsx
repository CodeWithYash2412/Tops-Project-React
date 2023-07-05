import React, { useState } from 'react'

const StateHook = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    return (
        <div className='effect'>
            <h1> useState Hook </h1>
            <input className='inputStyle' value={name} onChange={(event) => setName(event.target.value)} type="text" name="text" id="text" placeholder='Enter Your Name' />
            <input className='inputStyle' value={email} onChange={(event) => setEmail(event.target.value)} type="email" name="text" id="text" placeholder='Enter Your Email' />
            <h3> Hello {name}, we have sended email to {email} </h3>
        </div>
    )
}

export default StateHook