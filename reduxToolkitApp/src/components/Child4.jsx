import React from "react";
import {useDispatch, useSelector} from "react-redux"
import {decrement} from "../features/counterSlice"

export default function Child4(){
    
    const count = useSelector(state => state.Counter.value)
    const dispatch = useDispatch()

    if (count > 0) 
        return(
            <div>
            <h1>Child4 Component</h1>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            </div>
        );
    else
        return(
            <div>
            <h1>Child4 Component</h1>
            </div>
        );
}