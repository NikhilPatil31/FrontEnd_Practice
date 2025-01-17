import React, {useState} from "react";
import Child from "./Child";

function Parent(){

    const [counter, setCounter] = useState(0);

    return(
        <>
            <h1>Count : {counter}</h1>
            <Child count={counter} handler={setCounter}/>
        </>
    );
}

export default Parent;