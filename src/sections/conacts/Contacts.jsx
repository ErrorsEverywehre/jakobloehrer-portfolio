import { useTranslation } from "react-i18next";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import SectionTitle from "../../common/sectionTitle/SectionTitle";
import TextBox from "../../common/textBox/TextBox";
import ContactForm from "../../components/contactForm/ContactForm";
import "./Contacts.scss";

const Contacts = ({ forwardedRef }) => {
  const { t } = useTranslation();
  return (
    <div ref={forwardedRef} className="contact">
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
              {/* <div className="tel-wrapper">
                <a href="tel:0792514968">
                 <AiFillPhone /> 0792514968
                </a>
              </div> */}
            </div>
          </div>
          <div className="socials">
            <div className="socials-title">{t("SOCIALS")}</div>
            <div className="socials-icons">
              <a href="https://ch.linkedin.com/in/jakob-l%C3%B6hrer-2ab7a02a0">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/jakobloehrer">
                <AiFillGithub  />
              </a>
              <a href="https://www.instagram.com/jakob.loehrer">
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="image-wrapper">
        <img src={skeletonStanding} alt="Skeleton Standing" />
      </div> */}
    </div>
  );
};

export default Contacts;
