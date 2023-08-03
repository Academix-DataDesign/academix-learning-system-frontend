import { Button } from "../../UI/Button/Button";
import Dropzone from "../../UI/Dropzone/Dropzone";
import Input from "../../UI/Input/Input";
import { useForm } from "react-hook-form";

interface RegisterInstructorProps {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const RegisterInstructor = ({ toggle, setToggle }: RegisterInstructorProps) => {
  const { register, handleSubmit, formState, watch } = useForm<FormValues>();

  // Explicitly define the type for the errors object
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="form sign-in">
      <span className="switch-icon">
        <img
          className="instructor-img"
          style={{ position: "relative", zIndex: 999 }}
          alt="Instructor"
          src="https://generation-sessions.s3.amazonaws.com/9a1cc2cccadd13a868de937f3531f07e/img/listener@2x.png"
          onClick={() => setToggle(!toggle)}
        />
      </span>
      <h2 style={{ position: "relative", top: "-20px" }}>Create an account</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-container">
          <div className="first-input-row">
            {errors?.name && (
              <p
                style={{
                  position: "absolute",
                  top: "95px",
                  color: "red",
                  left: "60px",
                }}
              >
                {errors.name.message}
              </p>
            )}
            <label>
              <Input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: "Name is required",
                })}
              />
            </label>
            {errors?.email && (
              <p
                style={{
                  position: "absolute",
                  top: "95px",
                  color: "red",
                  left: "330px",
                }}
              >
                {errors.email.message}
              </p>
            )}
            <label>
              <Input
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
          </div>
          <div className="second-input-row">
            {errors?.password && (
              <p
                style={{
                  position: "absolute",
                  top: "175px",
                  color: "red",
                  left: "60px",
                }}
              >
                {errors.password.message}
              </p>
            )}
            <label>
              <Input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
            </label>
            {errors?.confirm_password && (
              <p
                style={{
                  position: "absolute",
                  top: "175px",
                  color: "red",
                  left: "330px",
                }}
              >
                {errors.confirm_password.message}
              </p>
            )}
            <label>
              <Input
                {...register("confirm_password", {
                  required: "Confirm password is required",
                  validate: (val: string) => {
                    if (watch("password") !== val) {
                      return "Your passwords do not match";
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
  );
};

export default RegisterInstructor;
