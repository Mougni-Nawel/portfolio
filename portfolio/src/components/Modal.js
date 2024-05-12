// Modal.js
import React from 'react';

function Modal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
