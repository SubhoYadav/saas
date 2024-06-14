import "./dialogBox.scss";
import React, { useRef } from "react";

export default function DialogBox({ children, isDialogOpen }) {
  const modal = useRef();
  function openDialogBox() {
    console.log(modal.current);
    modal.current.style.top = "5%";
    modal.current.showModal();
  }

  function closeDialogBox() {
    modal.current.close();
  }

  React.useEffect(() => {
    if (isDialogOpen) {
      openDialogBox();
    }
  }, [isDialogOpen]);
  return (
    <>
      <dialog className="modal" ref={modal}>
        <button onClick={closeDialogBox}>
          <img src="/delete-button.png" alt="" width="25px" />
        </button>

        {children}
      </dialog>
      {/* <button onClick={openDialogBox}>open dialog</button> */}
    </>
  );
}
