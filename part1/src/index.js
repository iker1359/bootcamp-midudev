import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

import './index.css';

const Counter = ({contador}) => {

  return <h1>{contador}</h1>

}

const AppPart1 = () => { 

  const [contador, setContador] = useState(0)

  const isEven = contador % 2 === 0
  const isEvenMsg = isEven ? "Es Par" : "Es impar" 

  const handleClickAdd = () => { setContador(contador + 1) }
  const handleClickLess = () => { setContador(contador - 1) }
  const handleClickReset = () => { setContador(0) }

  return (
    
    <>
      <Counter contador={contador} />
      <p>{isEvenMsg}</p>
      <button onClick={handleClickAdd}> Incrementar contador </button>
      <button onClick={handleClickLess}> Decrementar contador </button>
      <button onClick={handleClickReset}> Reset </button>
    </>
    
  )

}

const AppPart2 = () => {



}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<AppPart2 />);
