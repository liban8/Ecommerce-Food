import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCheckOut from './CartCheckOut';
// import { total } from '../Redux/cartSlice';
import { BsTrashFill } from 'react-icons/bs'
import { clear } from '../Redux/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const {cartItems, total}  = useSelector((state) => state.cart)
  // const {total}  = useSelector((state) => state.cart)

  return (
    <div className=' items-center justify-center my-5' >
     <div className='mx-11 my-5 shadow-2xl'>
     <h2 className='text-3xl text-center font-bold font-serif bg-slate-50 '>Cart Item</h2>
      {cartItems.length ===  0 ? (
        <div className='uppercase text-2xl font-bold'>
          Your cart is empty
        </div>
      ): (
      <div className=''>
      {cartItems.map(cartitem=>(
        <CartCheckOut key={cartitem.id} cartitem = {cartitem} />
        
      ))}
      <div className='flex justify-center space-x-44 py-10'>
      <div className='font-bold capitalize text-2xl'>
        total cost : $ {total.toFixed(2)}
      </div>
      <div>
        <BsTrashFill size={30} onClick={()=>dispatch(clear())} />
      </div>
      </div>
      <button  className='bg-black text-2xl capitalize font-serif mx-25px text-white w-full h-[50px]'>check Out</button>
      </div>
      
      )}
      
     </div>
  
    </div>
  )
}

export default Cart