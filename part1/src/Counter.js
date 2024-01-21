import React from 'react';
import { useState } from 'react';

const Counter = ({counter}) =>  <h1>{counter}</h1>

export const AppCounter = () => { 

    const [counter, setCounter] = useState(0)

    const isEven = counter % 2 === 0
    const isEvenMsg = isEven ? "Es Par" : "Es impar" 

    const handleClickAdd = () => { setCounter(counter + 1) }
    const handleClickLess = () => { setCounter(counter - 1) }
    const handleClickReset = () => { setCounter(0) }

    return (
        
        <>
            <Counter counter={counter} />
            <p>{isEvenMsg}</p>
            <button onClick={handleClickAdd}> Incrementar counter </button>
            <button onClick={handleClickLess}> Decrementar counter </button>
            <button onClick={handleClickReset}> Reset </button>
        </>
        
    )

}