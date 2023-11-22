import { useTranslation } from "react-i18next";
import { MdArrowUpward } from "react-icons/md";
import Button from "../../common/button/Button";
import "./Footer.scss";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <p className="div">{t("FOOTER_TEXT")}</p>
      <Button
        onClick={scrollToTop}
        icon={<MdArrowUpward />}
        text="BACK_TO_TOP"
      />
    </div>
  );
};
export default Footer;
