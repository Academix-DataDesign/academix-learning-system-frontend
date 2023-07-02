import { Fragment } from "react";
import Input from "./components/UI/Input/Input";
import Button from "./components/UI/Button/Button";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <h1>Hello there team of Academix!</h1>
      <h2>We will build something awesome!</h2>
      <Input classes={["idk", "idk"]} type="text" placeholder={"Email"} />
      <br />
      <Button text="Log In" variant="" />
      <Button text="Register" variant="" />
    </Fragment>
  );
}

export default App;
