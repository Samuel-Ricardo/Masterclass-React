import React from 'react'

import './Components/Layout/Card.css'
import './App.css'

import First from './Components/First'
import ComponentParameter from './Components/ComponentParameter'
import ChildrenComp from './Components/ChildrenComp'
import Card from './Components/Layout/Card'
import Repeat from './Components/Repeat'
import Condicional from './Components/Condicional'

export default props =>

    <div className='App'>

        <Card   title='#01 - Primeiro Component'>
        
            <First/>
        
        </Card>


        <Card   title='#02 - Component Com parametro'>

            <ComponentParameter title='Titulo Bombástico' subtitle='Subtitulo Bombástico'/>

            <ComponentParameter title='Segundo Titulo Bombástico'/>
        </Card>

        <Card   title='#03 - Componente com filhos'>
          
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

        <Card   title='#04 - Repetiçao'>
        
            <Repeat/>
        
        </Card>

        <Card   title='#05 - Condicional'>
        
            <Condicional number={10}/>

            <Condicional number={1}/>
        
        </Card>

    </div>
