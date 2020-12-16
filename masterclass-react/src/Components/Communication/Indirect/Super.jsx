import React from 'react'
import Sub from './Sub'

export default props =>{

    function atClick(number){

        console.log('Action!!!!!!')
        console.log(number)
    }

    return (
        
        <div>

            <h4> Gerar Valor </h4>
                <Sub atClick= {atClick} ></Sub>
        </div>    
    )
}