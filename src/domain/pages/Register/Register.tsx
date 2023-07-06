import { Button } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import "./Register.scss";

export const UserRegister = () => {
  return (
    <div className="register-l-light">
      <div className="div">
        <div className="overlap">
          <div className="form-bg" />
          <div className="left">
            <div className="BTN">
              <Button
                variant={"login"}
                size={"medium"}
                className="text-wrapper w-full"
              >
                Register
              </Button>
            </div>
            <div className="form">
              <Input className="confirm-pass" placeholder="Confirm password" />
              <Input className="pass" placeholder="Password" />
              <Input className="email" placeholder="Email" />
              <Input className="name" placeholder="Name" />
            </div>
            <div className="text-wrapper-2">
              Create an account
            </div>
            <img className="listener" alt="Listener" src="listener.png" />
          </div>
          <div className="right">
            <div className="overlap-2">
              <div className="bg">
                <div className="rectangle" />
              </div>
              <div className="overlap-group-wrapper">
                <Button
                  style={{ width: "200px", color: "white" }}
                  size={"medium"}
                  variant={"login"}
                  className="text-wrapper-3 w-full"
                >
                  Register
                </Button>
              </div>
              <div className="text-wrapper-4">Not joined? Register now.</div>
              <h1 className="h-1">Welcome back</h1>
            </div>
          </div>
        </div>
        <img className="vector" alt="Vector" src="vector.svg" />
      </div>
    </div>
  );
};

export default UserRegister;
