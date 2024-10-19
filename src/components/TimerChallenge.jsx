

import { useState, useRef } from "react"
import ResultModel from "./ResultModel"

const TimerChallenge = (props)=>{

  const timer = useRef()
  const dialog = useRef()

const [timeRemaining, setTimeRemaining] = useState(props.targetTime*1000)

const timerIsActive = timeRemaining > 0 && timeRemaining < props.targetTime*1000
  
if(timeRemaining <= 0){
  clearInterval(timer.current)
  dialog.current.open()
}

function handleReset(){
  setTimeRemaining(props.targetTime*1000)
}

 const handleStart = ()=>{
  timer.current = setInterval(()=>{
    setTimeRemaining(prevTimeReaming => prevTimeReaming-10)
  },10)

 }

 const handleStop = ()=>{
  dialog.current.open()
  clearInterval(timer.current)
 }


  return (
    <>
    <ResultModel handleReset={handleReset} ref={dialog} targetTime={props.targetTime} remainingTime ={timeRemaining}/>
    <section className="challenge">
      <h2>{props.title}</h2>
      <p className="challenge-time">
        {props.targetTime}
      </p>
      <p>
        <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Stop timer": "Start Timer"}</button>
      </p>
      <p className={timerIsActive ? "active" : undefined}>
        {timerIsActive ? "Time is running...": "Timer Not Active"}
      </p>
    </section>
    </>
  )
}

export default TimerChallenge