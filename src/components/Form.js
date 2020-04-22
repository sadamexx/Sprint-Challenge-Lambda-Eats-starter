import React from 'react';

function PizzaForm(){





    return(
        <form>
            <label>
                Choose Size:
                <select name="size">
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
                name="bacon"
                type="checkbox"
                /> Bacon 
            
                <input 
                name="canadianBacon"
                type="checkbox"
                /> Canadian Bacon 
            
                <input 
                name="chicken"
                type="checkbox"
                /> Premium Grilled chicken 
            
                <input 
                name="pepperoni"
                type="checkbox"
                /> Pepperoni 
            
                <input 
                name="sausage"
                type="checkbox"
                /> Italian Sausage 
            
                <input 
                name="salami"
                type="checkbox"
                /> Salami 
            </label>

            <label>
                Add Veggies:
                <input 
                name="greenPep"
                type="checkbox"
                /> Green Peppers 
            
                <input 
                name="mushrooms"
                type="checkbox"
                /> Mushrooms 
            
                <input 
                name="olives"
                type="checkbox"
                /> Black Olives
            
                <input 
                name="onions"
                type="checkbox"
                /> Onions 
            
                <input 
                name="pineapple"
                type="checkbox"
                /> Pineapple
            
                <input 
                name="tomato"
                type="checkbox"
                /> Diced Tomatoes 
            </label>
            
            <label>
                Special Instructions:
                <input 
                name="special"
                type="textarea"
                placeholder="Special Instructions here"/>
            </label>

        </form>
    )
}

export default PizzaForm;