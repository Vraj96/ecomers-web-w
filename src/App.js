import logo from './logo.svg';
import './App.css';
import Catagory from './Catagory';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  let [finalCategory,setFinalCategory]=useState([])
  let [finalPro,setFinalProduct]=useState([])
  let [catName,setCatname]=useState('')

let getCategory=()=>{
  axios.get('https://dummyjson.com/products/categories')
  .then((res)=>res.data)
  .then((finalRes)=>{
    setFinalCategory(finalRes);
  })
}

let getProducts=()=>{
  axios.get('https://dummyjson.com/products')
  .then((proRes)=>proRes.data)
  .then((finalRes)=>{
    setFinalProduct(finalRes.products);
    
  })

}
useEffect(()=>{
  getCategory();
  getProducts()
  console.log(finalCategory)
},[])


useEffect(()=>{
  console.log("catName",catName);
  
if(catName!==""){
  axios.get(`https://dummyjson.com/products/category/${catName.slug}`)
  .then((proRes)=>proRes.data)
  .then((finalRes)=>{
    setFinalProduct(finalRes.products);
  })
  
}
  
},[catName])


let Pitems=finalPro.map((products,index)=>{
  return(
    <ProductItem key={index} pdata={products}/>
  )
})





  return (
    <div className="App">
      <>
        <div className='py-[40px]'>
          <div className='max-w-[1320px] mx=auto '>
            <h1 className='text-center text-[40px] font-bold mb-[30px] '>Our Products</h1>
            <div className='grid grid-cols-[30%_auto] gap-[20px]'>
              <div>
                <Catagory finalCategory={finalCategory} setCatname={setCatname}/>
              </div>

              <div>
                <div className='grid grid-cols-3 gap-5'>
                
                  {
                    finalPro.length>=1 ?
                  Pitems
                      :
                      'No Product Found'
                }


                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;



function ProductItem({pdata}) {
  return (
    <div className='shadow-lg text-center pb-4'>
      <img src={pdata.thumbnail} className='w-[100%] h-[220px]' />
      <h4>
          {pdata.title}
      </h4>
      <b>
        {pdata.price}
      </b>
    </div>
  )
}