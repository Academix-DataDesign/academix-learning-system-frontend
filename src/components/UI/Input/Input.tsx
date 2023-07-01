interface Input {
  classes: string[];
  type: string;
  required?: boolean;
  placeholder: string;
  options?: string[];
}

const Input: React.FC<Input> = ({
  classes,
  type,
  required,
  placeholder,
  options,
}) => {
  if (type === "select" && options && options.length > 0) {
    return (
      <div className={classes.join(" ")}>
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
        <input type={type} required={required} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Input;
