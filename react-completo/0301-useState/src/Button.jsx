/* eslint-disable react/prop-types */
const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default Button