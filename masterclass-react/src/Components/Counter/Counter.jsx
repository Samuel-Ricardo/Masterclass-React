import React from 'react'
import './Counter.css'

import Display from './Display'

export default class contador extends React.Component {

    state = {

        passo: this.props.passo || 1,
        value: this.props.value || 0
    }

    setPass = (newPass) => {

        return this.setState({
            passo : newPass
        })
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