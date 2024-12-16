import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase"; // Firebase config
import TextBox from "../../common/textBox/TextBox";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import "./ProjectPage.scss";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import ReactDOM from "react-dom";
import { Loader } from "../../common/loader/Loader";

const ProjectPage = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null);
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectRef = doc(db, "projects", id); // Reference to the document
        const projectSnap = await getDoc(projectRef);

        if (projectSnap.exists()) {
          setProject({ id, ...projectSnap.data() });
        } else {
          console.error("No such project!");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, [id]);

  const handleBack = () => {
    navigate("/", { state: { scrollToWork: true } });
  };

  const openImageModal = (content) => {
    setModalImage({imageUrl : content.imageUrl, title :content.title });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  if (!project) {
    return   (
      <div className="loader-wrapper">
        <Loader isLoading={!project} />
      </div>
    )
  }

  const title = project?.title?.[i18n.language] ?? project?.title?.de;

  return (
    <>
      <div className="project-page">
        <div className="project-wrapper">
          <div className="header">
            <div className="title-wrapper">
              <h1>{title}</h1>
              <button className="close-button" onClick={handleBack}>
                <AiOutlineClose />
                {/* <AiOutlineArrowLeft /> */}
              </button>
            </div>
          </div>
          <div className="project-content">
            <div className="tags">
              {Object.values(project?.tags || {}).map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="textBox">
              <TextBox
                text={project.text?.[i18n.language]}
                title={project.text?.title?.[i18n.language] ?? null}
              />
            </div>
            <div className="widgets">
              {Object.values(project?.sections || {}).map((element, index) => {
                switch (element.type) {
                  case "image":
                    return (
                      <button
                        key={index}
                        className="image-wrapper widget"
                        onClick={() =>
                          openImageModal(element.content)
                        }
                      >
                        <img
                          src={element.content?.imageUrl}
                          alt={element.content?.title}
                        />
                        <span>{element.content?.title}</span>
                      </button>
                    );
                  case "link":
                    return (
                      <a
                        key={index}
                        className="link-wrapper widget"
                        href={element.content?.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="icon-wrapper">
                          <FiExternalLink />
                        </div>
                        <div>
                          <h3>
                            <img
                              src={`https://www.google.com/s2/favicons?sz=64&domain=${
                                new URL(element.content?.linkUrl).hostname
                              }`}
                              style={{
                                width: "16px",
                                height: "16px",
                                marginRight: "8px",
                              }}
                              alt="favicon"
                            />{" "}
                            {element.content?.text?.[i18n.language]}
                          </h3>
                        </div>
                      </a>
                    );
                  default:
                    return null; // Handle unexpected element types
                }
              })}
            </div>
          </div>
        </div>
      </div>
      {modalOpen &&
        ReactDOM.createPortal(
          <>
            <div className="overlay" onClick={closeModal}>            </div>

              <div className="modal">
              <div className="modal-wrapper">
              <div className="modal-header">
                <h2>{modalImage.title}</h2>
              <button className="close-button" onClick={closeModal}>
                    <AiOutlineClose />
                  </button>
              </div>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >

                  <img
                    src={modalImage.imageUrl}
                    alt="Modal View"
                    className="modal-image"
                  />
                </div>
              </div>
              </div>
          </>,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default ProjectPage;
