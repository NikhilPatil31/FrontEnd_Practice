import React from "react"
import {useDispatch, useSelector} from "react-redux"
import {increment, decrement} from "../features/counterSlice"

const Counter = () => {

    const dispatch = useDispatch()
    const count = useSelector(state => state.Counter.value);

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={
                () => dispatch(increment())}>
                Increment
            </button>
            <button onClick={
                () => dispatch(decrement())}>
                Decrement
            </button>
        </div>
    )
}

export default Counter;