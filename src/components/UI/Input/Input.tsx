import "./Input.scss";
interface InputProps {
  classes: string[];
  type: string;
  required?: boolean;
  placeholder: string;
  options?: string[];
}

const Input = ({
  classes,
  type,
  required,
  placeholder,
  options,
}: InputProps) => {
  if (type === "select" && options && options.length > 0) {
    return (
      <div className={`${classes.join(" ")} input`}>
        <div className="rectangle-wrapper">
          <select required={required} placeholder={placeholder}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.join(" ")}>
      <div className="rectangle-wrapper">
        <input
          className="input"
          type={type}
          required={required}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
