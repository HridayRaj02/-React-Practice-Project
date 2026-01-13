import React from "react";
import Navbar from "../utility/Navbar";
import Data from "../utility/Data";
import img from "../image/Screenshot1234.png"
import Api from "./Api.jsx";
import Slider from "../slider/Slider.jsx";
import Inbuiltapiprint from "../Inbuildapi/Inbuiltapiprint.jsx";


function Hoome() {
    return (
        <>
            <Navbar />
            <Slider/>
            <Api/>
            <Inbuiltapiprint/>
        </>
    
    )
}
export default Hoome;