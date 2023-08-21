import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Header from './components/Header';
import './main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros"
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <div>
        <CartProvider>
          <BrowserRouter>
            {/* Contiene a NavBar, desde allí al submenú */}
            <Header />
            <Routes>
              <Route path="/" element={<ItemListContainer />}/>
              <Route path="/item/:id" element={<ItemDetailContainer />}/>
              <Route path="/productos" element={<ItemListContainer />}/>
              <Route path="/productos/:categoria" element={<ItemListContainer />}/>
              <Route path="/nosotros" element={<Nosotros />}/>
              <Route path="/contacto" element={<Contacto />}/>
              <Route path="/carrito" element={<Carrito />}/>
              <Route path="/checkout" element={<CheckOut />}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
