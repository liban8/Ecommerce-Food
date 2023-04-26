import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { add } from '../Redux/cartSlice'
import { Link } from 'react-router-dom'
function Foodshoping({items}) {
    const {id, name, price, img} =items
    const dispatch = useDispatch();
  return (
    <div className='relative shadow-2xl'>

          <Link to={`/ProductDetail/${id}`}>
        <div className=''>
        <img src={img} alt="" className='w-[300px]  h-[400px] rounded-lg object-cover' />
        </div>
          </Link>
        <div className="p-3 flex justify-between ">
            <h2 className='text-2xl font-bold'>{name} </h2>
            <span className='text-orange-800 text-2xl'>${price}</span>
    <button><BsFillCartFill className='text-orange-500 text-2xl' onClick={()=>dispatch(add(items))} /> </button>
        </div>
       
    </div>
  )
}

export default Foodshoping