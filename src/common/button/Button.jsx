import "./Button.scss";

const Button = ({ icon, text = "button" }) => {
  return (
    <button class="button">
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </button>
  );
};

export default Button;
