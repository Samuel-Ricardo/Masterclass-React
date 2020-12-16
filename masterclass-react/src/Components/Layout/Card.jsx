import React from 'react'

//Props é uma constante, nao pode ser alterada

//Props => const props

export default props => 

<div className = 'Card'  style={
        {
            borderColor : props.color
        }}
>

    <section className='Conteudo'>
        {props.children}
    </section>

    <footer className = 'Footer' style={
        {
            backgroundColor : props.color
        }}
    >
        {props.title}
    </footer>

</div>