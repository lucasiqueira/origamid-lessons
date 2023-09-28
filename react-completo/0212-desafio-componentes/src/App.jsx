import Header from './Header';
import Home from './Home'
import Products from './Products';

function App() {
  const {pathname} = window.location
  return (
    <section>
      <Header/>
      {
        pathname === '/products' ? <Products /> : <Home />
      }
    </section>
  )
}

export default App;
