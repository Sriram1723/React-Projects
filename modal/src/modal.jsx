import React, { useState } from "react";
import './styles.css'
const Modal = () => {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(true)
  }

  function handleModalClose() {
    setModal(false)
  }
  return (
    <div className="wrapper">
      <button onClick={() => handleModal()}>Open Modal</button>
      {
        modal && <div className="modal-container">
        <div className="header">Header<span onClick={() => handleModalClose()} className="close-modal">&times;</span></div>
        <div className="body">Body</div>
        <div className="footer">Footer</div>
      </div>
      }
    </div>
  );
};

export default Modal;
