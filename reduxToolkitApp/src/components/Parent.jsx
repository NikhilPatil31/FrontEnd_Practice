import React from "react";
import Child1 from './Child1'
import Child2 from './Child2'
import Child3 from './Child3'
import Child4 from './Child4'
import { useSelector } from "react-redux";

const Parent = () => {

    const count = useSelector(state => state.Counter.value)

    return(
        <>
        <h1>Parent Component</h1>
            <h2>Count : {count}</h2>
            <Child1 />
            <Child2 />
            <Child3 />
            <Child4 />
        </>
    )
}

export default Parent