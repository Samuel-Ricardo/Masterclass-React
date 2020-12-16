import React, { Children } from 'react'
import './Children'

export default props => 

    <div>
        <Children surname='Silva'> <strong> Carlos </strong> </Children>

        <Children surname='Silva'> Pedro </Children>

        <Children surname='Silva'> Joana </Children>
    </div>
