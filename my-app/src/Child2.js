import React, {useContext} from "react";
import { CountContext } from "./ContextExp";

export default function Child2(){
    const {count,setCount} = useContext(CountContext);
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
                <button onClick={()=> setCount(count + 1)}>increment</button>
            </div>
        );
}