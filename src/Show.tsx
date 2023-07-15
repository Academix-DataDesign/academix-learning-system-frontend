import Slider from "./domain/UI/Slider/Slider";
import Switch from "./domain/UI/Switch/Switch";
import Breadcrumbs from "./domain/UI/Breadcrumbs/Breadcrumbs";
import Burger from "./domain/UI/Burger/Burger";
import Tabs from "./domain/UI/Tabs/Tabs";
import Dialog from "./domain/UI/Dialog/Dialog";
import Blockquote from "./domain/UI/Blockquote/Blockquote";
import Dropzone from "./domain/UI/Dropzone/Dropzone";

const Show = () => {
  return (
    <>
      <h1>Hello there team of Academix!</h1>
      {/* <Button variant="login2">Log In</Button> */}
      <br />
      {/* <Input variant="defaul" placeholder="Email" /> */}
      <Slider />
      <br />
      <Switch label="Some label" />
      <br />
      <Breadcrumbs />
      <br />
      <Burger />
      <br />
      <Tabs />
      <br />
      <Dialog />
      <br />
      <Blockquote />
      <br />
      <Dropzone />
      {/* <Button variant="login">Log In</Button>
      <Button variant="register">Register</Button>
      <Button variant="register2">Register</Button>
      <h1>
        <a style={{ color: "#000" }} href="/register-learner">
          Register learner
        </a>
      </h1> */}
    </>
  );
};

export default Show;
