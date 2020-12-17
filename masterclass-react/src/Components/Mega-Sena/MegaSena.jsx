import React from 'react'

export default props => {


    const [numbers, setNumbers] = React.useState(Array(props.quantidadeDeNumeros).fill(0))

    return(

        <div>        

            <h2>Mega Sena</h2>

            <h3> {numbers.join(' ')}</h3>

            <button> Sortear </button>

        </div>
    )
}

   