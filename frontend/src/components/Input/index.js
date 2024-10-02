import './styles.scss'

const Input = ({ className = "", errorMessage = "", ...props }) => {
    return (
      <div className="input-wrap">
        <input
          {...props}
          className={`input ${className} ${errorMessage ? 'error' : ''}`}
        />
        <div className="error-message">{errorMessage && errorMessage}</div>
      </div>
    );
  }
  
  export default Input;