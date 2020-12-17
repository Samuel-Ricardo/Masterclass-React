import React from 'react'
import './Counter.css'

import Display from './Display'
import PassInput from './PassInput'
import Button from './Button'

export default class contador extends React.Component {

    state = {

        passo: this.props.passo || 1,
        value: this.props.value || 0
    }

    setPass = (newPass) => {
    
        this.setState({
            passo : newPass
        })
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
                   
                    <PassInput passo = {this.state.passo} setPass = {this.setPass}/>

                    <Display value = {this.state.value}/>
                </header>

                <section>
                    <Button onClick={this.increment}>+</Button>
                    <Button onClick={this.decrement}>-</Button>
                </section>

            </div>
            
        )
    }

        
}