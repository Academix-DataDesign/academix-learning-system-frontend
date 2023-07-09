import { Button } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import "./ForgotPassword.scss";

const ForgotPassword = () => {
  return (
    <div className="forget-password-container">
      <div className="div-container">
        <div className="overlap-group">
          <div className="bg" />
          <div className="inner-container">
            <div className="back-button">Back to Log In</div>
            <Button variant={"login2"} className="submit-button">Submit</Button>
            <Input placeholder="Email" className="email-input"></Input>
            <svg
              className="image"
              width="170"
              height="170"
              viewBox="0 0 170 170"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="170" height="170" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_92_296"
                    transform="scale(0.00444444)"
                  />
                </pattern>
                <image
                  id="image0_92_296"
                  width="225"
                  height="225"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>

            <div className="description">
              Enter your email and we’ll send you a link to reset your password.
            </div>
            <div className="heading">Forgot password</div>
          </div>
        </div>

        <svg
          className="vector-icon"
          style={{
            height: "40px",
            left: "1848px",
            position: "absolute",
            top: "34px",
            width: "40px",
          }}
          fill="none"
          height="41"
          viewBox="0 0 41 41"
          width="41"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M3 38L20.5 20.5L38 38M38 3L20.4967 20.5L3 3"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </svg>
      </div>
    </div>
  );
};

export default ForgotPassword;
