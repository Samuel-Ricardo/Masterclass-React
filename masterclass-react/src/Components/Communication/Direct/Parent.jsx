import React from 'react'
import ChildrenComp from './ChildrenComp'

export default props => 

    <div>
        <ChildrenComp {...props}> <strong> Carlos </strong> </ChildrenComp>

        <ChildrenComp surname={props.surname}> Pedro </ChildrenComp>

        <ChildrenComp surname='Silva'> Joana </ChildrenComp>
    </div>
