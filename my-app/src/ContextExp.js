import React, {useState, createContext} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";


export const CountContext = createContext();

function ContextExp() {
    const [count, setCount] = useState(0);
    
    return(
        <div>
        <CountContext.Provider value={{count, setCount}}>
         <h1>Parent Component</h1>
         <h2>Count : {count}</h2>
         <Child1 />
         <Child2 />
         <Child3 />
         <Child4 />
        </CountContext.Provider>
        </div>
    );
}

export default ContextExp;