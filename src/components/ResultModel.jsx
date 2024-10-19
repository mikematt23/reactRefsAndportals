import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal} from "react-dom"

const ResultModal = forwardRef(function ResultModel(props,ref){

  const userLost = props.remainingTime <=0
  
  const dialog = useRef()

  useImperativeHandle(ref,()=>{

    return {
      open(){
        dialog.current.showModal()
      }
    }
  })

  return createPortal(
    <dialog ref={dialog} className="result-modal" >
      {userLost && <h2>You lost</h2>}
      <p> the target time was <strong>{props.targetTime}</strong></p>
      <p>You stopped the timer with <strong>{(props.remainingTime/1000).toFixed(2)}</strong></p>
      <form method="dialog" onSubmit={props.handleReset}>
        <button>Close</button>
      </form>
    </dialog>
    , document.getElementById('modal')
  )
})

export default ResultModal