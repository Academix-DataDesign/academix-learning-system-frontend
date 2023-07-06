import "./InstructorRegister.scss";

export const InstructorRegister = () => {
  return (
    <div className="register-i-light">
      <div className="div">
        <div className="overlap">
          <div className="form-bg" />
          <div className="left">
            <img className="BTN" alt="Btn" src="image.jpg" />
            <div className="form">
              <img className="drop" alt="Drop" src="drop.jpg" />
              <img className="confirm-pass" alt="Confirm pass" src="confirm-pass.png" />
              <img className="pass" alt="Pass" src="pass.png" />
              <img className="email" alt="Email" src="email.png" />
              <img className="name" alt="Name" src="name.png" />
            </div>
            <div className="text-wrapper">Create an account</div>
            <img className="instructor" alt="Instructor" src="instructor.png" />
          </div>
          <div className="right">
            <div className="overlap-group">
              <div className="bg">
                <div className="rectangle" />
              </div>
              <img className="img" alt="Btn" src="BTN.jpg" />
              <div className="text-wrapper-2">Not joined? Register now.</div>
              <h1 className="h-1">Welcome back</h1>
            </div>
          </div>
        </div>
        <img className="vector" alt="Vector" src="vector.svg" />
      </div>
    </div>
  );
};

export default InstructorRegister;