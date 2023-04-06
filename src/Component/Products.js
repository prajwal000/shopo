import React from 'react'
import { Link } from 'react-router-dom'
import Data from'./data.json'

function Products() {
  return (
    <>
      <div className='container'>
      <div className='row py-5'>



{
    Data.slice(0, 20).map(a => {
        return (
            
            <div className='col-lg-3 col-sm-6 mt-3 ' >
                
                <div className=' bg-white product-content py-4 border'>
                <Link to={`/single/${a.id}`}>
                  <div className='img-box px-3'>   <img src={a.images}  className='border product-img'/></div>
                    <div className='pt-5 '>
                        <i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i><i class="bi bi-star-fill brand"></i></div>
                   <div className='product-title'> <p className='product-cont pt-1'>{a.title} </p></div>
                    <p className='price pb-1'>$18</p>
                    </Link>
                    <button className=' addtocart'> Add To Cart</button>
                </div>
                
            </div>
           
        )
    })



}

</div>
      </div>
    </>
  )
}

export default Products
