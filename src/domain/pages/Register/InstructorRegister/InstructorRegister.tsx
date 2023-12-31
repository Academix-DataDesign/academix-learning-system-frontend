import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import PersonIcon from "../../../UI/PersonIcon/PersonIcon";
import { Button } from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import "./InstructorRegister.scss";
import { register } from "../../../../apis/auth";

const InstructorRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await register(formData);
      console.log(response);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="register-l-light">
      <div className="background">
        <div className="overlap">
          <div className="form-bg" />
          <div className="left">
            <Link to="/register-learner">
              <PersonIcon role="instructor" />
            </Link>
            <div className="text-wrapper-2 caa-text">Create an account</div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="first-group">
                <Input
                  className="name"
                  placeholder="Name"
                  defaultValue={formData.name}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      name: e.target.value,
                    }))
                  }
                />
                <Input
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
              </div>
              <div className="second-group">
                <Input
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
                <Input
                  type="password"
                  placeholder="Confirm password"
                  defaultValue={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      confirmPassword: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="third-row">
                <input type="file" hidden />
                <p>
                  Drop your <br />
                  License
                </p>
              </div>
              <Button
                variant={"login"}
                size={"medium"}
                style={{ width: "300px" }}
                className="text-wrapper btn"
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
                  Already have an account?&nbsp;
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

export default InstructorRegister;
