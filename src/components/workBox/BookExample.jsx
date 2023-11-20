import { useEffect, useState } from "react";
import "./BookExample.scss";

const WorkBoxContent = [
  {
    index: 0,
    title: "Fechtclub Oberwallis",
    description: "I did some work there",
    image:
      "https://fechtclub-oberwallis.clubdesk.ch/clubdesk/fileservlet?type=image&inline=true&id=1000073",
    jsx: <div>Something</div>,
    imageDescription: "This is the logo",
  },
  {
    index: 1,
    title: "Another Fechtclub",
    description: "I did some work here too",
    image:
      "https://fechtclub-oberwallis.clubdesk.ch/clubdesk/fileservlet?type=image&inline=true&id=1000073",
    jsx: <div>Something else</div>,
    imageDescription: "This is another logo",
  },
  {
    index: 2,
    title: "Third Fechtclub",1    b 
    description: "I did some work here too",
    image:
      "https://fechtclub-oberwallis.clubdesk.ch/clubdesk/fileservlet?type=image&inline=true&id=1000073",
    jsx: <div>Something else</div>,
    imageDescription: "This is another logo",
  },
  {
    index: 3,
    title: "Fourth",
    description: "I did some work here too",
    image:
      "https://fechtclub-oberwallis.clubdesk.ch/clubdesk/fileservlet?type=image&inline=true&id=1000073",
    jsx: <div>Something else</div>,
    imageDescription: "This is another logo",
  },
  {
    index: 3,
    title: "Fourth",
    description: "I did some work here too",
    image:
      "https://fechtclub-oberwallis.clubdesk.ch/clubdesk/fileservlet?type=image&inline=true&id=1000073",
    jsx: <div>Something else</div>,
    imageDescription: "This is another logo",
  },
  {
    index: 3,
    title: "Fourth",
    description: "I did some work here too",
    image:
      "https://fechtclub-oberwallis.clubdesk.ch/clubdesk/fileservlet?type=image&inline=true&id=1000073",
    jsx: <div>Something else</div>,
    imageDescription: "This is another logo",
  },
  {
    index: 3,
    title: "Fourth",
    description: "I did some work here too",
    image:
      "https://fechtclub-oberwallis.clubdesk.ch/clubdesk/fileservlet?type=image&inline=true&id=1000073",
    jsx: <div>Something else</div>,
    imageDescription: "This is another logo",
  },
];


const BookExample = () => {
  const [currentState, setCurrentState] = useState(1);
  const [bookOpened, setBookOpened] = useState(false);
  const [atStart, setAtStart] = useState(false);

  const numOfPapers = Math.ceil(WorkBoxContent.length / 2);
  const maxState = numOfPapers + 1;

  const goNext = () => {
    if (currentState < maxState) {
      setCurrentState(currentState + 1);
    }
  };

  const goPrevious = () => {
    if (currentState > 1) {
      setCurrentState(currentState - 1);
    }
  };

  const generateBook = (workBoxContent) => {
    let pageCounter = 0;
    let jsx = [];

    for (let i = 0; i < workBoxContent.length; i += 2) {
      pageCounter++;

      jsx.push(
        <div
        key={pageCounter}
        className={`paper p${pageCounter} ${currentState > pageCounter ? "flipped" : ""}`}
        style={{ zIndex: currentState > pageCounter ? pageCounter : numOfPapers - pageCounter }}
      >
        <div className="front">
          <div className="front-content">
            <h1>{workBoxContent[i].title}</h1>
            {workBoxContent[i].jsx}
          </div>
        </div>
        <div className="back">
          <div className="back-content">
            {workBoxContent[i + 1] && (
              <>
                <h1>{workBoxContent[i + 1].title}</h1>
                {workBoxContent[i + 1].jsx}
              </>
            )}
          </div>
        </div>
      </div>

      );
    }

    return jsx;
  };

  useEffect(() => {
    setBookOpened(currentState > 1 && currentState < maxState);
    setAtStart(currentState === 2);
  }, [currentState, maxState]);

  return (
    <div>
      <button className="nav-btn" onClick={goPrevious}>
        left
      </button>
      <div className="book-wrapper">
        <div className={`book ${bookOpened ? "open" : "closed"} ${atStart && "beginning"}`}>
          {generateBook(WorkBoxContent)}
        </div>
      </div>
      <button className="nav-btn" onClick={goNext}>
        right
      </button>
    </div>
  );
};

export default BookExample;
