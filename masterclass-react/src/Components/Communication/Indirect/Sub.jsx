import React from 'react'

export default props =>{

    function clicked(){

        props.atClick(Math.random)
    }
    
    return (

        <button type='button' onClick={clicked}>Me clique</button>
    )
}