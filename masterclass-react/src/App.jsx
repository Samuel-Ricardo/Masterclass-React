import React from 'react'

import './Components/Layout/Card.css'
import './App.css'

import First from './Components/First'
import ComponentParameter from './Components/ComponentParameter'
import ChildrenComp from './Components/ChildrenComp'
import Card from './Components/Layout/Card'

export default props =>

    <div className='App'>

        <Card   title='Primeiro Component'>
        
            <First/>
        
        </Card>


        <Card   title='Component Com parametro'>

            <ComponentParameter title='Titulo Bombástico' subtitle='Subtitulo Bombástico'/>

            <ComponentParameter title='Segundo Titulo Bombástico'/>
        </Card>

        <Card   title='Componente com filhos'>
          
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

        </Card>

        <Card   title='Exercicio 01'>
            Contedudo do exercicio
        </Card>

    </div>
