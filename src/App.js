import React, { useState } from "react";
import { Route, Link } from 'react-router-dom';
import './App.css';
import pizza from './Assets/Pizza.jpg';
import PizzaForm from './components/Form';

const initialFormValues = {
  size: '',
  sauce: '',
  special: '',
  meat: {
    bacon: false,
    canadianBacon: false,
    chicken: false,
    pepperoni: false,
    sausage: false,
    salami: false
  },
  veggies: {    
    greenPep: false,
    mushrooms: false,
    olives: false,
    onions: false,
    pineapple: false,
    tomato: false
  }
}

const routeToForm = event => {

}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  return (
    <div>
      <nav >
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
        <Link to='/'>Help</Link>
      </nav>
      <div className="App-header">
        <h1> Build Your Own Pizza</h1>
        <img src={pizza} className="App-logo" alt="pizza" />
       <button onClick={routeToForm}> Create my pizza!</button> 
      </div>
      <PizzaForm />
    </div>
  );
};
export default App;
