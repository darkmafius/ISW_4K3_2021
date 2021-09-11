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
    history.push('/Formulario');
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <Link to="/" className="navbar-brand" href="#!">Start Bootstrap</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />

          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
            </ul>

            <form
              className="d-flex"
              onSubmit={handleSubmit}
            >
              <button
                className="btn btn-outline-dark"
                type="submit"
              >
                <i className="bi-cart-fill me-1" />
                Cart
                <span
                  className="badge bg-dark text-white ms-1 rounded-pill"
                >
                  {carrito.length}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Menu;
