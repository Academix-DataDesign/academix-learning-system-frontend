import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { IoArrowBackSharp } from "react-icons/io5";
import PersonIcon from "../../UI/PersonIcon/PersonIcon";
import { Button } from "../../UI/Button/Button";
import "./ChooseRole.scss";

const ChooseRole = () => {
  const navigate = useNavigate();

  const handleLearnerClick = () => {
    navigate("/register-learner");
  };
  const handleInstructorClick = () => {
    navigate("/register-instructor");
  };

  return (
    <div className="register-l-light">
      <div className="background">
        <div className="overlap">
          <div className="form-bg" />
          <div className="left">
            <div className="vector" onClick={() => navigate("/")}>
              <IoArrowBackSharp />
              Go back
            </div>
            <div className="group">
              <div className="option">
                <PersonIcon role="learner" />
                <Button
                  variant={"login"}
                  style={{ width: "300px" }}
                  className="text-wrapper"
                  onClick={handleLearnerClick}
                >
                  Learner
                </Button>
              </div>
              <div className="option">
                <PersonIcon role="instructor" />
                <Button
                  variant={"login"}
                  style={{ width: "300px" }}
                  className="text-wrapper"
                  onClick={handleInstructorClick}
                >
                  Instructor
                </Button>
              </div>
            </div>
            <div className="text-wrapper-2 caa-text way-text">Who are you?</div>
          </div>
        </div>
        <div className="vector" onClick={() => navigate("/")}>
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
