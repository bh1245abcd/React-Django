import React from 'react'
import menone from '../../assets/menone.jpg'
import womenone from '../../assets/womenone.jpg'
import kidone from '../../assets/kidone.jpg'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <>
    <div className="flex justify-between items-center"
       style={{marginLeft:"90px",marginRight:"90px",marginTop:"32px",marginBottom:"10px"}}>
      <p className="font-semibold text-[32px]">Our product categories</p>
      <Link to="/product"><p className="text-blue-600 cursor-pointer hover:underline">View All Products</p></Link>
    </div>

    <div className='flex justify-center gap-4'>
      <Link to="/men"><div className="b1">
        <img src={menone} alt="" style={{width:"420px",height:"420px"}}/>
        <p className='text-center'>Shop for men</p>
      </div></Link>
      <Link to="/women"><div className="b1">
        <img src={womenone} alt="" style={{width:"420px",height:"420px"}}/>
        <p className='text-center'>Shop for women</p>
      </div></Link>
      <Link to="/women"><div className="b1">
        <img src={kidone} alt="" style={{width:"420px",height:"420px"}}/>
        <p className='text-center'>Shop for kid</p>
      </div></Link>
    </div>
    </>
  )
}

export default Card

 