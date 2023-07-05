import React, { useEffect, useRef, useState } from 'react'

const Example2 = () => {
    const [color, setColor] = useState("white")
    const inputRef = useRef()

    useEffect(() => {
        changeCOlor()
    }, [color])

    const changeCOlor = () => {
        inputRef.current.style.backgroundColor = color ? color : "white"
    }





    return (
        <div className='ref' ref={inputRef} >
            <h3> type the color name in input field the background will change in that color</h3>
            <input className='inputStyle' type="text" name="color" id="color" value={color} onChange={(event) => setColor(event.target.value)} />

            {/* <button onClick={changeCOlor}>change color</button> */}

        </div>
    )
}

export default Example2