import React from "react";
import styles from "./Modal.module.css";

const text = "Click Me";

const Modal = function (props) {
  const closeModal = function () {
    props.closeErrorModal();
  };

  return (
    <div
      onClick={closeModal}
      className={`${styles["modal-wrap"]} ${
        props.invalidInputs ? styles["invalidInputs"] : ""
      }`}
    >
      <div className={`${styles["modal"]}`}>
        <header>
          <h2 className={`${styles["modal__header"]}`}>Error</h2>
        </header>
        <div>
          <p className={`${styles["erro-message"]}`}>{props.errorMessage}</p>
        </div>
        <footer>
          <button onClick={closeModal} className={`${styles["form__button"]}`}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
