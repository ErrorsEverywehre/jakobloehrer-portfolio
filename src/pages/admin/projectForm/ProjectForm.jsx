import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc, collection, addDoc, deleteDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../services/firebase";

const ProjectForm = () => {
  const { id } = useParams(); // Get the document ID from the URL
  const navigate = useNavigate();
  const [titleDe, setTitleDe] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [introductionText, setIntroductionText] = useState({});
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [projectDate, setProjectDate] = useState("");
  const [sections, setSections] = useState([]);
  const [tags, setTags] = useState({});
  const [newTag, setNewTag] = useState("");
  const [newSection, setNewSection] = useState({ type: "", content: {} });

  const storage = getStorage();

  useEffect(() => {
    const fetchProject = async () => {
      if (!id || id === "new") return;

      const projectRef = doc(db, "projects", id);
      const projectSnap = await getDoc(projectRef);

      if (projectSnap.exists()) {
        const project = projectSnap.data();
        setTitleDe(project.title?.de || "");
        setTitleEn(project.title?.en || "");
        setIntroductionText(project.text || {});
        setThumbnailUrl(project.thumbnailUrl || "");
        setProjectDate(project.projectDate || "");
        setSections(project.sections || []);
        setTags(project.tags || {});
      } else {
        console.error("Project not found!");
        navigate("/new"); // Redirect to new if the document doesn't exist
      }
    };

    fetchProject();
  }, [id, navigate]);

  const handleThumbnailUpload = async () => {
    if (!thumbnailFile) return thumbnailUrl; // Keep existing URL if no new file is uploaded
    const storageRef = ref(storage, `projects/thumbnails/${thumbnailFile.name}`);
    await uploadBytes(storageRef, thumbnailFile);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const uploadedThumbnailUrl = await handleThumbnailUpload();

      const projectData = {
        title: {
          de: titleDe,
          en: titleEn,
        },
        text: introductionText,
        thumbnailUrl: uploadedThumbnailUrl,
        projectDate: projectDate || null,
        sections,
        tags,
      };

      if (id && id !== "new") {
        const projectRef = doc(db, "projects", id);
        await updateDoc(projectRef, projectData);
        alert("Project updated successfully!");
      } else {
        const projectsRef = collection(db, "projects");
        await addDoc(projectsRef, projectData);
        alert("Project added successfully!");
      }

      navigate("/"); // Redirect after submission
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Failed to save project.");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project? This action cannot be undone."
    );

    if (confirmDelete) {
      try {
        const projectRef = doc(db, "projects", id); // Reference to the project document
        await deleteDoc(projectRef); // Delete the document from Firestore
        alert("Project deleted successfully!");
        navigate("/"); // Redirect to the homepage after deletion
      } catch (error) {
        console.error("Error deleting project:", error);
        alert("Failed to delete project.");
      }
    }
  };


  const handleAddTag = () => {
    if (!newTag.trim()) return;
    const nextKey = Object.keys(tags).length;
    setTags({ ...tags, [nextKey]: newTag.trim() });
    setNewTag("");
  };

  const handleAddSection = async () => {
    const updatedSections = [...sections];
    if (newSection.type === "image") {
      const imageUrl = await handleSectionUpload(
        newSection.content.imageFile,
        "sectionImages"
      );
      newSection.content.imageUrl = imageUrl;
      delete newSection.content.imageFile;
    }
    updatedSections.push({ ...newSection });
    setSections(updatedSections);
    setNewSection({ type: "", content: {} });
  };

  const handleSectionUpload = async (file, folder) => {
    if (!file) return null;
    const storageRef = ref(storage, `projects/${folder}/${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id && id !== "new" ? "Edit Project" : "Create New Project"}</h2>

      <label>
        Title (DE):
        <input
          type="text"
          value={titleDe}
          onChange={(e) => setTitleDe(e.target.value)}
        />
      </label>

      <label>
        Title (EN):
        <input
          type="text"
          value={titleEn}
          onChange={(e) => setTitleEn(e.target.value)}
        />
      </label>

      <label>
        Thumbnail:
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setThumbnailFile(e.target.files[0])}
        />
        {thumbnailUrl && <img src={thumbnailUrl} alt="Thumbnail" />}
      </label>

      <label>
        Project Date (Optional):
        <input
          type="date"
          value={projectDate}
          onChange={(e) => setProjectDate(e.target.value)}
        />
      </label>

      <label>
        Tags:
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="Enter a tag"
        />
      </label>
      <button type="button" onClick={handleAddTag}>
        Add Tag
      </button>

      <div>
        <h4>Added Tags:</h4>
        <ul>
          {Object.entries(tags).map(([key, value]) => (
            <li key={key}>
              {value}
              <button
                type="button"
                onClick={() => {
                  const updatedTags = { ...tags };
                  delete updatedTags[key];
                  setTags(updatedTags);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <label>
        Introduction Text (DE):
        <textarea
          value={introductionText.de || ""}
          onChange={(e) =>
            setIntroductionText({ ...introductionText, de: e.target.value })
          }
        />
      </label>
      <label>
        Introduction Text (EN):
        <textarea
          value={introductionText.en || ""}
          onChange={(e) =>
            setIntroductionText({ ...introductionText, en: e.target.value })
          }
        />
      </label>

      <h3>Widgets</h3>
      {sections.map((section, index) => (
        <div key={index}>
          <strong>Type:</strong> {section.type}
          {section.type === "image" && (
            <img
              src={section.content.imageUrl}
              alt="Section"
              style={{ maxWidth: "100px" }}
            />
          )}
          {section.type === "link" && (
            <div>
              <p>
                src ={" "}
                <a href={section.content.linkUrl}>{section.content.linkUrl}</a>
              </p>
            </div>
          )}
        </div>
      ))}

      <label>
        Section Type:
        <select
          value={newSection.type}
          onChange={(e) =>
            setNewSection({ ...newSection, type: e.target.value, content: {} })
          }
        >
          <option value="">Select Type</option>
          <option value="image">Image</option>
          <option value="link">Link</option>
        </select>
      </label>

      {newSection.type === "image" && (
        <label>
          Image File:
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setNewSection({
                ...newSection,
                content: {
                  ...newSection.content,
                  imageFile: e.target.files[0],
                },
              })
            }
          />
        </label>
      )}

      <button type="button" onClick={handleAddSection}>
        Add Section
      </button>

      <button type="submit">
        {id && id !== "new" ? "Update Project" : "Create Project"}
      </button>
      {id && id !== "new" && (
  <button
    type="button"
    onClick={handleDelete}
    style={{
      backgroundColor: "red",
      color: "white",
      marginLeft: "10px",
    }}
  >
    Delete Project
  </button>
)}

    </form>
  );
};

export default ProjectForm;
