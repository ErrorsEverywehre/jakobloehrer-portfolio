import { useEffect, useState } from "react";
import {
  AiOutlineDownload,
  AiOutlineInstagram,
  AiOutlineLeft,
  AiOutlineLink,
  AiOutlineRight,
} from "react-icons/ai";
import SectionTitle from "../../common/sectionTitle/SectionTitle";
import TextBox from "../../common/textBox/TextBox";
import Work from "./../../assets/Work.json";

import IframeModal from "../../common/iframeModal/IframeModal";
import "./WorkBook.scss";

const WorkBook = () => {
  const workContent = Work;
  const [currentState, setCurrentState] = useState(1);
  const [bookOpened, setBookOpened] = useState(false);
  const [atStart, setAtStart] = useState(false);


  const numOfPapers = Math.ceil(workContent.length / 2);
  const maxState = numOfPapers + 3;

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

    let attributesForRight = {
      title: "here's my work",
    };
    for (let i = 0; i <= workBoxContent.length; i += 2) {
      pageCounter++;

      jsx.push(
        <div
          key={pageCounter}
          className={`paper p${pageCounter} ${
            currentState > pageCounter ? "flipped" : ""
          }`}
          style={{
            zIndex:
              currentState > pageCounter
                ? pageCounter
                : numOfPapers - pageCounter,
          }}
        >
          <div className="front">
            <div className="front-content">
              {attributesForRight.iframe && (
                <IframeModal url={attributesForRight.iframe} />
              )}

              {attributesForRight.iframeDescription && (
                <label>{attributesForRight.iframeDescription}</label>
              )}
              {attributesForRight.title && <h3>{attributesForRight.title}</h3>}
            </div>
          </div>
          <div className="back">
            <div className="back-content">
              {workBoxContent[i] ? (
                <>
                  <SectionTitle title={workBoxContent[i].title} />
                  <TextBox text={workBoxContent[i].description} />
                  <div className="workContainer">
                  {workBoxContent[i]?.work?.map((work) => (
                    <div key={work.type}>
                      <div>
                        {work.type === "graphics" && (
                          <>
                            <AiOutlineDownload />
                            <b>Graphics</b>
                            <ul>
                              {work.links.map((link) => (
                                <li>
                                  {" "}
                                  <a href={link.src} key={link.title}>
                                    {link.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                      <div>
                        {work.type === "socials" && (
                          <>
                            <AiOutlineInstagram />
                            <b>Socials</b>
                            <ul>
                              {work.links.map((link) => (
                                <li>
                                  {" "}
                                  <a href={link.src} key={link.title}>
                                    {link.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                      <div>
                        {work.type === "link" && (
                          <>
                            <AiOutlineLink />

                            <b>Websites</b>
                            <ul>
                              {work.links.map((link) => (
                                <li>
                           
                              
                                  <IframeModal url={link.src} title={link.title}  />

                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                  </div>
                </>
              ) : (
                <p>thats all listed, but there's lot more</p>
              )}
            </div>
          </div>
        </div>
      );
      if (workBoxContent[i])
        attributesForRight = {
          iframe: workBoxContent[i].iframe,
          iframeDescription: workBoxContent[i].iframeDescription,
        };
    }

    return jsx;
  };

  useEffect(() => {
    setBookOpened(currentState > 1 && currentState < maxState);
    setAtStart(currentState === 2);
  }, [currentState, maxState]);

  return (
    <div>
      <div className="leftRight-buttons-wrapper">
        <button onClick={goPrevious} disabled={currentState === 1}>
          <AiOutlineLeft />
        </button>
        <button onClick={goNext} disabled={currentState === maxState}>
          <AiOutlineRight />
        </button>
      </div>

      <div className="book-wrapper">
        <div
          className={`book ${bookOpened ? "open" : "closed"} ${
            atStart && "beginning"
          }`}
        >
          {generateBook(workContent)}
        </div>
      </div>
    </div>
  );
};

export default WorkBook;
