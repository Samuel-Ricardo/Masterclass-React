import React from 'react'

export default class contador extends React.Component {

    constructor(props){
        super(props)

        this.state = {

            passo: props.passo,
            value: 0
        }
    }


    render(){

        return(

            <div>

                <header>
                    <h2>Contador</h2>
                    <h4>Passo: {this.state.passo}</h4>
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