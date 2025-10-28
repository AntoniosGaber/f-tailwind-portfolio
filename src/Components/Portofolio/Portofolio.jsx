import React, { useState } from "react";
import me from '../../assets/me.jpg'; 
import hotel from '../../assets/hotel.jpg' ; 
import sea from '../../assets/sea.jpg';              // 👈 لازم تضيف ده
import hotel2 from '../../assets/hotel-1.jpg' ; 
import seacow from '../../assets/seacow.jpg'; 
import seacow2 from '../../assets/seacow-2.jpg'; 

export default function Portofolio() { 
  const[imgs, setImgs]= useState([
    me , hotel2 , sea , hotel , seacow , seacow2
  ]) 
const[layer, setLayer] = useState("hidden")
const [courentImge , setCourentImge] = useState()
  return (
  <section className="py-24">
  <div className="container mx-auto text-center py-5">
    <h1 className="text-4xl font-bold">PORTFOLIO COMPONENT</h1>
    <div className="div py-1 star2 relative">
         <i className="fa-solid fa-star "></i>
        </div>

    <div className="my-20 grid grid-cols-12 gap-6">
      {imgs.map((item, index) => { return <div
          className="col-span-12 sm:col-span-6 lg:col-span-4 p-4"
          key={index} onClick={()=>{setLayer("block") , setCourentImge(item)}}
        >
          <div className="box-img relative group cursor-pointer">
            <img
              src={item}
              alt=""
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
            <div className="layer-img flex justify-center items-center absolute inset-0 bg-amber-200 opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-lg">
              <i className="fa-solid fa-plus text-black text-6xl"></i>
            </div>
          </div>
        </div> 
        

      } 

        
      )}
    </div>
  </div> 
  
<div 
  onClick={(e) => {e.target.tagName!= "IMG" ? setLayer("hidden"):""}} 
  className={`fixed ${layer} z-[60] inset-0 bg-black bg-opacity-30 flex justify-center items-center`}
> 
  <img src={courentImge} className="w-1/3 rounded-lg object-cover" alt="" />
</div>


</section>




  );
}


