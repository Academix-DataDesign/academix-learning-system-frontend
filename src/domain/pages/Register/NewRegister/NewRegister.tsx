import { useEffect, useState } from "react";
import "./NewRegister.scss";
import { Button } from "../../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import Input from "../../../UI/Input/Input";
import Dropzone from "../../../UI/Dropzone/Dropzone";
import { useForm } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
  confirm_password: string;
  file: string;
  name: string;
}

export default function NewRegister() {
  const [toggle, setToggle] = useState(false);
  const { register, handleSubmit, formState, watch } = useForm<FormValues>();
  const { errors } = formState;
  const navigate = useNavigate();
  useEffect(() => {
    const imgBtn = document.querySelector(".img__btn");
    const cont = document.querySelector(".cont");

    const handleClick = () => {
      if (cont) {
        cont.classList.toggle("s--signup");
      }
    };

    if (imgBtn && cont) {
      imgBtn.addEventListener("click", handleClick);
    }

    return () => {
      if (imgBtn && cont) {
        imgBtn.removeEventListener("click", handleClick);
      }
    };
  }, []);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const reqOnSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <>
      <div className="vector" onClick={() => navigate("/home")}>
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
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="cont">
        {!toggle ? (
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
        ) : (
          <div className="form sign-in">
            <span className="switch-icon">
              <img
                className="instructor-img"
                alt="Instructor"
                src="https://generation-sessions.s3.amazonaws.com/9a1cc2cccadd13a868de937f3531f07e/img/listener@2x.png"
                onClick={() => setToggle(!toggle)}
              />
            </span>
            <h2>Create an account</h2>
            <form onSubmit={handleSubmit(reqOnSubmit)} noValidate>
              <div className="form-container">
                <div className="first-input-row">
                  <label>
                    <Input
                      type="text"
                      placeholder="Name"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />
                  </label>
                  <label>
                    <Input
                      type="text"
                      placeholder="Email"
                      {...register("email", {
                        pattern: {
                          value:
                            /^[a-zA-Z0-0.!#$%&'*+/=?^_`{|}*~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/,
                          message: "Invalid email",
                        },
                      })}
                    />
                    <p className="error-message">{errors?.email?.message}</p>
                  </label>
                </div>
                <div className="second-input-row">
                  <label>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    <p className="error-message">{errors?.password?.message}</p>
                  </label>
                  <label>
                    <Input
                      {...register("confirm_password", {
                        required: true,
                        validate: (val: string) => {
                          if (watch("password") != val) {
                            return "Your passwords do no match";
                          }
                        },
                      })}
                    />
                  </label>
                </div>
              </div>
            

            <div className="file">
              <Dropzone style={{ width: "520px", height: "200px" }} />
            </div>

            <Button
              className="submit-2"
              style={{ marginBottom: "10px" }}
              variant={"login"}
            >
              Sign Up
            </Button>
            </form>
          </div>
        )}

        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p style={{ fontSize: "16px" }}>
                Sign up and discover great amount of new opportunities!
              </p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p style={{ fontSize: "16px" }}>
                If you already have an account, just sign in.
              </p>
            </div>
            <div className="img__btn">
              <span className="m--up">Login In</span>
              <span className="m--in">Sign Up</span>
            </div>
          </div>
          <form
            className="form sign-up"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <h2 style={{ color: "#235284", marginBottom: "20px" }}>Log In</h2>
            <label>
              <Input
                style={{ marginTop: "50px" }}
                type="text"
                placeholder="Email"
                {...register("email", {
                  pattern: {
                    value:
                      /^[a-zA-Z0-0.!#$%&'*+/=?^_`{|}*~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/,
                    message: "Invalid email",
                  },
                })}
              />
              <p className="error-message">{errors?.email ? (errors?.email?.message) : (' ')}</p>
            </label>

            <label>
              <Input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              <p className="error-message">{errors?.password?.message}</p>
            </label>
            <p className="forgot-pass">Forgot password?</p>

            <Button variant="login" className="submit-2">
              Log in
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
