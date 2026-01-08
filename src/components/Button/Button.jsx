import './Button.css'

function Button({ children, type = 'primary', onClick, className = '', ...props }) {
  return (
    <button
      className={`btn btn-${type} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="btn-content">{children}</span>
      <span className="btn-glint"></span>
    </button>
  )
}

export default Button

