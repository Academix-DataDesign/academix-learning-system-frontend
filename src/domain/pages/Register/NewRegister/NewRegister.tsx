import { useEffect } from "react";
import "./NewRegister.scss";
import { Button } from "../../../UI/Button/Button";
import { useNavigate } from "react-router-dom";


export default function NewRegister() {
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
      // Clean up the event listener when the component unmounts
      if (imgBtn && cont) {
        imgBtn.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <>
      <div className="vector" onClick={() => navigate('/home')}>
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
      <div className="cont">
        <div className="form sign-in">
          <span className="switch-icon">
            <img
              className="instructor-img"
              alt="Instructor"
              src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/instructor@2x.png"
            />
          </span>
          <h2>Welcome back,</h2>
          <label>
            <span>Name</span>
            <input type="email" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" />
          </label>
          <label>
            <span>Confirm Password</span>
            <input type="email" />
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <Button className="submit-2" variant={'login'}>Sign Up</Button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>
                If you already have an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img__btn">
              <span className="m--up">Login In</span>
              <span className="m--in">Sign Up</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Time to feel like home,</h2>
            <label>
              <span>Email</span>
              <input type="text" />
            </label>
            <label>
              <span>Password</span>
              <input type="email" />
            </label>

            <Button variant="login" className="submit-2" >Login</Button>
          </div>
        </div>
      </div>
    </>
  );
}
