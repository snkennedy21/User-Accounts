import styles from "./List.module.css";
import ListElement from "./ListElement";

const List = function (props) {
  const listComponents = props.listItems.map((el) => (
    <ListElement name={el.name} age={el.age} key={el.id}></ListElement>
  ));

  return (
    <div className={`${styles["list-container"]}`}>
      <ul className={`${styles["list"]}`}>{listComponents}</ul>
    </div>
  );
};

export default List;
