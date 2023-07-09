import { Button } from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import "./UserRegister.scss";
import { AiOutlineClose } from "react-icons/ai";
import PersonIcon from "../../../UI/PersonIcon/PersonIcon";

export const UserRegister = () => {
  const navigate = useNavigate();

  return (
    <div className="register-l-light">
      <div className="background">
        <div className="overlap">
          <div className="form-bg" />
          <div className="left">
            <PersonIcon role="learner" />
            <div className="text-wrapper-2 caa-text">Create an account</div>
            <form action="" className="form">
              <Input className="name" placeholder="Name" />
              <br />
              <Input className="email" placeholder="Email" />
              <br />
              <Input className="password" placeholder="Password" />
              <br />
              <Input className="confirm-pass" placeholder="Confirm password" />
              <br />
              <Button
                variant={"login"}
                size={"medium"}
                style={{ width: "300px" }}
                className="text-wrapper"
              >
                Register
              </Button>
            </form>
          </div>
          <div className="right">
            <div className="bg">
              <div className="overlap-2">
                <div className="bg">
                  <div className="rectangle" />
                </div>
                <div className="overlap-group-wrapper">
                  <h1 className="h-1 wb-text">
                    Welcome <br /> back
                  </h1>
                </div>
                <div className="text-wrapper-4">
                  Already have an account?
                  <Link to="/login">Log In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vector" onClick={() => navigate("/")}>
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
