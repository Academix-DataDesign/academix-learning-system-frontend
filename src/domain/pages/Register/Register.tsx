import Button from "../..//UI/Button/Button";
import Input from "../../UI/Input/Input";
import "./Register.scss";

const UserRegister = () => {
  return (
    <div className="register-l-light">
      <div className="div">
        <div className="overlap">
          <div className="form-bg" />
          <div className="left">
            <div className="BTN">
              <Button size={"medium"} className="w-full mt-5" variant="login2">
                Register
              </Button>
            </div>
            <div className="form">
              <Input placeholder="Confirm Password" className="confirm-pass" />
              <Input placeholder="Password" className="pass" />
              <Input placeholder="Email" className="email" />
              <Input placeholder="Name" className="name" />
            </div>
            <div className="text-wrapper-2">
              Create an <span>account</span>
            </div>
            <img className="listener" alt="Listener" src="listener.png" />
          </div>
          <div className="right">
            <div className="overlap-2">
              <div className="bg">
                <div className="rectangle" />
              </div>
              <div className="overlap-group-wrapper">
                <Button variant={"register"} className="text-wrapper-3 w-full">
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
