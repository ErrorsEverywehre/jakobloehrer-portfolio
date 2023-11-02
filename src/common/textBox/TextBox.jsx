import "./TextBox.scss";
const TextBox = ({ title, text }) => {
  return (
    <div className="textBox">
      {title && <div className="title">{title}</div>}
      <div className="text">{text}</div>
    </div>
  );
};
export default TextBox;
