import React from 'react'

export default class contador extends React.Component {

    state = {

        passo: this.props.passo || 1,
        value: this.props.value || 0
    }

    increment = () => {

        this.setState({

            value : this.state.value + this.state.passo
        })
    }

    decrement = () => {

        this.setState({

            value : this.state.value - this.state.passo
        })
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
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>_</button>
                </section>

            </div>
            
        )
    }

        
}