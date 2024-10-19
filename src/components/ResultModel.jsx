const ResultModel=(props)=>{
  console.log('here')
  return(
    <dialog className="result-modal" open>
      <h2>You {props.result}</h2>
      <p> the target time was <strong>{props.targetTime}</strong></p>
      <p>You stopped the timer with <strong>x seconds left</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  )
}

export default ResultModel