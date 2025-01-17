
function Child(props){
    const addValue = () =>{
        props.handler(props.count + 1);
    }

    const removeValue = () => {
        if (props.count > 0){
            props.handler(props.count - 1);
        }
    }
    return(
        <>
        <button onClick={addValue}>Add</button>
        <button onClick={removeValue}>Remove</button>
        </>
    );
}

export default Child;