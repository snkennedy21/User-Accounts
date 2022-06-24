import styles from "./ListElement.module.css";

const ListElement = function (props) {
  return (
    <div
      className={`${styles["list__element"]}`}
    >{`${props.name} (${props.age} years old)`}</div>
  );
};

export default ListElement;
