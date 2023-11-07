import { useTranslation } from "react-i18next";
import "./SectionTitle.scss";

const SectionTitle = ({ title }) => {
  const { t } = useTranslation(); // t function for translation

  return (
    <div className="sectionTitle">
      <div className="text">{t(title)}</div> {/* Translate the title */}
    </div>
  );
};

export default SectionTitle;
