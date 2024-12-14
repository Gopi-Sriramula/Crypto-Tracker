import "./style.css";
function Button({text,bool}) {
  return (
    <button className={`btn ${bool}`}>{text}</button>
  )
}

export default Button