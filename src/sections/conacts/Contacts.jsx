import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import SectionTitle from "../../common/sectionTitle/SectionTitle";
import TextBox from "../../common/textBox/TextBox";
const Contacts = () => {
  return (
    <div className="contacts">
      <SectionTitle title="Contacts" />
      <TextBox text="feel free to contact me bla bla " />

      <div className="socials">
        <div className="socials-title">Socials</div>{" "}
        <div className="socials-icons">
          <AiOutlineInstagram />
          <AiFillLinkedin />
          <AiFillGithub />
        </div>{" "}
      </div>
      <div className="directContact">
        <div className="directContact-title">Direct contact</div>
        <div className="socials-icons">
          <div className="mail-wrapper">
            <AiOutlineMail />{" "}
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
