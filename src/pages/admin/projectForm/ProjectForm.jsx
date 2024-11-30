import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../../../services/firebase";
import { useState } from "react";

const ProjectForm = () => {
  const [titleDe, setTitleDe] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [interductionText, setInterductionText] = useState();
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [projectDate, setProjectDate] = useState("");
  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState({ type: "", content: {} });
  const [tags, setTags] = useState({});
  const [newTag, setNewTag] = useState("");

  const storage = getStorage();

  const handleThumbnailUpload = async () => {
    if (!thumbnailFile) return null;
    const storageRef = ref(
      storage,
      `projects/thumbnails/${thumbnailFile.name}`
    );
    await uploadBytes(storageRef, thumbnailFile);
    return await getDownloadURL(storageRef);
  };

  const handleSectionUpload = async (file, folder) => {
    if (!file) return null;
    const storageRef = ref(storage, `projects/${folder}/${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const thumbnailUrl = await handleThumbnailUpload();

      const projectData = {
        title: {
          de: titleDe,
          en: titleEn,
        },
        text: interductionText,
        thumbnailUrl,
        projectDate: projectDate || null,
        sections,
        tags,
      };

      const projectsRef = collection(db, "projects");
      await addDoc(projectsRef, projectData);
      alert("Project added successfully!");
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Project</h2>

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
      <button
        type="button"
        onClick={() => {
          if (newTag.trim() === "") return; // Prevent empty tags
          const nextKey = Object.keys(tags).length; // Determine the next key
          setTags({ ...tags, [nextKey]: newTag.trim() }); // Add the tag to the mapping
          setNewTag(""); // Clear the input
        }}
      >
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
                  delete updatedTags[key]; // Remove the tag
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
        Interdiction Text (DE):
        <textarea
          onChange={(e) =>
            setInterductionText({ ...interductionText, de: e.target.value })
          }
        />
      </label>
      <label>
        Interduction Text (EN):
        <textarea
          onChange={(e) =>
            setInterductionText({ ...interductionText, en: e.target.value })
          }
        />
      </label>

      <h3>Widgets</h3>
      {sections.map((section, index) => (
        <div key={index}>
          <strong>Type:</strong> {section.type}
          {section.type === "text" && (
            <p>
              <strong>Content (DE):</strong> {section.content.text?.de}
              <br />
              <strong>Content (EN):</strong> {section.content.text?.en}
            </p>
          )}
          {section.type === "image" && (
            <img
              src={section.content.imageUrl}
              alt="Section"
              style={{ maxWidth: "100px" }}
            />
          )}
          {/* Add other types similarly */}
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
          <option value="text">Text</option>
          <option value="title">Title</option>
          <option value="image">Image</option>
          <option value="link">Link</option>
          <option value="iframe">Iframe</option>
        </select>
      </label>

      {newSection.type === "text" && (
        <>
          <label>
            Text (DE):
            <input
              type="text"
              onChange={(e) =>
                setNewSection({
                  ...newSection,
                  content: {
                    ...newSection.content,
                    text: { ...newSection.content.text, de: e.target.value },
                  },
                })
              }
            />
          </label>
          <label>
            Text (EN):
            <input
              type="text"
              onChange={(e) =>
                setNewSection({
                  ...newSection,
                  content: {
                    ...newSection.content,
                    text: { ...newSection.content.text, en: e.target.value },
                  },
                })
              }
            />
          </label>
        </>
      )}

      {newSection.type === "image" && (
        <label>
          Image File:
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setNewSection({
                ...newSection,
                content: { ...newSection.content, imageFile: e.target.files[0] },
              })
            }
          />
          Image Title
          <input
            type="text"
            onChange={(e) =>
              setNewSection({
                ...newSection,
                content: { ...newSection.content, title: e.target.value },
              })
            }
          />
        </label>
      )}

      {newSection.type === "title" && (
        <>
          <label>
            Title (DE):
            <textarea
              onChange={(e) =>
                setNewSection({
                  ...newSection,
                  content: {
                    ...newSection.content,
                    text: { ...newSection.content.title, de: e.target.value },
                  },
                })
              }
            />
          </label>
          <label>
            Title (EN):
            <textarea
              onChange={(e) =>
                setNewSection({
                  ...newSection,
                  content: {
                    ...newSection.content,
                    text: { ...newSection.content.title, en: e.target.value },
                  },
                })
              }
            />
          </label>
        </>
      )}

      {newSection.type === "link" && (
        <>
          <label>
            Link URL:
            <input
              type="url"
              onChange={(e) =>
                setNewSection({
                  ...newSection,
                  content: { ...newSection.content, linkUrl: e.target.value },
                })
              }
            />
          </label>
          <label>
            Text (DE):
            <input
              type="text"
              onChange={(e) =>
                setNewSection({
                  ...newSection,
                  content: {
                    ...newSection.content,
                    text: { ...newSection.content.text, de: e.target.value },
                  },
                })
              }
            />
          </label>
          <label>
            Text (EN):
            <input
              type="text"
              onChange={(e) =>
                setNewSection({
                  ...newSection,
                  content: {
                    ...newSection.content,
                    text: { ...newSection.content.text, en: e.target.value },
                  },
                })
              }
            />
          </label>
        </>
      )}

      {newSection.type === "iframe" && (
        <label>
          Iframe URL:
          <input
            type="url"
            onChange={(e) =>
              setNewSection({
                ...newSection,
                content: { ...newSection.content, iframeUrl: e.target.value },
              })
            }
          />
        </label>
      )}

      <button type="button" onClick={handleAddSection}>
        Add Section
      </button>

      <button type="submit">Submit Project</button>
    </form>
  );
};

export default ProjectForm;
