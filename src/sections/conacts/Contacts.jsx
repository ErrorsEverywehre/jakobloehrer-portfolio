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
import skeletonStanding from "./../../assets/skeletonStanding.png";
import "./Contacts.scss";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <div className="contact">
      <SectionTitle title={t("CONTACT")} />
      <div className="textBox-wrapper">
        <TextBox text={t("CONTACT_ME_TEXT")} />
      </div>
      <div className="content-wrapper">
        <div className="left-wrapper">
          <div className="contactForm-wrapper">
            <ContactForm />
          </div>
        </div>
        <div className="right-wrapper">
          <div className="directContact">
            <div className="directContact-title">{t("DIRECT_CONTACT")}</div>
            <div className="contact-info">
              <div className="mail-wrapper">
                <AiOutlineMail />
                <a href="mailto:jakob.loehrer@outlook.com">
                  jakob.loehrer@outlook.com
                </a>
              </div>
              <div className="tel-wrapper">
                <AiFillPhone /> 0792514968
              </div>
            </div>
          </div>
          <div className="socials">
            <div className="socials-title">{t("SOCIALS")}</div>
            <div className="socials-icons">
              <AiOutlineInstagram />
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={skeletonStanding} alt="Skeleton Standing" />
      </div>
    </div>
  );
};

export default Contacts;
