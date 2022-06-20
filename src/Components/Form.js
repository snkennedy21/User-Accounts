import styles from "./Form.module.css";

const Form = function () {
  return (
    <div className={`${styles["form-container"]}`}>
      <form className={`${styles["form"]}`}>
        <label className={`${styles["form__label"]}`}>UserName</label>
        <input className={`${styles["form__input"]}`}></input>
        <label className={`${styles["form__label"]}`}>Age (Years)</label>
        <input className={`${styles["form__input"]}`}></input>
        <button className={`${styles["form__button"]}`}>Add User</button>
      </form>
    </div>
  );
};

export default Form;
