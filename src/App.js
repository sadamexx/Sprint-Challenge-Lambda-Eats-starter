import React, { useState } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import pizza from './Assets/Pizza.jpg';
import PizzaForm from './components/Form';

const initialFormValues = {
  name:'',
  size: '',
  sauce: '',
  special: '',
  quantity: '1',
  toppings: {
    bacon: false,
    canadianBacon: false,
    chicken: false,
    pepperoni: false,
    sausage: false,
    salami: false,    
    greenPep: false,
    mushrooms: false,
    olives: false,
    onions: false,
    pineapple: false,
    tomato: false
  }
}

const initialOrderValue = [{
    id: Date.now(),
    name:'',
    size: '',
    sauce: '',
    special: '',
    quantity: '1',
    toppings: {
      bacon: false,
      canadianBacon: false,
      chicken: false,
      pepperoni: false,
      sausage: false,
      salami: false,    
      greenPep: false,
      mushrooms: false,
      olives: false,
      onions: false,
      pineapple: false,
      tomato: false
  }
}]

const App = () => {
  const [order, setOrder] = useState(initialOrderValue);
  const [formValues, setFormValues] = useState(initialFormValues);

  const routeToForm = event => {

  }
  
  const submitHandler = event => {
    event.preventDefault();

    const newOrder = {
      id: Date.now(),
      name: formValues.name,
      size: formValues.size,
      sauce: formValues.sauce,
      special: formValues.special,
      quantity: formValues.quantity,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true)
    }
  
    setOrder([...order, newOrder])
    // debugger
    setFormValues(initialFormValues)
  }
  
  const changeHandler = event => {
    setFormValues({
      ...formValues, [event.target.name]: event.target.value
    });
  };

  const checkBoxHandler = event => {
    setFormValues({
      ...formValues, 
      toppings: {
        [event.target]: event.target.checked
      }
      
    })
  }


  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
        <Link to='/'>Help</Link>
      </nav>
      <div className="App-header">
        <h1> Build Your Own Pizza</h1>
        <img src={pizza} className="App-logo" alt="pizza" />
       <button onClick={routeToForm}> Order pizza!</button>
      </div>
      <PizzaForm 
      values={formValues}
      checkBoxHandler={checkBoxHandler}
      changeHandler={changeHandler}
      submitHandler={submitHandler}/>
    </div>
  );
};
export default App;
