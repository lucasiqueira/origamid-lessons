import PropTypes from 'prop-types';

const Product = ({prod}) => {
  return (
    <fieldset key={prod.nome}>
      <p>{prod.nome}</p>
      <ul>
        {
          prod.propriedades.map((prop) => (
            <li key={prop}>{prop}</li>
          ))
        }
      </ul>
    </fieldset>
  )
}

Product.propTypes = {
  prod: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    propriedades: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default Product