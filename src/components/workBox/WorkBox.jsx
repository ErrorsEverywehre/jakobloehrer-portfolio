import { useState } from "react";
import BookExample from "./BookExample";
import "./WorkBox.scss";

const WorkBoxContent = [
  {
    index: 0,
    title: "Fechtclub Oberwallis",
    description: "I did some work there",
    image: "https://fechtclub-oberwallis.clubdesk.ch/clubdesk/fileservlet?type=image&inline=true&id=1000073",
    jsx: <div>Something</div>,
    imageDescription: "This is the logo",
  },
  {
    index: 1,
    title: "Another Fechtclub",
    description: "I did some work here too",
    image: "https://fechtclub-oberwallis.clubdesk.ch/clubdesk/fileservlet?type=image&inline=true&id=1000073",
    jsx: <div>Something else</div>,
    imageDescription: "This is another logo",
  },
  {
    index: 2,
    title: "Another Fechtclub",
    description: "I did some work here too",
    image: "https://fechtclub-oberwallis.clubdesk.ch/clubdesk/fileservlet?type=image&inline=true&id=1000073",
    jsx: <div>Something else</div>,
    imageDescription: "This is another logo",
  },
];

const WorkBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % WorkBoxContent.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + WorkBoxContent.length) % WorkBoxContent.length);
  };

  const currentContent = WorkBoxContent[currentIndex];

  return (
    <>
    <BookExample />
      {/* <div className="workBoxControls">
        <button onClick={handlePrevClick} disabled={currentIndex === 0}>
          <AiOutlineLeft />
        </button>
        <span>{`${currentIndex + 1}/${WorkBoxContent.length}`}</span>
        <button onClick={handleNextClick} disabled={currentIndex === WorkBoxContent.length - 1}>
          <AiOutlineRight />
        </button>
      </div>
      <div className="book">
        {WorkBoxContent.map((page, index) => (
          <div
            key={page.index}
            className={`book_page book_page-${index + 1} ${currentIndex === index ? "active" : ""}`}
          >
            <div className="page-content">
              <h3>{page.title}</h3>
              <p>
                {page.description}
                <img className={`image-${index + 1}`} src={page.image} alt={page.imageDescription} />
                <label htmlFor={index + 1}>{page.imageDescription}</label>
              </p>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default WorkBox;
