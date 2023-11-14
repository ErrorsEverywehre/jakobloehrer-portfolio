import { useState } from 'react';
import './BookExample.scss';

const BookComponent = () => {
  const [currentState, setCurrentState] = useState(1);
  const numOfPapers = 3;
  const maxState = numOfPapers + 1;

  const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const book = document.querySelector('.book');

const paper1 = document.querySelector('#p1')
const paper2 = document.querySelector('#p2')
const paper3 = document.querySelector('#p3')


  const goNext = () => {
    if (currentState < maxState) {
      switch (currentState) {
        case 1:
          openBook();
          paper1.classList.add("flipped");
          paper1.style.zIndex = 1;
          break;
        case 2:
          paper2.classList.add("flipped");
          paper2.style.zIndex = 2;
          break;
        case 3:
          closeBook(false);
          paper3.classList.add("flipped");
          paper3.style.zIndex = 3;
          break;
        default:
          throw new Error("unknown state");
      }

      setCurrentState(currentState + 1);
    }
  };

  const goPrevious = () => {
    if (currentState > 1) {
      switch (currentState) {
        case 2:
          closeBook(true);
          paper1.classList.remove("flipped");
          paper1.style.zIndex = 3;
          break;
        case 3:
          paper2.classList.remove("flipped");
          paper2.style.zIndex = 2;
          break;
        case 4:
          openBook();
          paper3.classList.remove("flipped");
          paper3.style.zIndex = 1;
          break;
        default:
          throw new Error("unknown state");
      }

      setCurrentState(currentState - 1);
    }
  };

  const openBook = () => {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}  ;

  const closeBook = (isFirstPage) => {
    if(isFirstPage) {
      book.style.transform = "translateX(0%)";
  } else {
      book.style.transform = "translateX(100%)";
  }
  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";  };

  return (
    <div>
      <button id="prev-btn" onClick={goPrevious}>
left      </button>

      <div id="book" className="book">
        <div id="p1" className="paper">
            <div className="front">
                <div id="f1" className="front-content">
                    <h1 className="book-title">Little Dog</h1>
                    <img className="cover-img" src="./dog.jpg" alt="dog" />
                </div>
            </div>
            <div className="back">
                <div id="b1" className="back-content">
                    <h2>Some Intro</h2>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="p2" className="paper">
            <div className="front">
                <div id="f2" className="front-content">
                    <h1>Some Cool Page</h1>
                </div>
            </div>
            <div className="back">
                <div id="b2" className="back-content">
                    <h1>An Awesome Page</h1>
                </div>
            </div>
        </div>
        <div id="p3" className="paper">
            <div className="front">
                <div id="f3" className="front-content">
                    <h1>An Amazing Page</h1>
                </div>
            </div>
            <div className="back">
                <div id="b3" className="back-content">
                    <h1>The Good Bye</h1>
                </div>
            </div>
        </div>    </div>

      <button id="next-btn" onClick={goNext}>
right      </button>
    </div>
  );
};

export default BookComponent;
