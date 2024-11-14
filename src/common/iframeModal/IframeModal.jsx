import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { AiOutlineClose, AiOutlineExport } from "react-icons/ai";
import Button from "../button/Button";
import "./IframeModal.scss";

const IframeModal = ({ url, title }) => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  const openLink = () => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (open) document.body.classList.add("active-open");
    else document.body.classList.remove("active-open");
  }, [open]);

  const modalRoot = document.getElementById("modal-root");

  return (
    <>
      <button onClick={toggleModal} className="btn-open">
        {title}
      </button>

      {open &&
        ReactDOM.createPortal(
          <>
            <div onClick={toggleModal} className="overlay"></div>

            <div className="modal">
            <div className="modal-wrapper">
  <div className="modal-header">
   <h2>{title} </h2>
    <button className="close-button" onClick={toggleModal}>
      <AiOutlineClose />
    </button>
  </div>
  <div className="modal-content">
    <div className="redirect-wrapper">
  <Button
      className="redirect-button"
      text="Visit Site"
      icon={<AiOutlineExport />}
      onClick={openLink}
    />
    </div>
    <iframe src={url} />
  </div>
</div>

            </div>
          </>,
          modalRoot
        )}
    </>
  );
};

export default IframeModal;
