import React, { useState } from 'react'

const IncrDecr = () => {
    const [number, setNumber] = useState(0)
    const increment = () => {
        setNumber(number + 1)
    }
    const decrement = () => {
        setNumber(number - 1)
    }
  return (
    <div className='IncrDecrMain'>
        <h3 className='counter'> {number} </h3>
        <div className='btns'>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    </div>
  )
}

export default IncrDecr