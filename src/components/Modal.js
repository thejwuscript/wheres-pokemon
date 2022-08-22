import React from 'react';

export default function Modal({closeModal}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeButtonContainer">
          <button className="closeButton" onClick={closeModal}>X</button>
        </div>
        <h3 className="modalTitle">Record Your Result</h3>
        <form action="">
          <label htmlFor="name">
            Name: <input type="text" name="name" id="name" />
          </label>
          <button onClick={closeModal}>Cancel</button>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}