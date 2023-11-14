import { useEffect, useState } from "react";
import "./BookExample.scss";

const BookExample = () => {
  const [currentState, setCurrentState] = useState(1);
  const [page1Flipped, setPage1Flipped] = useState(false);
  const [page2Flipped, setPage2Flipped] = useState(false);
  const [page3Flipped, setPage3Flipped] = useState(false);

  const numOfPapers = 3;
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

  // const openBook = () => {
  //   book.style.transform = "translateX(50%)";
  //   prevBtn.style.transform = "translateX(-180px)";
  //   nextBtn.style.transform = "translateX(180px)";
  // };

  // const closeBook = (isFirstPage) => {
  //   if (isFirstPage) {
  //     book.style.transform = "translateX(0%)";
  //   } else {
  //     book.style.transform = "translateX(100%)";
  //   }
  //   prevBtn.style.transform = "translateX(0px)";
  //   nextBtn.style.transform = "translateX(0px)";
  // };

  useEffect(() => {
    switch (currentState) {
      case 1:
        setPage1Flipped(false);
        setPage2Flipped(false);
        setPage3Flipped(false);
        break;
      case 2:
        setPage1Flipped(true);
        setPage2Flipped(false);
        setPage3Flipped(false);
        break;
      case 3:
        setPage2Flipped(true);
        setPage3Flipped(false);
        break;
      case 4:
        setPage3Flipped(true);
        break;
      default:
        break;
    }
  }, [currentState]);

  return (
    <div>
      <button id="prev-btn" onClick={goPrevious}>
        left{" "}
      </button>

      <div id="book" className="book">
        <div id="p1" className={`paper ${page1Flipped && "flipped"}`}>
          <div className="front">
            <div id="f1" className="front-content">
              <h1>Front 1</h1>
            </div>
          </div>
          <div className="back">
            <div id="b1" className="back-content">
              <h1>Back 1</h1>
            </div>
          </div>
        </div>
        <div id="p2" className={`paper ${page2Flipped  && "flipped"}`}>
          <div className="front">
            <div id="f2" className="front-content">
              <h1>Front 2</h1>
            </div>
          </div>
          <div className="back">
            <div id="b2" className="back-content">
              <h1>Back 2</h1>
            </div>
          </div>
        </div>
        <div id="p3" className={`paper ${page3Flipped && "flipped"}`}>
          <div className="front">
            <div id="f3" className="front-content">
              <h1>Front 3</h1>
            </div>
          </div>
          <div className="back">
            <div id="b3" className="back-content">
              <h1>Back 3</h1>
            </div>
          </div>
        </div>
      </div>

      <button id="next-btn" onClick={goNext}>
        right{" "}
      </button>
    </div>
  );
};

export default BookExample;
