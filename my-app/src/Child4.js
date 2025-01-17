import React, {useContext} from "react";
import { CountContext } from "./ContextExp";

export default function Child4(){
    const {count,setCount} = useContext(CountContext);
    if (count > 0) 
        return(
            <div style={{border: '1px solid black'}}>
            <h1>Child4 Component</h1>
            <button onClick={()=> setCount(count - 1)}>decrement</button>
            </div>
        );
    else
        return(
            <div style={{border: '1px solid black'}}>
            <h1>Child4 Component</h1>
            </div>
        );
}