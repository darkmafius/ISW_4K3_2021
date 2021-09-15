import React from 'react';

const Productos = (props) => {
  const { carrito, productos, setCarrito } = props;

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        {productos.map((prod) => (
          <Tarjeta
            key={prod.id}
            carrito={carrito}
            prod={prod}
            setCarrito={setCarrito}
          />
        ))}
      </div>
    </section>
  );
};

const Tarjeta = (props) => {
  const { carrito, setCarrito, prod } = props;
  const {
    id, nombre, precio, imgUrl,
  } = prod;

  const handleChange = () => {
    setCarrito([
      ...carrito,
      id,
    ]);
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          src={imgUrl}
          alt="..."
        />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{nombre}</h5>

            {`$${precio}`}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              type="button"
              onClick={handleChange}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
