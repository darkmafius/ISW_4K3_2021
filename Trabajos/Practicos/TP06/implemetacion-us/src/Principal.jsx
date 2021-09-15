import React, { useState } from 'react';

import Menu from './components/Menu';
import Header from './components/Header';
import Productos from './components/Productos';
import Footer from './components/Footer';

import productos from './db/Productos.json';

const Principal = () => {
  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <Menu
        carrito={carrito}
      />
      <Header />
      <Productos
        carrito={carrito}
        productos={productos}
        setCarrito={setCarrito}
      />
      <Footer />
    </>
  );
};

export default Principal;
