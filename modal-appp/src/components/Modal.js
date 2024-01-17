import React from 'react';
import '../Modal.scss';

const Modal = ({ header, closeButton, text, actions, closeModal, customClass }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  const modalClasses = `modal ${customClass ? customClass : ''}`;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className={modalClasses}>
        <div className="modal-header">
          <h2>{header}</h2>
          {closeButton && (
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          )}
        </div>
        <div className="modal-content">
          <p>{text}</p>
        </div>
        <div className="modal-actions">{actions}</div>
      </div>
    </div>
  );
};

export default Modal;
