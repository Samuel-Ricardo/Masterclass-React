import React, {useState} from 'react'
import Sub from './Sub'

export default props =>{

    const [num, setNum] = useState(0)
    const [text, setText] = React.useState('Valor ')

    function atClick(number, text){

        setNum(number)
        setText(text)
        console.log("nmero: "+number+" texto:"+text)
    }

    return (
        
        <div>

            <h4> {text} : {num} </h4>
                <Sub atClick= {atClick} ></Sub>
        </div>    
    )
}