import React from 'react'
import Sub from './Sub'

export default props =>{

    return (
        function atClick(number){

            console.log('Action!!!!!!')
            console.log(number)
        }

        <div>

            <h4> Gerar Valor </h4>
                <Sub click= {atClick()} ></Sub>
        </div>    
    )
}