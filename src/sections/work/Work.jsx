import SectionTitle from "../../common/sectionTitle/SectionTitle";
import "./Work.scss";

const Work = ({forwardedRef}) => {
  return (
    <div ref={forwardedRef} className="work">
      <SectionTitle title="WORK" />
    </div>
  );
};
export default Work;
