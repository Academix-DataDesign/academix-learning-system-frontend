import Input from "./domain/UI/Input/Input";
import { Button } from "./domain/UI/Button/Button";

const Show = () => {
  return (
    <>
      <h1>Hello there team of Academix!</h1>
      <h2>We will build something awesome!</h2>
      <Input variant="defaul" placeholder="Email" />
      <br />
      <Button variant="login2">Log In</Button>
      <Button variant="login">Log In</Button>
      <Button variant="register">Register</Button>
      <Button variant="register2">Register</Button>
    </>
  );
};

export default Show;
