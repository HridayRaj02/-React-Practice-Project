import React, { useEffect, useState } from 'react'
import { IoIosAdd } from "react-icons/io";
import { Link } from 'react-router-dom';


function Api() {

  let [apiData, setApiData] = useState([])
  let [FilterDaa, setFilterDaa] = useState([])
  console.log(FilterDaa)

  async function getData() {
    let dataa = await fetch("https://dummyjson.com/products")
    let jasondata = await dataa.json()
    setApiData(jasondata.products)
    setFilterDaa(jasondata.products)
  }
  function FilterDataApi(category) {
    let filterData = apiData.filter((item) => item.category === category)
    setFilterDaa(filterData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="apidiff">
        <hr />
        <div className="productsheader" >
          <div className="latestproducts" >
            <p>Latest Products</p>
          </div>
          <div className="categorybuttons">
            <ul>
              <li style={{ color: " #ef1696" }} onClick={getData}><button>All</button></li>
              <li><button onClick={() => FilterDataApi("beauty")}>Beauty</button></li>
              <li><button onClick={() => FilterDataApi("fragrances")}>Fragrances</button></li>
              <li><button onClick={() => FilterDataApi("furniture")}>Furniture</button></li>
              <li><button onClick={() => FilterDataApi("groceries")}>Groceries</button></li>
            </ul>
          </div>
        </div>
        <div className="main" >
          {FilterDaa.map((item) => {
            return (
              <>
                <div className="products" >
                  <div className="productimage">
                    <div className="brand">{item.brand}</div>
                    <p><Link to={`/productdet?id=${item.id}`}><img src={item.images} alt="" width="100%" /></Link></p>
                  </div>
                  <hr />
                  <p className='title'><Link to={`/productdet?id=${item.id}`}>{item.title}</Link></p>
                  <div className="productdetails">
                    <div className="price">
                      <p>Price - {item.price} $</p>
                    </div>
                    <div className="rating">
                      <p>Rating - {item.rating}</p>
                    </div>
                  </div>
                  <div className="addtocart">
                    <p><IoIosAdd className='addtocarticon' /><Link to="/addtocart">Add To Cart</Link></p>
                  </div>
                </div >


              </>
            )
          })}

        </div >
      </div>
    </>
  )
}

export default Api