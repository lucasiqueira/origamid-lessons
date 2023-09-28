import PropTypes from 'prop-types'

const Title = ({title}) => {
  return (
    <h1 style={{color: 'green'}}>{title}</h1>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title