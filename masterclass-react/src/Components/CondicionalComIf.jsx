import React from 'react'
import If from './If'

export default props =>

    <div>
        <h1>O Número {props.number} é: </h1>

        <If test={props.number % 2 ===  0}>
              <span>par</span>  
        </If>

        <If test={props.number % 2 ===  1}>
           <span>Impar</span>  
        </If>

    </div>