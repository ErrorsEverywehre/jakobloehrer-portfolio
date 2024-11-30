import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./projectCard.scss";


const ProjectCard = ({ project }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate(); // Hook for navigation

  const title = project?.title?.[i18n.language] ?? project?.title?.de;

  return (
    <div
      className="card"
      onClick={() => navigate(`/work/${project.id}`)} // Navigate to /work/:id
    >
      <img src={project?.thumbnailUrl} alt={title} />
      <div className="title-wrapper">{title}</div>
    </div>
  );
};

export default ProjectCard;
