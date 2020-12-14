import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import First from './Components/First'
import ComponentParameter from './Components/ComponentParameter'

ReactDOM.render(

    <div>
        <First/>
        <ComponentParameter title='Titulo Bombástico' subtitle='Subtitulo Bombástico'></ComponentParameter>
    </div>
    ,
    document.getElementById('root')
)