import { useEffect, useState } from "react";
import "./NewRegister.scss";
import { Button } from "../../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import Input from "../../../UI/Input/Input";
import { useForm } from "react-hook-form";
import RegisterLearner from "../../../components/RegisterComponents/RegisterLearner";
import RegisterInstructor from "../../../components/RegisterComponents/RegisterInstructor";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../../../../slices/authSlice";

interface FormValues {
  email: string;
  password: string;
}

export default function NewRegister() {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm<FormValues>();
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

  const onSubmit = async (formData: FormValues) => {
    try {
      const { data } = await axios.post(
        "https://api.academix.me/api/v1/login",
        formData
      );
      dispatch(setUser(data));
      localStorage.setItem("userToken", JSON.stringify(data.token));
      navigate(-1);
    } catch (error) {
      console.log(error.message);
    }
  };

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
          <RegisterLearner toggle={toggle} setToggle={setToggle} />
        ) : (
          <RegisterInstructor toggle={toggle} setToggle={setToggle} />
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
            <p
              style={{
                position: "absolute",
                color: "red",
                left: "195px",
                top: "150px",
              }}
            >
              {errors?.email ? errors?.email?.message : " "}
            </p>
            <label>
              <Input
                style={{ marginTop: "80px" }}
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-0.!#$%&'*+/=?^_`{|}*~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/,
                    message: "Invalid email",
                  },
                })}
              />
            </label>
            <p
              style={{
                position: "absolute",
                color: "red",
                left: "195px",
                top: "231px",
              }}
            >
              {errors?.password?.message}
            </p>
            <label>
              <Input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
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
