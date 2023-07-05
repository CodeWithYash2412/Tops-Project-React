import React, { useReducer } from 'react'
import reducer from './Reducers'

const ReducerHook = () => {
    const initialValue = 0;
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <div className='reducer'>
            <h1> Use Reducer Hook </h1>
            <button onClick={() => dispatch({ type: "INC" })} >Plus</button>
            <h1> {state} </h1>
            <button onClick={() => dispatch({ type: "DEC" })}>Minus</button>
        </div>
    )
}

export default ReducerHook