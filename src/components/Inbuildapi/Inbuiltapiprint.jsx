import React from 'react'
import Inbuildapi from './Inbuildapi'
import { Iphone, Macbook, Applewatch } from '../../Data'

function Inbuiltapiprint() {
  return (
    <>
    <div className="iphone" style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-evenly"}}>
        <Inbuildapi data={Iphone} />
      </div>
      <div className="macbook" style={{ display: "flex", flexWrap: "wrap" , justifyContent:"space-evenly"}}>
        <Inbuildapi data={Macbook} />
      </div>
        <div className="applewatch" style={{ display: "flex", flexWrap: "wrap" , justifyContent:"space-evenly"}}>
        <Inbuildapi data={Applewatch} />
      </div>
    </>
  )
}

export default Inbuiltapiprint