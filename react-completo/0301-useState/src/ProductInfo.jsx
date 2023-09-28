/* eslint-disable react/prop-types */
const ProductInfo = ({data}) => {
  
  return (
    <div>
      {
        data && (
          <>
            <h1>{data.nome}</h1>
            <p>R$ {data.preco}</p>
            <img src={data.fotos[0].src} alt={data.fotos[0].titulo} />
          </>
        )
      }
    </div>
  )
}

export default ProductInfo