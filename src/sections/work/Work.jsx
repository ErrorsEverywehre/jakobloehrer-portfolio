import SectionTitle from "../../common/sectionTitle/SectionTitle";
import WorkBox from "../../components/workBox/WorkBox";
import "./Work.scss";

const Work = ({forwardedRef}) => {
  return (
    <div ref={forwardedRef} className="work">
      <SectionTitle title="WORK" />
      <WorkBox />
    </div>
  );
};
export default Work;
