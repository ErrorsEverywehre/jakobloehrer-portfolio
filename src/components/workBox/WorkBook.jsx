import { useEffect, useState } from "react";
import { AiOutlineDownload, AiOutlineInstagram, AiOutlineLeft, AiOutlineLink, AiOutlineRight } from "react-icons/ai";
import SectionTitle from "../../common/sectionTitle/SectionTitle";
import TextBox from "../../common/textBox/TextBox";
import Work from "./../../assets/Work.json";

import "./WorkBook.scss";



const WorkBook = () => {
  const workContent = Work;
  const [currentState, setCurrentState] = useState(1);

  const [bookOpened, setBookOpened] = useState(false);
  const [atStart, setAtStart] = useState(false);


  const numOfPapers = Math.ceil(workContent.length / 2);
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
            {/* <button onClick={goNext}></button> */}
            <SectionTitle title=" - " />
            <iframe src={workBoxContent[i - 1]?.iframe} />
            <label>{workBoxContent[i - 1]?.iframeDescription}</label>
          </div>
        </div>
        <div className="back">
          <div className="back-content">
          {/* <button onClick={goPrevious}></button> */}

            {workBoxContent[i + 1] && (
              <>
              <SectionTitle title={workBoxContent[i+1].title} />
                <TextBox text={workBoxContent[i+1].description} />
                <TextBox title="WORK" />
                {workBoxContent[i + 1]?.work?.map((work) => (
                  <div key={work.type} className="workContainer">
  {work.type === "graphics" && (
    <>
      <AiOutlineDownload />
      <b>Graphics</b>
      {work.links.map((link) => (
        <a href={link.src} key={link.title}>{link.title}</a>
      ))}
    </>
  )}
  {work.type === "socials" && (
    <>
      <AiOutlineInstagram />
      <b>Socials</b>
      {work.links.map((link) => (
        <a href={link.src} key={link.title}>{link.title}</a>
      ))}
    </>
  )}
  {work.type === "link" && (
    <>
      <AiOutlineLink />
      <b>Links</b>
      {work.links.map((link) => (
        <a href={link.src} key={link.title}>{link.title}</a>
      ))}
    </>
  )}
</div>

))}


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
   <div>
      <div className="leftRight-buttons-wrapper">
        <button onClick={goPrevious} disabled={currentState === 0}>
          <AiOutlineLeft />
        </button>
        <button onClick={goNext} disabled={currentState === maxState}>
          <AiOutlineRight />
        </button>
      </div>

      <div className="book-wrapper">
        <div className={`book ${bookOpened ? "open" : "closed"} ${atStart && "beginning"}`}>
          {generateBook(workContent)}
        </div>
      </div>
    </div>
    </div>
  );
};

export default WorkBook;
