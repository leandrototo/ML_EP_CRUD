// dependencias
import React, { createContext, useState } from 'react';
import firebaseDb from './firebase';

export const FormContext = createContext();
export const FormProvider = (props) => {

    const [entradas, setEntradas] = useState([])
    // const [currentID, setCurrentID] = useState('')

    // Carga de Collection cuando renderiza la pag - fetch DB Firestore
    // React.useEffect(() => {
    //     firebaseDb.child('EstadosParcelarios').on('value', snapshot => {
    //         if (snapshot.val() != null) {
    //             setEntradas(
    //                 { ...snapshot.val() }
    //             )
    //         }
    //     })
    // }, [])

    return (
        <FormContext.Provider value={[entradas, setEntradas]}>
            {props.children}
        </ FormContext.Provider >
    )
}
