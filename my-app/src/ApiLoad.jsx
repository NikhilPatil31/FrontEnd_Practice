import React, {useState, useEffect} from 'react'

const ApiLoad = () => {

    const [data, setData] = useState([])

    const url = "https://api.spacexdata.com/v4/rockets"
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(loadedData => setData(loadedData))
            .catch(error => console.error('Error fetching data:',error))
    },[])

    // console.log(data)

    return(

        <>
        <h1>Api Loading Page.</h1>
        <h3>Fetch data from an api in react</h3>
        <div className="container">
            {data.map((item) => (
                <div className="item">
                    {/* {console.log(item)} */}
                    <ol key={item.id}>
                        <div>
                            <strong>
                                {"DATA: "}
                            </strong>
                        </div>
                        <div>
                            Name: {item.name},
                            Type: {item.type},
                            active: {item.active}, 
                            boosters: {item.boosters}, 
                            company: {item.company}, 
                            cost_per_launch: {item.cost_per_launch}, 
                            country: {item.country}, 
                            description: {item.description},
                            diameter: {item.diameter},
                        </div>
                        <div>
                            
                        </div>

                    </ol>
                </div>
            ))}
        </div>
        </>
    )
}

export default ApiLoad