import React from 'react';
import Formulario from './components/Formulario';
import { FormProvider } from "./context/FormContext";
import './App.css'

function App() {
  return (
    <div className="App container">
      <FormProvider >
        <Formulario />
      </FormProvider>
    </div>
  );
}

export default App;
