import { useState } from "react"

const TimerChallenge = (props)=>{
  const [buttonTitle,setButtonTitle] =useState(false)
  return (
    <section className="challenge">
      <h2>{props.title}</h2>
      <p className="challenge-time">
        {props.targetTime}
      </p>
      <p>
        <button>{buttonTitle ? "Start timer": "Stop Timer"}</button>
      </p>
      <p className="">
        
      </p>
    </section>
  )
}

export default TimerChallenge