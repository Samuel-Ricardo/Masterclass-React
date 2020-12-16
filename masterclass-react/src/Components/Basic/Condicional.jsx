import React from 'react'

export default props =>

    <div>
        <h1>O Número {props.number} é: </h1>

        {props.number % 2 ===  0 ? //if (number%2 === 0)

            <span>par</span>  //if true

            :
            <span>Impar</span> //elseif // if false
        }

    </div>