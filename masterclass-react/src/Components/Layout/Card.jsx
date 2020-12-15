import React from 'react'

export default props => 

<div className = 'Card'>

    <section className='Conteudo'>
        {props.children}
    </section>

    <footer className = 'Footer'>
        {props.title}
    </footer>

</div>