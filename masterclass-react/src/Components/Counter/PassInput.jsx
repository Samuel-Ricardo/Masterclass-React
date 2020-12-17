import React from 'react'

export default props =>

<div>
    <label htmlFor='passInput'>Passo: </label>

    <input 
        type="number"
        name="passInput" 
        id="passInput" 
        value= {props.passo} 
        onChange={e => props.setPass(+e.target.value)}
    />

</div>