import React, { useContext, useState } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FormContext } from '../FormContext'
import { useForm } from 'react-hook-form';
// import firebase from '../firebase'
import firebaseDb from '../firebase'

const Formulario = () => {

  const initialValue = {
    nombre: '',
    apellido: '',
    pdo: '',
    pda: '',
    circ: '',
    secc: '',
    chacra: '',
    quinta: '',
    fracc: '',
    mza: '',
    parc: '',
    subparc: '',
    recibido: '',
    medido: '',
    confeccionado: ''
  }
  //Context de entradas
  const [formInputs, setFormInputs] = useState(initialValue)
  const [entradas, setEntradas] = useContext(FormContext)

  // hook de React-Form
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    setEntradas([
      ...entradas, data
    ])
    // const db = firebase.firestore();
    // db.collection('info').add(data)

    e.target.reset();
  }

  return (
    <React.Fragment>
      <h2>Formulario de ingreso</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <Form.Group controlId="formBasicNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control ref={register({
                required: { value: true, message: 'Nombre Obligatorio' }
              })} name="nombre" type="text" placeholder="Nombre" value='HolaNombre' />
            </Form.Group>
            <span className="text-danger text-small d-block mb-2">
              {errors?.nombre?.message}
            </span>
          </Col>
          <Col>
            <Form.Group controlId="formBasicApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control ref={register({
                required: { value: true, message: 'Apellido Obligatorio' }
              })} name="apellido" type="text" placeholder="Apellido" />
              <span className="text-danger text-small d-block mb-2">
                {errors?.apellido?.message}
              </span>
            </Form.Group>

          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formBasicPartido">
              <Form.Label>Pdo</Form.Label>
              <Form.Control ref={register({
                required: { value: true, message: 'Pdo Obligatorio' }
              })} name="pdo" type="text" placeholder="117" />
            </Form.Group>
            <span className="text-danger text-small d-block mb-2">
              {errors?.pdo?.message}
            </span>
          </Col>
          <Col>
            <Form.Group controlId="formBasicPartida">
              <Form.Label>Pda</Form.Label>
              <Form.Control ref={register} name="pda" type="text" placeholder="12345" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicCirc">
              <Form.Label>Circ</Form.Label>
              <Form.Control ref={register} name="circ" type="text" placeholder="V" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicSecc">
              <Form.Label>Secc</Form.Label>
              <Form.Control ref={register} name="secc" type="text" placeholder="D" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicChacra">
              <Form.Label>Chacra</Form.Label>
              <Form.Control ref={register} name="chacra" type="text" placeholder="123" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicQuinta">
              <Form.Label>Quinta</Form.Label>
              <Form.Control ref={register} name="quinta" type="text" placeholder="12" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicFracc">
              <Form.Label>Fracc</Form.Label>
              <Form.Control ref={register} name="fracc" type="text" placeholder="123" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicMza">
              <Form.Label>Mza</Form.Label>
              <Form.Control ref={register} name="mza" type="text" placeholder="123" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicParc">
              <Form.Label>Parc</Form.Label>
              <Form.Control ref={register} name="parc" type="text" placeholder="12" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicSubParc">
              <Form.Label>SubParc</Form.Label>
              <Form.Control ref={register} name="subparc" type="text" placeholder="b" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formBasicRecibido">
              <Form.Check ref={register} name="recibido" type="checkbox" label="Recibido" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicMedido">
              <Form.Check ref={register} name="medido" type="checkbox" label="Medido" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicConfeccionado">
              <Form.Check ref={register} name="confeccionado" type="checkbox" label="Confeccionado" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicEnviado">
              <Form.Check ref={register} name="enviado" type="checkbox" label="Enviado" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Button variant="primary" type="submit">
            Guardar
                    </Button>
        </Row>
      </Form>
    </React.Fragment>
  )
}

export default Formulario;