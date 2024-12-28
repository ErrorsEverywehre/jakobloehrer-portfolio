import { useEffect, useState } from "react";
import SectionTitle from "../../common/sectionTitle/SectionTitle";
import WorkBook from "../../components/workBox/WorkBook"; // Assuming WorkBook is used for individual project items
import "./Work.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import ProjectCard from "./projectCard/projectCard";
import { Loader } from "../../common/loader/Loader";

const Work = ({ forwardedRef }) => {
  const projectsRef = collection(db, "projects");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsSnapshot = await getDocs(projectsRef);
        const projectsData = projectsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })); // Map each document into an object
        setProjects(projectsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div ref={forwardedRef} className="work">
      <SectionTitle title="WORK" />
      {loading && (
        <div className="loader-wrapper">
          <Loader isLoading={loading} />
        </div>
      )}
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard redirectUrl={`/work/${project.id}`} key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Work;
