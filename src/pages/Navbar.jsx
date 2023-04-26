import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const  {amount} = useSelector((state)=>state.cart)
  return (
    <div className=" mx-auto shadow-lg">
      <ul className="flex w-full items-center justify-between p-4 text-3xl">
        <Link to="/" >Home</Link>
        <Link to='/cart' className="flex">
          <div  className="flex items-center p2 bg-orange-500 px-2 relative py-1 rounded-md">
            <BsFillCartFill /> <div className=" text-2xl text-white " >{amount}</div>
          </div>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
