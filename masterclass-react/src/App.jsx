import React from 'react'


import './index.css'
import './Components/Layout/Card.css'

import First from './Components/First'
import ComponentParameter from './Components/ComponentParameter'
import ChildrenComp from './Components/ChildrenComp'
import Card from './Components/Layout/Card'

default export props =>

    <div>

        <Card   title='Primeiro Component'>
        
            <First/>
        
        </Card>

        <Card   title='Exercicio 01'>
            Contedudo do exercicio
        </Card>






        {/*<First/>
        <ComponentParameter title='Titulo Bombástico' subtitle='Subtitulo Bombástico'/>

        <ComponentParameter title='Segundo Titulo Bombástico'/>

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

        */}



    </div>
