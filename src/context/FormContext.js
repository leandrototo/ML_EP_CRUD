// dependencias
import React, { createContext, useReducer } from 'react';

export const FormContext = createContext();

// Simulo recibir de BD (valores)
const initialState = {
  EPs: [{
    nombre: 'Juanctio',
    apellido: 'Rodriguez',
    pdo: '117',
    pda: '12345',
    circ: '',
    secc: '',
    chacra: '',
    quinta: '',
    fracc: '',
    mza: '',
    parc: '15',
    subparc: 'b',
    recibido: true,
    medido: false,
    confeccionado: false
  }, {
    nombre: 'Juan Manuel',
    apellido: 'Serrat',
    pdo: '047',
    pda: '98765',
    circ: 'V',
    secc: '3',
    chacra: '16',
    quinta: 'Q',
    fracc: '',
    mza: '16b',
    parc: '13',
    subparc: 'c',
    recibido: false,
    medido: false,
    confeccionado: true
  }]
};

// Creo Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EP':
      return {
        EPs: [...state.EPs, action.payload]
      };
    case 'DEL_EP':
      return {
        EPs: state.EPs.filter((item) => (item.pdo !== action.payload.pdo) || (item.pda !== action.payload.pda))
      };
    case 'UPD_EP':
      const filtrado = state.EPs.filter((item) => (item.pdo !== action.payload.pdo) || (item.pda !== action.payload.pda))
      return {
        EPs: [...filtrado, action.payload]
      };
    default:
      throw new Error();
  }
}

export const FormProvider = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  // console.log(props);
  return (
    <FormContext.Provider value={[state, dispatch]}>
      {props.children}
    </ FormContext.Provider >
  )
}
