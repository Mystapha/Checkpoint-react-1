import logo from './logo.svg';
import './App.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './components/ProductCard';
import Titlenav from './components/Titlenav';

function App() {
  const product={
    name:"Mac-PC", price:"3500 Dt", description:"Mac pc", img:"https://www.tunisianet.com.tn/194952-large/pc-de-bureau-apple-imac-tout-en-un-27-i5-10eme-gen-512-go-ecran-retina-5k.jpg"
  }
  return (
    <div className="App">
     {/* <Name name={product.name}/>
    <Price price={product.price} />
    <Description description={product.description} />
    <Image image={product.img} />  */}
    <Titlenav />
    <ProductCard product={product}/>
    </div>
  );
}

export default App;
