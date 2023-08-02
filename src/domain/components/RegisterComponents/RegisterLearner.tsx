import { Button } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

interface RegisterLearner {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

const RegisterLearner = ({ toggle, setToggle }: RegisterLearner) => {
  return (
    <div className="form sign-in">
      <span className="switch-icon">
        <img
          className="instructor-img"
          alt="Instructor"
          src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/instructor@2x.png"
          onClick={() => setToggle(!toggle)}
        />
      </span>
      <h2>Create an account</h2>
      <label>
        <Input type="text" placeholder="Name" />
      </label>
      <label>
        <Input type="email" placeholder="Email" />
      </label>
      <label>
        <Input type="password" placeholder="Password" />
      </label>
      <label>
        <Input type="password" placeholder="Confirm password" />
      </label>

      <Button
        style={{ marginLeft: "28%" }}
        className="submit-2"
        variant={"login"}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default RegisterLearner;
