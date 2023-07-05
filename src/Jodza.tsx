import Input from "./components/UI/Input/Input";
import Button from "./components/UI/Button/Button";


const Jodza = () => {
  return (
    <>
      <h1>Hello there team of Academix!</h1>
      <h2>We will build something awesome!</h2>
      <Input variant='defaul' placeholder="Email"/>
      <br />
      <Button variant='login2'>Log In</Button>
      <Button variant='login'>Log In</Button>
      <Button variant='register'>Register</Button>
      <Button variant='register2'>Register</Button>
    </>
  );
};

export default Jodza;
