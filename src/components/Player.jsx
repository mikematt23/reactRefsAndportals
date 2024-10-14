import { useState, useRef } from "react";

export default function Player() {
  const input = useRef()
  const [player,setPlayer] = useState('unKnown')
  

  const handleSetName = ()=>{
    input.current.value
    setPlayer(input.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome {player}</h2>
      <p>
        <input ref={input} type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
