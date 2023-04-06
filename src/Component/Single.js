import React from 'react'
import { useParams } from 'react-router-dom'
import Data from './data.json'

function Single() {
  let {id}=useParams()
  let qq = Data.find((a)=>a.id==id)
   
  return (
    <div className='container'>
       <div className='d-flex py-5 align-items-center'>
       <div className='pe-5 details-box border'> <img src={qq.images} className='details-img ps-5'/></div>
       <div className='ps-5'>
        <h3 className='pb-3'>{qq.title}</h3>
        <h6 className='pb-3'>Rating:{qq.rating}</h6>
       
       <h4 className='pb-3 brand'>${qq.price}</h4>
       <p className='pb-4 email'>{qq.description}</p>
       <button className='addtocart'>Add To Cart</button>
       </div>
       </div>
       
    </div>
  )
}

export default Single
