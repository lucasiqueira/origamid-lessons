import { useState } from "react"
import ButtonsSection from "./ButtonsSection"
import ProductInfo from "./ProductInfo"

function App() {
  const [selected, setSelected] = useState('tablet')
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = ({target}) => {
    setSelected(target.innerText);
    fetchProduct(target.innerText)
  }

  const fetchProduct = async (prod) => {
    setIsLoading(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${prod}`)
    const json = await response.json()
    setData(json)
    setIsLoading(false)
  }
  
  return (
    <>
      {
        (isLoading && <p>Carregando...</p>) ||
        <>
          <ButtonsSection handleClick={handleClick} />
          <ProductInfo selected={selected} data={data} />
        </>
      }
    </>
  )
}

export default App
