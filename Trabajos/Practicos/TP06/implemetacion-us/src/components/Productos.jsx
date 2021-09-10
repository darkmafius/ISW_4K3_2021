import React from 'react';

const Productos = (props) => {
  const { productos } = props;

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        {productos.map((prod) => (
          <Tarjeta key={prod.id} prod={prod} />
        ))}
      </div>
    </section>
  );
};

const Tarjeta = (props) => {
  const { nombre, precio, imgUrl } = props.prod;

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
            <a className="btn btn-outline-dark mt-auto" href="#">
              Añadir al carrito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productos;
