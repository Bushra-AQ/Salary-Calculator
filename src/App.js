import './App.css';
import React, { useState } from 'react';
import FormInputComponent from './components/formInputComponent/FormInputComponent';
import ResultComponent from './components/resultComponent/ResultComponent';

function App() {
  
  const [formData, setFormData] = useState({});
  return (
    <div className="App">
      <FormInputComponent formData={formData} setFormData={setFormData} />
      <ResultComponent formData={formData} />
    </div>
  );
}

export default App;
