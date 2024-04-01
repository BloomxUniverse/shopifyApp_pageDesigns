import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getProductSuggestions } from '../commonFun';

export default function Products() {
  const themeSetting = useSelector((state) => state.theme.data.design);
  const resultDetailData = useSelector((state) => state.resultDetail && state.resultDetail.data);
  const rudrakshList = useSelector((state) => state.theme && state.theme.data && state.theme.data.design.rudraksh);
  const gemsList = useSelector((state) => state.theme && state.theme.data && state.theme.data.design.gems);
  const braceletList = useSelector((state) => state.theme && state.theme.data && state.theme.data.design.bracelet);

  const [products,setProducts] = useState("");
  
  useEffect(() =>{
    const rudrakshName = resultDetailData && resultDetailData.data && resultDetailData.data.rudraksh[0].name;
    const gemsName = resultDetailData && resultDetailData.data && resultDetailData.data.gems[0].name;
    const braceletName = resultDetailData && resultDetailData.data && resultDetailData.data.bracelet;

    let braceletNameArr = [];
    braceletName && braceletName.forEach((value) =>{
      braceletNameArr.push(value.name)
    })
    const productList = {rudrakshList,braceletList,gemsList}
    let result = getProductSuggestions(gemsName,rudrakshName,braceletNameArr,productList)
    setProducts(result)
  },[resultDetailData,braceletList, gemsList, rudrakshList])
  
  return (
    <>
<div className="  flex justify-center items-center mx-auto rounded-bl-[40px] rounded-br-[40px] mt-[40px]">
  <div className="md:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px] px-[20px] sm:p-0">

    {
      themeSetting && themeSetting.resultbox.rudraksh && products && products.rudrakshProduct && products.rudrakshProduct.map((value,index) =>{
        return (
          <div key={index} className="max-w-[384px] bg-white pb-[8px] rounded-[6px] ">
            <div className="relative">
              <img className="w-full rounded-[10px]" src={value.img} alt="Colors" />
              </div>
            <h1 style={{color: themeSetting.form.color}} className="mt-[16px] text-gray-800 text-[16px] font-[500] cursor-pointer text-center">{value.name}</h1>
            <div className="my-[12px] text-center">
              <a target='_blank' rel="noreferrer" href={value.link} style={{backgroundColor: themeSetting.form.color}} className="text-[16px] pt-[8px] px-[16px] pb-[10px] text-white bg-indigo-600 rounded-[4px]">Buy Now</a>
            </div>
          </div>          
        )
      })
    }

  {
      themeSetting && themeSetting.resultbox.gems && products && products.gemsProduct && products.gemsProduct.map((value,index) =>{
        return (
          <div key={index} className="max-w-[384px] bg-white pb-[8px] rounded-[6px] ">
            <div className="relative">
              <img className="w-full rounded-[10px]" src={value.img} alt="Colors" />
              </div>
            <h1 style={{color: themeSetting.form.color}} className="mt-[16px] text-gray-800 text-[16px] font-[500] cursor-pointer text-center">{value.name}</h1>
            <div className="my-[12px] text-center">
              <a target='_blank' rel="noreferrer" href={value.link} style={{backgroundColor: themeSetting.form.color}} className="text-[16px] pt-[8px] px-[16px] pb-[10px] text-white bg-indigo-600 rounded-[4px]">Buy Now</a>
            </div>
          </div>          
        )
      })
    }


{
  themeSetting && themeSetting.resultbox.bracelet && products && products.braceletProduct && products.braceletProduct.map((productGroup, groupIndex) => {
    return(
    <div key={`group-${groupIndex}`}>
      {productGroup.map((value, index) => {
        return(
        <div key={`product-${groupIndex}-${index}`} className="max-w-[384px] bg-white pb-[8px] rounded-[6px] ">
          <div className="relative">
            <img className="w-full rounded-[10px]" src={value.img} alt={value.name} />
          </div>
          <h1 style={{color: themeSetting.form.color}} className="mt-[16px] text-gray-800 text-[16px] font-[500] cursor-pointer text-center">{value.name}</h1>
          <div className="my-[12px] text-center">
          <a target='_blank' rel="noreferrer" href={value.link} style={{backgroundColor: themeSetting.form.color}} className="text-[16px] pt-[8px] px-[16px] pb-[10px] text-white bg-indigo-600 rounded-[4px]">Buy Now</a>
          </div>
        </div>
      )})
      }
    </div>
  )})
}

    
  </div>
</div>  
    </>
  )
}
