import "./Button.scss";

interface Button {
  variant: string;
  text: string;
}

export const Button: React.FC<Button> = ({ variant, text }) => {
  return (
    <button type="submit" className={`btn ${variant}`}>
      {text}
    </button>
  );
};

export default Button;
