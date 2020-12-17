import React from 'react'

export default props =>

<div>
    <label for='passInput'>Passo: </label>

    <input 
        type="number"
        name="passInput" 
        id="passInput" 
        value= {props.passo} 
        onChange={e => props.changePass(e.target.value)}
    />
    
</div>