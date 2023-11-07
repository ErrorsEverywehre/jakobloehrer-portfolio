import { useTranslation } from "react-i18next";
import "./TextBox.scss";

const TextBox = ({ title, text }) => {
  const { t } = useTranslation(); // t function for translation

  return (
    <div className="textBox">
      {title && <div className="title">{t(title)}</div>}
      <div className="text">{t(text)}</div>
    </div>
  );
};

export default TextBox;
