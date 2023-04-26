import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../components/data";
function ProductDetail() {
  const { id } = useParams();
  const item = data.find((item) => item.id === parseInt(id));
  const { name, img, price, describe } = item;
  return (
    <div className=" flex items-center  justify-center p-4">
      <div className="">
        <img src={img} className="w-[300px] h-[400px] object-cover" alt="" />
      </div>
      <div className="w-[500px] px-3">
        <h2 className="text-4xl font-bold">{name}</h2>
        <p>{describe}</p>
        <span className="text-2xl ">${price}</span>
        <div>
        <button className="bg-black text-white px-2 text-2xl py-1 rounded-sm">Add To Cart</button>
        </div>
      </div>

    </div>
  );
}

export default ProductDetail;
