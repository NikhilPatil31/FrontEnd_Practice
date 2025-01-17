import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {increment} from '../features/counterSlice'

export default function Child2(){
    
    const count = useSelector(state => state.Counter.value)
    const dispatch = useDispatch()

    if (count === 10)
        return(
            <div>
            <h1>Child2 Component</h1>
            </div>
        );
    else
        return(
            <div>
                <h1>Child2 Component</h1>
                <button onClick={()=> dispatch(increment())}>increment</button>
            </div>
        );
}