import React, { useEffect } from 'react'
import { decrease, increase, remove } from '../Redux/cartSlice'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
function CartCheckOut({cartitem}) {
    const {id, name, img, price,amount, total} = cartitem
    const dispatch = useDispatch();
  
  return (
    <div className='flex items-center justify-between px-8 py-3 bg-slate-50 '>
        <img src={img} className='w-[80px] h-[80px] object-cover rounded-full border'  alt="" />
      <div className=''>
      <h2 className='text-2xl font-semibold'>{name}</h2>
      <span className='items-center'>{price}</span>

      </div>
      <div className='flex text-xl gap-4 items-center mt-2 '>
        <button onClick={()=>dispatch(decrease(cartitem))} className='w-8 h-8 text-white bg-black rounded-full '>-</button>
        <button>{amount}</button>
        <button  onClick={()=>dispatch(increase(cartitem))} className='h-8 w-8 text-white bg-black rounded-full text-center '>+</button>
      </div>
      <div className='items-center'>
        <div className='font-semibold'>
        Total:
        </div>
        <div>
            $
        {(amount * price).toFixed(2)}
        </div>
      </div>
      <div>
        <AiOutlineClose size={30} onClick={()=>dispatch(remove(cartitem))} />
      </div>
      
    </div>
  )
}

export default CartCheckOut