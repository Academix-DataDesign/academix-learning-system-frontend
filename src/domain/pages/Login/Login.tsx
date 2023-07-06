import { Button } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import "./Login.scss";

export const Login = () => {
  return (
    <div className="log-in-light-mode">
      <div className="div">
        <div className="overlap">
          <div className="left">
            <div className="overlap-group">
              <div className="bg">
                <div className="rectangle" />
              </div>
              <div className="BTN">
                <Button variant={"register2"} className="text-wrapper">Register</Button>
              </div>
              <div className="text-wrapper-2">Not joined? Register now.</div>
              <h1 className="h-1">Welcome back</h1>
            </div>
          </div>
          <div className="right">
            <div className="overlap-group-wrapper">
              <Button variant={"login2"} className="text-wrapper-3" style={{width: '320px',height: '60px'}}>Log In</Button>
            </div>
            <div className="text-wrapper-4">Forgot your password?</div>
            <Input className="pass" placeholder="Password" />
            <Input className="email" placeholder="Email" />
            <div className="text-wrapper-5">Log In</div>
          </div>
        </div>
        <div className="vector">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 38L20.5 20.5L38 38M38 3L20.4967 20.5L3 3"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Login;
