import { useTranslation } from "react-i18next";
import "./Button.scss";

const Button = ({ icon, text = "button", onClick }) => {
  const { t } = useTranslation(); // t function for translation

  return (
    <button onClick={onClick} className="button">
      <div className="icon">{icon}</div>
      <div className="text">{t(text)}</div> {/* Translate the text */}
    </button>
  );
};

export default Button;
