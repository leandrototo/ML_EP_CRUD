import React from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Tabla from './components/Tabla';
import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <div className="App container">
      <FormProvider >
        <Formulario />
        <Tabla />
      </FormProvider>
    </div>
  );
}

export default App;
