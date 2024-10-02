import './styles.scss'

const Button = ({className = "", errorMessage = "", text="button", ...props }) => {
    return (
      <div className="button-wrap">
        <button
          {...props}
          className={`button ${className} ${errorMessage ? 'error' : ''}`}
        >
          {text}
        </button>
      </div>
    );
  }
  
  export default Button;