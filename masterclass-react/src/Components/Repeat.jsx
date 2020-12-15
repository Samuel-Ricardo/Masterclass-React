import React from 'react'
import ProductList from '../Data/Products'

export default (porps) =>{

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

    return (
        <ul>
            {getProductList()}
        </ul>
    )
}