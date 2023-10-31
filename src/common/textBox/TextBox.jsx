import "./TextBox.scss"
const TextBox = ({title, text}) => {

  return (
    <div className="textBox"  >
      <div className="title">{title}</div>
      <div className="text">{text}</div>
    </div>
  )
}
export default TextBox
