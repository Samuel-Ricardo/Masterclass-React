import React from 'react'
import ProductList from '../Data/Products'

function getProductList(){

    return(
        ProductList.map((produtc)=>{

            return(
                <li key={produtc.id}>
                        {produtc.id} - {produtc.name} - R$ {produtc.price}
                </li>
            )
        })
    )
}

export default (porps) =>{

    return (
        <ul>
            {getProductList}
        </ul>
    )
}