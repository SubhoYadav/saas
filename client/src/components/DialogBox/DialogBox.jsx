import "./dialogBox.scss"
import React, { useRef } from "react"

export default function DialogBox({children, isDialogOpen}) {
  const modal = useRef()
  function openDialogBox () {
    console.log(modal.current)
    modal.current.style.top = "5%"
    modal.current.showModal()
  }

  function closeDialogBox () {
    modal.current.close()
  }

  React.useEffect(() => {
    if (isDialogOpen) {
      openDialogBox()
    }
  }, [isDialogOpen])
  return (
    <>
    <dialog className="modal" ref={modal}>
      <button onClick={closeDialogBox}>Close</button>
      <h1 style = {{color: "white"}}>Aman Bansal</h1>
      {children}
      
    </dialog>
    {/* <button onClick={openDialogBox}>open dialog</button> */}
    </>
  )
}
