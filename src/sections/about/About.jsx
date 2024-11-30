import { useTranslation } from "react-i18next";
import skeleton from "./../../assets/skeletonButterfly.png";
import TextBox from "./../../common/textBox/TextBox";
import "./About.scss";
const About = ({forwardedRef}) => {
  const { t } = useTranslation();
  return (
    <div ref={forwardedRef}  className="about">
      <div className="left-wrapper">
        <div className="portrait"></div>

        <TextBox title="ABOUT_ME" text="ABOUT_ME_TEXT" />
        <TextBox title="CHARACTERISTICS" text="CHARACERISTICS_TEXT" />
      </div>
      <div className="right-wrapper">
        <div className="title">
              <div className="overlap-group">
                <div className="text-wrapper">{t("HELLO_IM")}</div>
                <div className="text-wrapper-2">Jakob Löhrer</div>
                <div className="text-wrapper-3">{t("AND_IM_A")}</div>
                <div className="text-wrapper-4">Frontend Developer</div>
          </div>
        </div>

        <div className="whatDrivesMe-wrapper">
          <div className="dieText">{t("DIE_TEXT")}</div>
          <TextBox text="WHAT_DRIVES_ME_TEXT" />
        </div>
        <div className="image-wrapper">
          <img src={skeleton} alt="Skeleton with Butterfly" />
        </div>
      </div>
    </div>
  );
};

export default About;
