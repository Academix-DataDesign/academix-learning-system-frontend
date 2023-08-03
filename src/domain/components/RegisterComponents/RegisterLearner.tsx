import { Button } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { useForm } from "react-hook-form";

interface RegisterLearner {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const RegisterLearner = ({ toggle, setToggle }: RegisterLearner) => {
  const { register, handleSubmit, formState, watch } = useForm<FormValues>();
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
          src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/instructor@2x.png"
          onClick={() => setToggle(!toggle)}
        />
      </span>
      <h2>Create an account</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>
          <Input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors?.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </label>
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
          {errors?.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </label>
        <label>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors?.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </label>
        <label>
          <Input
            {...register("confirm_password", {
              required: "Confirm password is required",
              validate: (val: string) => {
                if (watch("password") !== val) {
                  return "Your passwords do not match";
                }
                return true;
              },
            })}
            placeholder="Confirm password"
          />
          {errors?.confirm_password && (
            <p className="error-message">{errors.confirm_password.message}</p>
          )}
        </label>

        <Button
          style={{ marginLeft: "28%" }}
          className="submit-2"
          variant={"login"}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default RegisterLearner;
