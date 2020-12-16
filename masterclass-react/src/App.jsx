import React from 'react'

import './Components/Layout/Card.css'
import './App.css'

import First from './Components/Basic/First'
import ComponentParameter from './Components/Basic/ComponentParameter'
import ChildrenComp from './Components/Basic/ChildrenComp'
import Card from './Components/Layout/Card'
import Repeat from './Components/Basic/Repeat'
import Condicional from './Components/Basic/Condicional'
import CondicionalComIf from './Components/Basic/CondicionalComIf'
import Parent from'./Components/Communication/Direct/Parent'
import Super from './Components/Communication/Indirect/Super'
import Form from './Components/Input/Form'

export default props =>

    <div className='App'>

        <Card   title='#01 - Primeiro Component' color='#D2691E'>
        
            <First/>
        
        </Card>


        <Card   title='#02 - Component Com parametro' color='#D2691E'>

            <ComponentParameter title='Titulo Bombástico' subtitle='Subtitulo Bombástico'/>

            <ComponentParameter title='Segundo Titulo Bombástico'/>
        </Card>

        <Card   title='#03 - Componente com filhos' color='#D2691E'>
          
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

        <Card   title='#04 - Repetiçao' color='#D2691E'>
        
            <Repeat/>
        
        </Card>

        <Card   title='#05 - Condicional V1' color='#D2691E'>
        
            <Condicional number={10}/>

            <Condicional number={1}/>
        
        </Card>

        <Card   title='#06 - Condicional V2' color='#D2691E'>
        
            <CondicionalComIf number={2}/>

            <CondicionalComIf number={5}/>
    
        </Card>

        <Card   title='#07 - Comunicaçao Direta' color='#D2691E'>
        
            <Parent surname='Freitas' />
    
        </Card>

        <Card   title='#08 - Comunicaçao Indireta' color='#D2691E'>
        
            <Super/>
    
        </Card>

        <Card   title='#09 - input' color='#D2691E'>
        
            <Form/>
    
        </Card>

    </div>
