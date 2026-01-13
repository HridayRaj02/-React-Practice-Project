import React, { useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { Link } from 'react-router-dom';


function Inbuildapi(props) {
    console.log(props);

    let [allData, setAllData] = useState(props.data);
    console.log(allData);

    return (
        <>
            {allData && allData.map((item) => {
                return (
                    <>
                            <div className="buildproducts" >
                                <div className="buildproductimage">
                                    <div className="buildbrand">apple</div>
                                    <p><img src={item.image} alt="" width="100%" /></p>
                                </div>
                                <hr />
                                <p className='buildtitle'>{item.title}</p>
                                <div className="buildproductdetails">
                                    <div className="buildprice">
                                        <p>Price - {item.price} $</p>
                                    </div>
                                </div>
                                <div className="addtocart">
                                <p><IoIosAdd className='addtocarticon' /><Link to="/addtocart">Add To Cart</Link></p>
                                </div>
                            </div >
                    </>
                );
            })}
        </>
    )
}

export default Inbuildapi