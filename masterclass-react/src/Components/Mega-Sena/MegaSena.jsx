import React from 'react'

export default props => {


    const [numbers, setNumbers] = React.useState(Array(props.quantidadeDeNumeros).fill(0))


    function generateNumberThatDontExist(numbers){

        const min = props.min || 1;
        const max = props.max || 100;

        const newNumber = parseInt( Math.random() * (max - min)) + min

        return numbers.includes(newNumber) 
        
        ? generateNumbersThatDontExist(numbers)

        : generateNewNumbers()
    }

    function generateNewNumbers(){

        const newArray = Array (props.quantidadeDeNumeros)
        .fill(0)
        .reduce((acumulator, e) => {
            const newNumber = generateNewNumbers(acumulator)
            console.log(acumulator, e, newNumber)

                return [...acumulator, newNumber]
        }, [])
        .sort((a, b) => a-b) // crescent order

        setNumbers(newNumber)
        
    }


    return(

        <div>        

            <h2>Mega Sena</h2>

            <h3> {numbers.join(' ')}</h3>

            <button onCLick={this.generateNewNumbers()}> Sortear </button>

        </div>
    )
}

   