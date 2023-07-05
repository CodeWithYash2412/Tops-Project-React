import React, { useEffect, useRef, useState } from 'react'

const Example1 = () => {
    const [data, setdata] = useState("")
    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1
    })

    return (
        <div className='reducer'>
            <label htmlFor="name">Enter Name</label>
            <input type="text" id='name' name='name' value={data} onChange={(event) => setdata(event.target.value)} />
            <h1> The Time Component Refreshed = {count.current} </h1>
        </div>
    )
}

export default Example1