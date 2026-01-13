import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Navbar from '../utility/Navbar';


function Productdet() {

    let [id] = useSearchParams();
    let productID = id.get("id");
    console.log(productID)

    let [apiData, setApiData] = useState([]);
    console.log(apiData)

    async function getData() {
        let dataa = await fetch("https://dummyjson.com/products")
        let jasondata = await dataa.json();
        const newdata = jasondata.products.find((item) => item.id == productID)
        setApiData(newdata)
    }

    useEffect(() => {
        getData();
    }, []);


return (
    <>
    <Navbar/>
        <div className="sampleproductdetails">
            <div className="sampleproductdetailsimg">
                <p><img src={apiData.images} alt="" width="100%" /></p>
            </div>
            <div className="productdetailscontent">
                <h3 className='sampleproduct'>{apiData.title}</h3>
                <p className='sampleprice'>{apiData.price} $</p>
                <p className='sampleinfo'>{apiData.description}</p>
                <button className='samplebutton' type='login'><Link to="/addtocart">Add To Cart</Link></button>
            </div>
        </div>

    </>
)
}

export default Productdet