import React, { useState } from 'react'
import { Link } from "react-router-dom";


function Login() {

    let [dataLog, setDataLog] = useState()
    console.log(dataLog)

    function getAllData(e) {
        setDataLog({
            ...dataLog,
            [e.target.value]: e.target.value
        })



    }



    return (
        <>
            <div className="loginformhead">
                <div className="loginform">
                    <h1>Login</h1>
                    <form action="">
                        <div className="email">
                            <label htmlFor=""></label>
                            <input type="email" name="email" id="email" placeholder='Email' onChange={getAllData} required />
                        </div>
                        <div className="password">
                            <label htmlFor=""></label>
                            <input type="password" name="password" id="password" placeholder='Password' onChange={getAllData} required />
                        </div>
                    </form>
                    <div className="loginbutton">
                        <button type='submit'><Link>Login</Link></button>
                    </div>
                    <div className="signupbutton">
                        <button type='submit'><Link to={'/signup'}>signup</Link></button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login