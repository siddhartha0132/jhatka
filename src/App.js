import logo from './logo.svg';
import './App.css';
import Header from './mycomponent/Header';
import { Home } from './mycomponent/Home';
import { About } from './mycomponent/About';
import { FAQ } from './mycomponent/FAQ';
import { Product} from './mycomponent/Product';
import { Cart } from './mycomponent/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (<>
   
    
 <Router>
 <Header title="jhatka.in"  />
 <Routes>
   <Route path="/Home" element={<Home />} />
   <Route path ="/About" element={<About/>} />
   <Route path ="Cart" element={<Cart/>} />
   <Route path ="/FAQ" element={<FAQ/>} />
   <Route path ="/Product" element={<Product/>} />

 </Routes>
 
</Router></>

  );
}

export default App;
