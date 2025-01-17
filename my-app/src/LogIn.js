import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const LogIn = ({login}) =>{
    const [userData, setUserData] = useState([]);
    const [email, setEmail] = useState([]);
    const [pass, setPass] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('data')) || [];
        setUserData(data);
    },[]);


    const handleLogin = (e) =>{
        e.preventDefault();
        // console.log(typeof userData);
        const userExist = userData.some(
            (user) => user.email === email && user.password === pass
        );


        if(userExist){
            login(email,pass);
            navigate('/display');
        } else{
            alert("Please Check EMail Password or Register First");
        }
    }

    return(
        <div className="login">
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
            <div>
                <label>Enter Email: </label>
                <input
                    type="text"
                    placeholder="User Email"
                    onChange={(e)=>
                        setEmail(e.target.value)
                    }
                    required
                />
            </div>
            <div>
                <label>Enter Password: </label>
                <input
                    type="text"
                    placeholder="Password"
                    onChange={(e)=>
                        setPass(e.target.value)
                    }
                    required
                />
            </div>
            
            <button type="submit">Login</button>
            <button onClick={() => navigate('/')}>Register</button>
            </form>
        </div>
    );
}

export default LogIn;