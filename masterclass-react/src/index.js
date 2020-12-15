import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import First from './Components/First'
import ComponentParameter from './Components/ComponentParameter'
import ChildrenComp from './Components/ChildrenComp'

ReactDOM.render(

    <div>
        {/*<First/>
        <ComponentParameter title='Titulo Bombástico' subtitle='Subtitulo Bombástico'/>

        <ComponentParameter title='Segundo Titulo Bombástico'/>*/}

        <ChildrenComp>
            <ul>
                <li>
                    Samuel
                </li>

                <li>
                    Otávio
                </li>

                <li>
                    Petra
                </li>

                <li>
                    Julia
                </li>

                <li>
                    Pedro
                </li>
            </ul>
        </ChildrenComp>

    </div>
    ,
    document.getElementById('root')
)