import './App.css';
import Header from './header'
import ProductItem from './product';
import ShoppingCart from './shoppingCart';
function App() {
  const product = { id: 1, name: 'dell laptop', description: 'dell laptop 16gb ram 500gb ssd' }
  return (
    <div className="App">
      <Header />
      <ProductItem product={product} />
      <ShoppingCart />
    </div>
  );
}

export default App;
