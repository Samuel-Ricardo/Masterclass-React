import React from 'react'

export default porps => {

    const [name,setName] = React.useState('pedro')

    return(

        <>
            <h4>{name}</h4>

            <input type='text' value = {name} 
                
                onChange={
                    e => setName(e.target.value)
                }></input>

        </>
    )
}