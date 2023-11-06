import "./Button.scss";

const Button = ({ icon, text = "button", onClick}) => {
  return (
    <button onClick={onClick} className="button">
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </button>
  );
};

export default Button;
