import React from 'react';

import productos from '../db/Productos.json';

const Tabla = (props) => {
  const { carrito } = props;
  const arrayProductos = [];

  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i] === productos[i].id) {
      arrayProductos.push(productos[i]);
    }
  }

  return (
    <>
      <h3 className="mb-2">Carrito de Productos</h3>
      <table className="table mb-5">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          {arrayProductos.map((prod) => (
            <tr>
              <th scope="row">{prod.id}</th>
              <td>{prod.nombre}</td>
              <td>{`$${prod.precio}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tabla;
