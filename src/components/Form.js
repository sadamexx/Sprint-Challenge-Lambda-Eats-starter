import React from 'react';

function PizzaForm(props){
const { values, submitHandler, changeHandler, checkBoxHandler } = props




    return(
        <form>
            <label>
                Full Name:
                <input
                value={values.name}
                onChange={changeHandler} 
                name="name"
                type="text"/>
             </label> 
            
             <label>
                Choice of Sauce:                
                <input
                value={values.sauce}
                onChange={changeHandler} 
                name="original"
                type="radio"/>
                Original Red Sauce
                <input
                value={values.sauce}
                onChange={changeHandler} 
                name="garlic"
                type="radio"/>
                White Garlic Alfredo
                <input
                value={values.sauce}
                onChange={changeHandler} 
                name="bbq"
                type="radio"/>
                Bold Texas BBQ
                <input
                value={values.sauce}
                onChange={changeHandler} 
                name="ranch"
                type="radio"/>
                Creamy House Ranch
             </label> 

            <label>
                Choose Size:
                <select name="size" onChange={changeHandler} value={values.size}>
                    <option value=''>Please choose</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='family'>Family</option>
                </select>    
            </label>
            <label>
                Add meats:
                <input
                value={values.toppings.bacon}
                onChange={checkBoxHandler} 
                name="bacon"
                type="checkbox"
                /> Bacon 
            
                <input 
                value={values.toppings.canadianBacon}
                onChange={checkBoxHandler} 
                name="canadianBacon"
                type="checkbox"
                /> Canadian Bacon 
            
                <input 
                value={values.toppings.chicken}
                onChange={checkBoxHandler} 
                name="chicken"
                type="checkbox"
                /> Premium Grilled chicken 
            
                <input 
                value={values.toppings.pepperoni}
                onChange={checkBoxHandler} 
                name="pepperoni"
                type="checkbox"
                /> Pepperoni 
            
                <input 
                value={values.toppings.sausage}
                onChange={checkBoxHandler} 
                name="sausage"
                type="checkbox"
                /> Italian Sausage 
            
                <input 
                value={values.toppings.salami}
                onChange={checkBoxHandler} 
                name="salami"
                type="checkbox"
                /> Salami 
            </label>

            <label>
                Add Veggies:
                <input 
                value={values.toppings.greenPep}
                onChange={checkBoxHandler} 
                name="greenPep"
                type="checkbox"
                /> Green Peppers 
            
                <input 
                value={values.toppings.mushrooms}
                onChange={checkBoxHandler} 
                name="mushrooms"
                type="checkbox"
                /> Mushrooms 
            
                <input 
                value={values.toppings.olives}
                onChange={checkBoxHandler} 
                name="olives"
                type="checkbox"
                /> Black Olives
            
                <input 
                value={values.toppings.onions}
                onChange={checkBoxHandler} 
                name="onions"
                type="checkbox"
                /> Onions 
            
                <input 
                value={values.toppings.pineapple}
                onChange={checkBoxHandler} 
                name="pineapple"
                type="checkbox"
                /> Pineapple
            
                <input 
                value={values.toppings.tomato}
                onChange={checkBoxHandler} 
                name="tomato"
                type="checkbox"
                /> Diced Tomatoes 
            </label>
            
            <label>
                Special Instructions:
                <input 
                value={values.special}
                onChange={changeHandler}
                name="special"
                type="textarea"
                placeholder="Special Instructions here"/>
            </label>
            <label>
                <input 
                value={values.quantity}
                onChange={changeHandler}
                type="number"
                name="quantity"
                min="1"
                max="10"                
                />
            </label>
        <button onClick={submitHandler}>Add To Order</button>
        </form>
    )
}

export default PizzaForm;