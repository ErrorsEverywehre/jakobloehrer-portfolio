import { useTranslation } from "react-i18next";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import SectionTitle from "../../common/sectionTitle/SectionTitle";
import TextBox from "../../common/textBox/TextBox";
import ContactForm from "../../components/contactForm/ContactForm";
const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div className="contacts">
      <SectionTitle title="CONTACT" />
      <TextBox text="CONTACT_ME_TEXT" />

      <div className="contactForm-wrapper">
        <ContactForm />
      </div>
      <div className="socials">
        <div className="socials-title">{t("SOCIALS")}</div>{" "}
        <div className="socials-icons">
          <AiOutlineInstagram />
          <AiFillLinkedin />
          <AiFillGithub />
        </div>{" "}
      </div>
      <div className="directContact">
        <div className="directContact-title">{t("DIRECT_CONTACT")}</div>
        <div className="socials-icons">
          <div className="mail-wrapper">
            <AiOutlineMail />
            <a href="jakob.loehrer@outlook.com">jakob.loehrer@outlook.com</a>
          </div>
          <div className="tel-wrapper">
            <AiFillPhone /> 0792514968
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
