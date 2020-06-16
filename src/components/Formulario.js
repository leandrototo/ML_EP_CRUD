import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FormContext } from '../context/FormContext'
import Tabla from "./Tabla";

const Formulario = () => {

  const [state, dispatch] = useContext(FormContext);

  const [selectedEP, setSelectedEP] = useState(initialValue);
  // hook de React-Form
  const { register, errors, handleSubmit, setValue, reset } = useForm({ defaultValues: initialValue });

  const onSubmit = (data, e) => {
    if (!selectedEP.nombre) {
      dispatch({
        type: "ADD_EP",
        payload: data
      });
      reset(initialValue);
    } else {
      dispatch({
        type: "UPD_EP",
        payload: data
      });
      reset(initialValue);
    }
  }

  const onDelete = data => {
    dispatch({
      type: "DEL_EP",
      payload: selectedEP
    });
    reset(initialValue);
    setSelectedEP(initialValue);
  }


  const handleSelectedEP = (EP) => {
    setSelectedEP(EP);
    console.log(EP);
  }

  useEffect(() => {
    setValue([{ nombre: selectedEP.nombre }, { apellido: selectedEP.apellido },
    { pdo: selectedEP.pdo }, { pda: selectedEP.pda }, { circ: selectedEP.circ }, { secc: selectedEP.secc }, { chacra: selectedEP.chacra }, { quinta: selectedEP.quinta }, { fracc: selectedEP.fracc },
    { mza: selectedEP.mza }, { parc: selectedEP.parc }, { subparc: selectedEP.subparc }, { recibido: selectedEP.recibido }, { medido: selectedEP.medido }, { confeccionado: selectedEP.confeccionado }]);
    // return () => {
    //   console.log('Desmonta');
    // }
  }, [selectedEP])

  const handleCancel = () => {
    reset(initialValue);
    setSelectedEP(initialValue);
  }
  return (
    <React.Fragment>
      <h2 id="titulo">Formulario de ingreso</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <Form.Group controlId="formBasicNombre">
              <Form.Control ref={register({
                required: { value: true, message: 'Nombre Obligatorio' }
              })} name="nombre" type="text" placeholder="Nombre" />
            </Form.Group>
            <span className="text-danger text-small d-block mb-2">
              {errors?.nombre?.message}
            </span>
          </Col>
          <Col>
            <Form.Group controlId="formBasicApellido">
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
              <Form.Control ref={register({
                required: { value: true, message: 'Pdo Obligatorio' }
              })} name="pdo" type="text" placeholder="Pdo" />
            </Form.Group>
            <span className="text-danger text-small d-block mb-2">
              {errors?.pdo?.message}
            </span>
          </Col>
          <Col>
            <Form.Group controlId="formBasicPartida">
              <Form.Control ref={register} name="pda" type="text" placeholder="Pda" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicCirc">
              <Form.Control ref={register} name="circ" type="text" placeholder="Circ" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicSecc">
              <Form.Control ref={register} name="secc" type="text" placeholder="Secc" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicChacra">
              <Form.Control ref={register} name="chacra" type="text" placeholder="Chacra" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicQuinta">
              <Form.Control ref={register} name="quinta" type="text" placeholder="Quinta" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicFracc">
              <Form.Control ref={register} name="fracc" type="text" placeholder="Fracc" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicMza">
              <Form.Control ref={register} name="mza" type="text" placeholder="Mza" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicParc">
              <Form.Control ref={register} name="parc" type="text" placeholder="Parc" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicSubParc">
              <Form.Control ref={register} name="subparc" type="text" placeholder="SubParc" />
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
        <Row className="botonera">
          {selectedEP.nombre === '' ? <Button variant="outline-primary bot" type="submit">Guardar</Button> : <Button variant="outline-primary bot" type="submit">Guarda Cambios</Button>}
          <Button variant="outline-danger bot" onClick={onDelete}>Eliminar</Button>
          <Button variant="outline-success bot" onClick={handleCancel}>Limpiar</Button>
        </Row>
      </Form>

      <Tabla handleSelectedEP={handleSelectedEP} />
    </React.Fragment>
  )
}

export default Formulario;

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