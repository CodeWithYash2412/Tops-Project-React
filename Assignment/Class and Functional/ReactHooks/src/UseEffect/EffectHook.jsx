import React, { useEffect, useState } from 'react'

const EffectHook = () => {


    const [title, setTitle] = useState("Change Title")

    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <div className='effect'>
            <h1>useEffect Hook</h1>
            <h4> useEffect hook is async hook. Data will render after rendering of screen</h4>
            <h4> useLayoutEffect hook is similar to useEffect Hook </h4>\
            <h4> Difference is use Effect is async while useLayoutEffect is sync </h4>
            <h4> useEffect loads Data after rendering screen while is useLayoutEffect Data loads before loading of the screen </h4>
            <input className='inputStyle' type="text" name="title" id="title" placeholder='Enter Title' value={title} onChange={(event) => setTitle(event.target.value)} />
            <button> Set Page Title </button>

        </div>
    )
}

export default EffectHook