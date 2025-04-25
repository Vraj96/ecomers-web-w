import React from 'react'

export default function Catagory({finalCategory,setCatname}) {

  let cat=finalCategory.map((v,i)=>{
    return(
      <li onClick={()=>setCatname(v)} key={i} className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'>
         {/* If v is an object, access its 'name' property */}
         {typeof v === 'object' ? v.name : v} 
      </li>
    )
  })


  return (
    <div>
        <h3 className='text-[25px] font-[500] p-[10px]'>Product Catagory</h3>

        <ul>
            {cat}
        </ul>
    </div>
  )
}
