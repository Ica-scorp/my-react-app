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

function Square(){
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
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
    </>
  );
}