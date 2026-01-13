import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Signup() {



let [data , setData] = useState()
console.log(data);

function getAllData(e){
 setData({
  ...data,
  [e.target.name] : e.target.value
 })
}

  return (
    <>
      <div className="signupformhead">
        <div className="signupform">
          <h1>SignUp</h1>
          <form action="">
            <div className="email">
              <label htmlFor=""></label>
              <input type="email" name="email" id="email" placeholder='Email' onChange={getAllData} required/>
            </div>
            <div className="createpassword">
              <label htmlFor=""></label>
              <input type="password" name="createpassword" id="createpassword" placeholder='Create Password' onChange={getAllData} required/>
            </div>
            <div className="confirmpassword">
              <label htmlFor=""></label>
              <input type="password" name="confirmpassword" id="confirmpassword" placeholder='Confirm Password' onChange={getAllData} required/>
            </div>
          </form>
          <div className="signupbutton">
            <button type='login'><Link>signup</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup