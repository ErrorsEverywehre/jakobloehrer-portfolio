import { MdArrowUpward } from "react-icons/md";
import Button from "../../common/button/Button";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p className="div">Made by me with ReactJS and much ♥</p>
      <Button icon={<MdArrowUpward />} text="back to top" />
    </div>
  );
};
export default Footer;
