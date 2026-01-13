import React, { useState } from 'react'
import letterimg from "../image/contactletterimg.jpeg"

function Contact() {

let [contactData , setContactData] = useState();
console.log(contactData)

function getAllData(e){
    setContactData({
        ...contactData,
        [e.target.name]: e.target.value 
    })
}

    return (
        <>
            <div className="contactformmain">
                <div className="contactform">
                    <div className="contactformimghead">
                        <div className="contactformimg">
                            <img src={letterimg} alt="" width={"100%"} />
                        </div>
                    </div>
                    <div className="contactformdetails">
                        <h1 className='getintouch'>Get In Touch</h1>
                        <form action="">
                            <div className="contactformdet">
                                <label htmlFor="">First Name :</label>
                                <br />
                                <input type="text" name='firstname' id='firstname' placeholder='First Name' onChange={getAllData} required />
                            </div>
                            <div className="contactformdet">
                                <label htmlFor="">Middle Name :</label>
                                <br />
                                <input type="text" name='middlename' id="middlename" placeholder='Middle Name' onChange={getAllData} required />
                            </div>
                            <div className="contactformdet">
                                <label htmlFor="">Last Name :</label>
                                <br />
                                <input type="text" name='lastname' id="lastname" placeholder='Last Name' onChange={getAllData} required />
                            </div>
                            <div className="contactformdet">
                                <label htmlFor="">Email :</label>
                                <br />
                                <input type="email" name="emailform" id="emailform" placeholder='Enter Your Email' onChange={getAllData} required />
                            </div>
                            <div className="contactformdet">
                                <label htmlFor="">Phone Number :</label>
                                <br />
                                <input type="password" name='phonenumber' id="phonenumber" placeholder='Enter Your Phone Number' onChange={getAllData} required minLength={10} maxLength={10} />
                            </div>
                            <div className="contactformdet">
                                <label htmlFor="">Inquiry About :</label>
                                <br />
                                <input type="text" name='inquiryabout' id="inquiryabout" placeholder='Enter Your Inquiry' onChange={getAllData} required />
                            </div>
                        </form>
                        <button type='submit' className='contactsubmitbutton'>Submit </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact