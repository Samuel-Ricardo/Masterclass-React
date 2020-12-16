import React from 'react'
import ChildrenComp from './ChildrenComp'

export default props => 

    <div>
        <ChildrenComp surname={...props}> <strong> Carlos </strong> </ChildrenComp>

        <ChildrenComp surname='Silva'> Pedro </ChildrenComp>

        <ChildrenComp surname='Silva'> Joana </ChildrenComp>
    </div>
