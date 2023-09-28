/* eslint-disable react/prop-types */
import Button from "./Button"

const ButtonsSection = ({handleClick}) => {
  return (
    <>
      <Button text="tablet" handleClick={handleClick} />
      <Button text="smartphone" handleClick={handleClick} />
      <Button text="notebook" handleClick={handleClick} />
    </>
  )
}

export default ButtonsSection