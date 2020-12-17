import React from 'react'

export default props => {


    const [numbers, setNumbers] = React.useState(Array(props.quantidadeDeNumeros).fill(0))


    function generateNumberThatDontExist(numbers){

        const min = props.min || 1;
        const max = props.max || 100;

        const newNumber = parseInt( Math.random() * (max - min)) + min

        return numbers.includes(newNumber) 
        
        ? generateNumberThatDontExist(numbers)

        : newNumber
    }

    function generateNewNumbers(){

        const newArray = Array(props.quantidadeDeNumeros)
        .fill(0)
        .reduce((acumulator, actualElement) => {
            const newNumber = generateNumberThatDontExist(acumulator)
            console.log(acumulator, actualElement, newNumber)

                return [...acumulator, newNumber]
        }, [])
        .sort((a, b) => a-b) // ascending order // orden crescente //
        
        setNumbers(newArray)
    }


    return(

        <div>        

            <h2>Mega Sena</h2>

            <h3> {numbers.join(' ')}</h3>

            <button onClick={generateNewNumbers}> Sortear </button>

        </div>
    )
}

   