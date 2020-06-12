import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table'
import './Tabla.css'
import { FormContext } from '../context/FormContext'

import { IoIosCheckboxOutline, IoIosSquareOutline } from "react-icons/io";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Tabla() {

    const [state, dispatch] = useContext(FormContext)

    return (
        <React.Fragment>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Pdo</th>
                        <th>Pda</th>
                        <th>Circ</th>
                        <th>Secc</th>
                        <th>Chacra</th>
                        <th>Quinta</th>
                        <th>Fracc</th>
                        <th>Mza</th>
                        <th>Parc</th>
                        <th>SubParc</th>
                        <th>Rec</th>
                        <th>Med</th>
                        <th>Conf</th>
                        <th>Env</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {state.EPs.map((item) =>
                        <tr>
                            <td>{item.nombre}</td>
                            <td>{item.apellido}</td>
                            <td>{item.pdo}</td>
                            <td>{item.pda}</td>
                            <td>{item.circ}</td>
                            <td>{item.secc}</td>
                            <td>{item.chacra}</td>
                            <td>{item.quinta}</td>
                            <td>{item.fracc}</td>
                            <td>{item.mza}</td>
                            <td>{item.parc}</td>
                            <td>{item.subparc}</td>
                            <td>
                                {/* <InputUpdate item={item} /> */}
                                {item.recibido ? <IoIosCheckboxOutline /> : < IoIosSquareOutline />}
                            </td>
                            <td>{item.medido ? <IoIosCheckboxOutline /> : < IoIosSquareOutline />}</td>
                            <td>{item.confeccionado ? <IoIosCheckboxOutline /> : < IoIosSquareOutline />}</td>
                            <td>{item.enviado ? <IoIosCheckboxOutline /> : < IoIosSquareOutline />}</td>
                            <td>
                                <a className="text-dark mr-2"> <FaEdit /> </a>
                                <a><FaTrash /></a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </React.Fragment>
    )
}
