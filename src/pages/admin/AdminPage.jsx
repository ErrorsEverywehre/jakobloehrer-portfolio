import { useEffect, useState } from "react";
import { Loader } from "../../common/loader/Loader";
import SectionTitle from "../../common/sectionTitle/SectionTitle";
import ProjectCard from "../../sections/work/projectCard/projectCard";
import ProjectForm from "./projectForm/ProjectForm";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const projectsRef = collection(db, "projects");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
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
    <div className="work">
      <SectionTitle title="Project Manager" />
      {loading && (
        <div className="loader-wrapper">
          <Loader isLoading={loading} />
        </div>
      )}
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard redirectUrl={`/admin/projects/${project.id}`} key={project.id} project={project} />
        ))}
        <button       onClick={() => navigate("projects/new")}
        >
          new project
        </button>
      </div>
    </div>



  );
};
export default AdminPage;
