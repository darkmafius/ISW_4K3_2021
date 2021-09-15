import React from 'react';

import productos from '../db/Productos.json';

const Tabla = (props) => {
  const { carrito } = props;
  const arrayProductos = [];

  // Matchear el id del prod con el producto en la bd
  for (let i = 0; i < carrito.length; i++) {
    for (let j = 0; j < productos.length; j++) {
      if (carrito[i] === productos[j].id) {
        arrayProductos.push(productos[i]);
      }
    }
  }

  console.log(carrito);
  console.log(arrayProductos);

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
