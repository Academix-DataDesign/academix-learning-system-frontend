import { Button } from "../../../UI/Button/Button";
import "./LoginSelect.scss";

const LoginSelect = () => {
  return (
    <div className="login-select-container">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="instructor">
            <img
              className="instructor-img"
              alt="Instructor"
              src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/instructor@2x.png"
            />
            <div className="instructor-btn">
              <Button
                style={{ height: "50px" }}
                variant={"login2"}
                className="w-full instructor-text-wrapper"
              >
                Instructor
              </Button>
            </div>
          </div>
          <div className="learner">
            <img
              className="learner-img"
              alt="Learner"
              src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/learner@2x.png"
            />
            <div className="learner-btn">
              <Button
                style={{ height: "50px" }}
                variant={"login2"}
                className="learner-text w-full"
              >
                Learner
              </Button>
            </div>
          </div>
          <h1 className="heading">Who are you?</h1>
          <div className="back-btn">
            <svg
              className="back-icon"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9375 23.4375H42.1875C42.6019 23.4375 42.9993 23.6021 43.2924 23.8951C43.5854 24.1882 43.75 24.5856 43.75 25C43.75 25.4144 43.5854 25.8118 43.2924 26.1049C42.9993 26.3979 42.6019 26.5625 42.1875 26.5625H10.9375C10.5231 26.5625 10.1257 26.3979 9.83265 26.1049C9.53962 25.8118 9.375 25.4144 9.375 25C9.375 24.5856 9.53962 24.1882 9.83265 23.8951C10.1257 23.6021 10.5231 23.4375 10.9375 23.4375Z"
                fill="#46A2DA"
              />
              <path
                d="M11.5842 25L24.5436 37.9563C24.837 38.2497 25.0018 38.6476 25.0018 39.0625C25.0018 39.4774 24.837 39.8754 24.5436 40.1688C24.2502 40.4622 23.8523 40.627 23.4374 40.627C23.0224 40.627 22.6245 40.4622 22.3311 40.1688L8.26861 26.1063C8.1231 25.9611 8.00766 25.7887 7.92889 25.5989C7.85012 25.409 7.80957 25.2055 7.80957 25C7.80957 24.7945 7.85012 24.591 7.92889 24.4012C8.00766 24.2113 8.1231 24.0389 8.26861 23.8938L22.3311 9.83127C22.6245 9.53787 23.0224 9.37305 23.4374 9.37305C23.8523 9.37305 24.2502 9.53787 24.5436 9.83127C24.837 10.1247 25.0018 10.5226 25.0018 10.9375C25.0018 11.3524 24.837 11.7504 24.5436 12.0438L11.5842 25Z"
                fill="#46A2DA"
              />
            </svg>

            <div className="back-text">Go back</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSelect;
