import styles from "./App.module.css";
import Form from "./Components/Form";
import List from "./Components/List";
import Modal from "./Components/Modal";
import { useState } from "react";

function App() {
  const items = [
    { name: "Brian", age: 34, id: "e1" },
    { name: "James", age: 31, id: "e2" },
    { name: "Moyra", age: 25, id: "e3" },
    { name: "Sean", age: 28, id: "e4" },
  ];

  const [listItems, setListItems] = useState(items);
  const [errorMessage, setErrorMessage] = useState("");
  const [invalidInputs, setInvalidInputs] = useState(false);

  const addUserToList = function (newUser) {
    setListItems((prevItems) => {
      return [...prevItems, newUser];
    });
  };

  const generateErrorMessage = function (errorMessage) {
    setErrorMessage(errorMessage);
  };

  const displayErrorModal = function () {
    setInvalidInputs(true);
  };

  const closeErrorModal = function () {
    console.log("hi");
    setInvalidInputs(false);
  };

  return (
    <div className={`${styles["app"]}`}>
      <Form
        displayErrorModal={displayErrorModal}
        generateErrorMessage={generateErrorMessage}
        addUserToList={addUserToList}
      ></Form>
      <List listItems={listItems}></List>
      <Modal
        closeErrorModal={closeErrorModal}
        invalidInputs={invalidInputs}
        errorMessage={errorMessage}
      ></Modal>
    </div>
  );
}

export default App;
