import React from 'react'
import './Counter.css'

import Display from './Display'

export default class contador extends React.Component {

    state = {

        passo: this.props.passo || 1,
        value: this.props.value || 0
    }

    increment = () => {

        this.setState({

            value : this.state.value + this.state.passo
        })

        console.log(this.state.value)
    }

    decrement = () => {

        this.setState({

            value : this.state.value - this.state.passo
        })

        console.log(this.state.value)
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

                    <Display value = {this.state.value}/>
                </header>

                <section>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </section>

            </div>
            
        )
    }

        
}