import "./styles.scss";

const Input = ({ className = "", icon = "", errorMessage = "", ...props }) => {
  return (
    <div className="input-wrap">
      <input
        {...props}
        className={` input
              ${className}
              ${errorMessage ? "error" : ""}
              ${icon ? `${icon}` : ""}
            `}
      />
      <div className="error-message">{errorMessage && errorMessage}</div>
    </div>
  );
};

export default Input;
