import React, { useState } from 'react';
import {
  Form, Col, Button, Row, Container, InputGroup, FormControl,
} from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

import ciudades from './db/Ciudades.json';

const Formulario = () => {
  const [metodoPago, setMetodoPago] = useState('efectivo');
  const [fechaEntrega, setFechaEntrega] = useState('antesPosible');
  const [datosForm, setDatosForm] = useState({
    direccion: '',
    referencia: '',
    ciudad: '',
    cantidadEfectivo: '',
    nombreTarjeta: '',
    apellidoTarjeta: '',
    numeroTarjeta: '',
    fechaTarjeta: '',
    codigoTarjeta: '',
    fechaEntregaProd: '',
  });

  const {
    direccion, referencia, ciudad, cantidadEfectivo, nombreTarjeta, apellidoTarjeta, numeroTarjeta, fechaTarjeta, codigoTarjeta, fechaEntregaProd,
  } = datosForm;

  // Leer valores del form
  const handleChange = (e) => {
    setDatosForm({
      ...datosForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que el carrito tenga un elemento

    // Validar direccion referencia y ciudad

    // Validar metodo de pago

    // Validar fecha entrega

    // Confirmar pedido (sweetalert)
  };

  // TODO: cambiar el default de elegir ciudad

  return (
    <>
      <Header />
      <Container className="my-5">

        <Form>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              placeholder="Mariano Moreno Norte 256"
              name="direccion"
              value={direccion}
              onChange={handleChange}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Referencia</Form.Label>
              <Form.Control
                name="referencia"
                value={referencia}
                placeholder="Departamento, Casa, Estudio"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Ciudad</Form.Label>
              <Form.Select
                defaultValue="Choose..."
                name="ciudad"
                value={ciudad}
                onChange={handleChange}
              >
                {ciudades.map((c) => (
                  <option
                    key={c.id}
                    value={c.id}
                  >
                    {c.nombre}

                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>

          <Form.Group className="my-2">
            <Form.Label as="legend" column sm={2}>
              Pago
            </Form.Label>
            <Form.Check
              inline
              label="Efectivo"
              name="group1"
              type="radio"
              id="efectivo"
              defaultChecked
              onClick={() => setMetodoPago('efectivo')}
            />
            <Form.Check
              inline
              label="Tarjeta Visa"
              name="group1"
              type="radio"
              id="tarjeta"
              onClick={() => setMetodoPago('tarjeta')}
            />
          </Form.Group>

          {metodoPago === 'efectivo' ? (
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <InputGroup className="mb-2">
                  <InputGroup.Text>$</InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Cantidad a Pagar"
                    name="cantidadEfectivo"
                    value={cantidadEfectivo}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Row>
          ) : (
            <>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Nombre del Titular</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Gabriel"
                    name="nombreTarjeta"
                    value={nombreTarjeta}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Apellido del Titular</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Brandalisse"
                    name="apellidoTarjeta"
                    value={apellidoTarjeta}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Número de la Tarjeta</Form.Label>
                <Form.Control
                  placeholder="4453 4587 1212 3254"
                  name="numeroTarjeta"
                  value={numeroTarjeta}
                  onChange={handleChange}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Fecha de Vencimiento</Form.Label>
                  <Form.Control
                    placeholder="MM/AA"
                    name="fechaTarjeta"
                    value={fechaTarjeta}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>CVC</Form.Label>
                  <Form.Control
                    placeholder="123"
                    name="codigoTarjeta"
                    value={codigoTarjeta}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
            </>
          )}

          <Form.Group className="my-2">
            <Form.Label as="legend" column sm={2}>
              Entrega
            </Form.Label>
            <Form.Check
              inline
              label="Lo antes posible"
              name="group2"
              type="radio"
              id="efectivo"
              defaultChecked
              onClick={() => setFechaEntrega('antesPosible')}
            />
            <Form.Check
              inline
              label="Elejir fecha"
              name="group2"
              type="radio"
              id="tarjeta"
              onClick={() => setFechaEntrega('personalizado')}
            />
          </Form.Group>

          {fechaEntrega !== 'antesPosible' && (
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <InputGroup className="mb-2">
                <InputGroup.Text>Dia de Entrega</InputGroup.Text>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="DD/MM/AAAA"
                  name="fechaEntregaProd"
                  value={fechaEntregaProd}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
          </Row>
          )}

          <Button variant="primary" type="submit">
            Confirmar Pedido
          </Button>
        </Form>

      </Container>
      <Footer />
    </>
  );
};

export default Formulario;
