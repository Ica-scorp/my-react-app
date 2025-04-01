import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi</h1>
      <Board></Board>
    </>
  )
}

export default App

function Square({value}){
  const [value, setValue] = useState(null);
  //define the onclick function
  function handleClick() {
    console.log('clicked!');
  }
  return (
    <button 
      onClick={handleClick}
      className="square"
    >
      {value}
    </button>
  );
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>
      <div className="board-row">
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className="board-row">
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </>
  );
}