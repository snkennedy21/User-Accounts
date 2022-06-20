import styles from "./App.module.css";
import Form from "./Components/Form";

function App() {
  return (
    <div className={`${styles["app"]}`}>
      <Form></Form>
    </div>
  );
}

export default App;
