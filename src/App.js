import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Cart from './pages/cart/Cart';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product/:id" element={<Details/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
