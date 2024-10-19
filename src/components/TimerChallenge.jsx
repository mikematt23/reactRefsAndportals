

import { useState, useRef } from "react"
import ResultModel from "./ResultModel"

const TimerChallenge = (props)=>{

  const timer = useRef()

  const [timerStarted,setTimerStarted] =useState(false)
  const [timerExpired,setTimerExpired] = useState(false)
  

 const handleStart = ()=>{
  timer.current = setTimeout(()=>{
    setTimerExpired(true)
    setTimerStarted(false)
  },props.targetTime*1000)
  setTimerStarted(true)
 }

 const handleStop = ()=>{
  console.log(timer)
  clearTimeout(timer.current)
  setTimerStarted(false)
 }


  return (
    <>
    {timerExpired && <ResultModel targetTime={props.targetTime} result ="Lost"/>}
    <section className="challenge">
      <h2>{props.title}</h2>
      <p className="challenge-time">
        {props.targetTime}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? "Stop timer": "Start Timer"}</button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running...": "Timer Not Active"}
      </p>
    </section>
    </>
  )
}

export default TimerChallenge