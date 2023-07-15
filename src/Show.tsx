import Slider from "./domain/UI/Slider/Slider";
import { Button } from "./domain/UI/Button/Button";
import Input from "./domain/UI/Input/Input";
const Show = () => {
  return (
    <>
      <h1>Hello there team of Academix!</h1>
      {/* <Button variant="login2">Log In</Button> */}
      <br />
      {/* <Input variant="defaul" placeholder="Email" /> */}
      <Slider />
      <Button variant="login">Log In</Button>
      <Button variant="register">Register</Button>
      <Button variant="register2">Register</Button>
      <h1>
        <a style={{ color: "#000" }} href="/register-learner">
          Register learner
        </a>
      </h1>
    </>
  );
};

export default Show;
