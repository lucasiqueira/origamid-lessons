import Product from "./Product";
import Title from "./Title";

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Products = () => {
  return (
    <section>
      <Title title="Produtos"/>
      {
        produtos.map((prod) => (
            <Product key={prod.nome} prod={prod}/>
          ))
      }
    </section>
  )
}

export default Products