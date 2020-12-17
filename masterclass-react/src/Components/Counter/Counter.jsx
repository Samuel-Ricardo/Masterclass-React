import React from 'react'
import './Counter.css'

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
                   
                   <div>
                        <label for='passInput'>Passo: </label>

                        <input 
                            type="number"
                            name="passInput" 
                            id="passInput" 
                            value= {this.state.passo} 
                            onChange={e => this.setState({
                                            passo : +e.target.value
                                        })
                                     }
                        />
                   </div>

                    <h4>Valor: {this.state.value}</h4>
                </header>

                <section>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </section>

            </div>
            
        )
    }

        
}