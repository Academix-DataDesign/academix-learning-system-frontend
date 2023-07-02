import "./Button.scss";

interface Button {
  variant: string;
  text: string;
}

const Button = ({ variant, text }: Button) => {
  return (
    <button type="submit" className={`btn ${variant}`}>
      {text}
    </button>
  );
};

export default Button;
