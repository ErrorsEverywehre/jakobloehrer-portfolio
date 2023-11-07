import { useTranslation } from "react-i18next";
import { MdArrowUpward } from "react-icons/md";
import Button from "../../common/button/Button";
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <p className="div">{t("FOOTER_TEXT")}</p>
      <Button icon={<MdArrowUpward />} text="BACK_TO_TOP" />
    </div>
  );
};
export default Footer;
