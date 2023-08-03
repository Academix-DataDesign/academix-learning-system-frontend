import { Button } from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { setUser } from "../../../slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (formData: FormValues) => {
    try {
      closeSnackbar();
      const { data } = await axios.post(
        "https://api.academix.me/api/v1/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );
      dispatch(setUser(data));
      localStorage.setItem("userToken", JSON.stringify(data.token));
      navigate('/');
    } catch (e) {
      enqueueSnackbar(
        e.response && e.response.data && e.response.data.message
          ? e.response.data.message
          : e.message,
        {
          variant: "error",
          autoHideDuration: 3000,
        }
      );
    }
  };

  return (
    <div className="form sign-in">
      <span className="switch-icon">
        <img
          className="instructor-img"
          style={{ position: "relative", zIndex: 999 }}
          alt="Instructor"
          src="https://anima-uploads.s3.amazonaws.com/projects/649474d8048a6087ab20c40b/releases/6495c491a1b0005e5700e644/img/instructor@2x.png"
          onClick={() => setToggle(!toggle)}
        />
      </span>
      <h2 style={{ position: "relative", top: "-20px" }}>Create an account</h2>
      {errors?.name && (
        <p
          style={{
            position: "absolute",
            color: "red",
            top: "95px",
            left: "195px",
          }}
        >
          {errors.name.message}
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
              color: "red",
              top: "177px",
              left: "195px",
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
        {errors?.password && (
          <p
            style={{
              position: "absolute",
              color: "red",
              top: "258px",
              left: "195px",
            }}
          >
            {errors.password.message}
          </p>
        )}
        <label>
          <Input
            style={{ marginTop: "20px" }}
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
              color: "red",
              top: "339px",
              left: "195px",
            }}
          >
            {errors.confirm_password.message}
          </p>
        )}
        <label>
          <Input
          type="password"
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
