import './App.css';
import Form from './components/Form'
import React, { useState } from 'react'

//      STEP 1(b) {the shape of the state that drives the form}
const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
//      STEP 1(a) {state to hold all values of the form}
const [formValues, setformValues] = useState(initialFormValues)

  return (
    <div className="App">
      <Form values={formValues}/>{/*  STEP 2 {pass props to form component} */}
    </div>
  );
}

export default App;
