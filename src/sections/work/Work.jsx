import SectionTitle from "../../common/sectionTitle/SectionTitle";
import WorkBook from "../../components/workBox/WorkBook";
import "./Work.scss";

const Work = ({forwardedRef}) => {
  return (
    <div ref={forwardedRef} className="work">
      <SectionTitle title="WORK" />
      <WorkBook />
    </div>
  );
};
export default Work;
