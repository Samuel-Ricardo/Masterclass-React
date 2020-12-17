import React from 'react'

export default class contador extends React.Component {

    state = {

        passo: 1,
        value: 0
    }


    render(){

        return(

            <div>

                <header>
                    <h2>Contador</h2>
                    <h4>Valor: {this.state.value}</h4>
                </header>

                <section>
                    <button>+</button>
                    <button>-</button>
                </section>

            </div>
            
        )
    }

        
}