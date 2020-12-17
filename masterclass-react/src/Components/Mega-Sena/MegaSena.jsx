import React from 'react'

export default props => {


    const [numbers, setNumbers] = React.useState(Array(props.quantidadeDeNumeros).fill(0))


    function generateNumbersThatDontExist(numbers){

        const min = props.min || 1;
        const max = props.max || 100;

        const newNumber = parseInt( Math.random() * (max - min)) + min

        return numbers.includes(newNumber) 
        
        ? generateNumbersThatDontExist(numbers)

        : generateNewNumber()
    }


    return(

        <div>        

            <h2>Mega Sena</h2>

            <h3> {numbers.join(' ')}</h3>

            <button onCLick={this.generateNubers}> Sortear </button>

        </div>
    )
}

   