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
          alt="Instructor"
          src="https://generation-sessions.s3.amazonaws.com/9a1cc2cccadd13a868de937f3531f07e/img/listener@2x.png"
          onClick={() => setToggle(!toggle)}
        />
      </span>
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
              {/* Conditional rendering for the error message */}
              {errors?.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
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
              {/* Conditional rendering for the error message */}
              {errors?.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </label>
            <label>
              <Input
                {...register("confirm_password", {
                  required: true,
                  validate: (val: string) => {
                    if (watch("password") !== val) {
                      return "Your passwords do not match";
                    }
                  },
                })}
              />
              {errors?.confirm_password && (
                <p className="error-message">
                  {errors.confirm_password.message}
                </p>
              )}
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
