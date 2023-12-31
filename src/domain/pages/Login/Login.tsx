import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Input from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import "./Login.scss";
import { login } from "../../../apis/auth";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      const { token } = response;

      localStorage.setItem("api_token", token);

      navigate("/");
    } catch (error: any) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="register-l-light">
      <div className="background">
        <div className="overlap">
          <div className="form-bg" />
          <div className="l-right">
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
                  Not registered yet?&nbsp;
                  <Link to="/register-learner">Register now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="l-left">
            <div className="text-wrapper-2 caa-text">Log In</div>
            <p className="error">{error}</p>
            <form className="form" onSubmit={handleSubmit}>
              <Input
                required
                className="email"
                placeholder="Email"
                defaultValue={formData.email}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
              />
              <br />
              <Input
                required
                className="password"
                type="password"
                placeholder="Password"
                defaultValue={formData.password}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    password: e.target.value,
                  }))
                }
              />
              <br />
              <Link to="/forgot-password" className="fyp-text">
                Forgot your password?
              </Link>
              <br />
              <Button
                variant={"login"}
                size={"medium"}
                style={{ width: "300px" }}
                className="text-wrapper"
              >
                Log In
              </Button>
            </form>
          </div>
        </div>
        <div className="vector" onClick={() => navigate("/")}>
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default Login;
