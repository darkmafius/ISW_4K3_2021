import React, { useState } from 'react';

import Menu from './components/Menu';
import Header from './components/Header';
import Productos from './components/Productos';
import Footer from './components/Footer';

import productos from './db/Productos.json';

function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <Menu
        carrito={carrito}
      />
      <Header />
      <Productos
        productos={productos}
      />
      <Footer />
    </>
  );
}

export default App;
