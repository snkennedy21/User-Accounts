import styles from "./Form.module.css";
import { useState } from "react";

const Form = function (props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = function (e) {
    setEnteredUsername(e.target.value);
  };

  const ageChangeHandler = function (e) {
    setEnteredAge(e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();
    if (enteredUsername === "" || enteredAge === "") {
      props.generateErrorMessage("You Must Enter a Valid Username and Age");
      props.displayErrorModal();
      return;
    }

    if (enteredAge <= 0) {
      props.generateErrorMessage("Age Must Be a Positive Number");
      props.displayErrorModal();
      return;
    }

    const newUser = {
      name: enteredUsername,
      age: enteredAge,
      id: Math.random(),
    };
    props.addUserToList(newUser);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const text = "Add User";

  return (
    <div className={`${styles["form-container"]}`}>
      <form onSubmit={submitHandler} className={`${styles["form"]}`}>
        <label className={`${styles["form__label"]}`}>UserName</label>
        <input
          onChange={usernameChangeHandler}
          className={`${styles["form__input"]}`}
          value={enteredUsername}
          type="text"
        ></input>
        <label className={`${styles["form__label"]}`}>Age (Years)</label>
        <input
          onChange={ageChangeHandler}
          className={`${styles["form__input"]}`}
          value={enteredAge}
          type="number"
        ></input>
        <button
          text={text}
          onClick={submitHandler}
          className={`${styles["form__button"]}`}
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default Form;
