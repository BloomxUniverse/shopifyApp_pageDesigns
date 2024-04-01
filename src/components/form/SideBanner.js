import React from 'react'
import { useSelector } from 'react-redux';

export default function SideBanner() {
  const themeSetting = useSelector((state) =>  state.theme && state.theme.data && state.theme.data.design);

  return (
    <div className="col-span-3  lg:col-span-1 rounded-[10px] overflow-hidden h-[92%] w-full">
        <img className='object-contain w-full h-full rounded-[10px]' src={themeSetting.tableimage && themeSetting.tableimage.img} alt='sidebanner'/>
    </div>
  )
}
