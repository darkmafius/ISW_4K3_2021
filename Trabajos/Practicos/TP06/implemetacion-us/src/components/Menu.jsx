import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  useHistory,
} from 'react-router-dom';

const Menu = (props) => {
  const { carrito } = props;
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Redireccionar al componente Formulario
    history.push('/Formulario', { carrito });
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#!">Shop in style</Link>

          <form
            className="d-flex"
            onSubmit={handleSubmit}
          >
            <button
              className="btn btn-outline-dark"
              type="submit"
            >
              <i className="bi-cart-fill me-1" />
              Carrito
              <span
                className="badge bg-dark text-white ms-1 rounded-pill"
              >
                {carrito.length}
              </span>
            </button>
          </form>
        </div>
      </nav>
    </Router>
  );
};

export default Menu;
