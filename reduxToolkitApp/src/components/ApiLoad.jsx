import React, {useState, useEffect} from 'react'
import axios from "axios";

const ApiLoad = () => {

    const [data, setData] = useState([])
    
    // useEffect(() => {
    //     fetch("https://api.spacexdata.com/v3/launches")
    //         .then(response => response.json())
    //         .then(loadData => setData(loadData))
    //         .catch(error => console.error('Error fetching data:',error))
    // },[])

    useEffect(() => {
        axios.get("https://api.spacexdata.com/v3/launches")
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error))
    })

    return(

        <>
        <h1>Api Loading Page.</h1>
        <div>
           { data.map((record,id) => (
                <div key={id}>
                    {console.log(record)}
                    {JSON.stringify(record)}
                </div>
            ))}
        </div>
        </>
    )
}

export default ApiLoad