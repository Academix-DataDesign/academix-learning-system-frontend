import Input from "./domain/UI/Input/Input";
import { Button } from "./domain/UI/Button/Button";
import Slider from "./domain/UI/Slider/Slider";

const Show = () => {
  return (
    <>
      <h1>Hello there team of Academix!</h1>
      <br />
      <br />
      <Slider />
      {/* <Input variant="defaul" placeholder="Email" /> */}
      <br />
      <Button variant="login2">Log In</Button>
      <Button variant="login">Log In</Button>
      <Button variant="register">Register</Button>
      <Button variant="register2">Register</Button>
    </>
  );
};

export default Show;
