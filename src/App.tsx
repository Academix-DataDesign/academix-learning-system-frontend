import { Fragment } from "react";
import Input from "./components/UI/Input/Input";
import Jodza from "./Jodza";

function App() {
  return (
    <Fragment>
      <h1>Hello world! Checking auto deployment feature!</h1>
      <Input classes={["idk", "idk"]} type="text" placeholder={"idk"} />
      <Jodza />
    </Fragment>
  );
}

export default App;
