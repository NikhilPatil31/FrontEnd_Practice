import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Display({logout}){
    const [formData,setFormData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data')) || [];
        console.log(data);
        setFormData(data);
    },[])

    if (!formData) {
        return <h1>No Data Available</h1>;
      }

    const handleLogout = ()=> {
        logout();
        navigate('/login');
    }

    return(
        <div>
            <h2>Hello welcome to Dashboard</h2>
            <h3>This page is protected</h3><br />

            <h1>Submitted Data</h1>
        
            {formData.length > 0 ? (
            <table border="1">
                <thead>
                <tr>
                    {Object.keys(formData[0]).map((key) => (
                    <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                    ))}
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                
                    {formData.map((item, index) => (
                    <tr key={index}>
                        {Object.values(item).map((value, i) =>
                            <td key={i}>{value}</td>
                        )}
                        <td><a href='/display'>Delete</a></td>
                        {/* <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.email}</td>
                        <td>{item.employeeID}</td>
                        <td>{item.number}</td>
                        <td>{item.dob}</td>
                        <td>{item.startdate}</td>
                        <td>{item.lastdate}</td>
                        <td>{item.status}</td>
                        <td>{item.workdays}</td>
                        <td>{item.address}</td>
                        <td>{item.pincode}</td> */}
                    </tr>
                    ))}
                </tbody> 
                </table>  
                 ) : (
                    <p>No data found.</p>
                )}
                <div>
                {/* <button onClick={handleRegister}>Go to the form</button> */}
                <button onClick={handleLogout}>Log Out</button>
                </div>
        </div>
    );
};

export default Display;