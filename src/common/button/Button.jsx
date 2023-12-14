// Button.jsx
import { useTranslation } from "react-i18next";
import "./Button.scss";

const Button = ({ icon, text, onClick }) => {
  const { t } = useTranslation(); // t function for translation

  return (
    <button onClick={onClick} className="button">
      {icon && <div className="icon">{icon}</div>}
      {text && <div className="text">{t(text)}</div>}
    </button>
  );
};

export default Button;
