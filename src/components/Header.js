import React from 'react'
import { useSelector } from 'react-redux';

export default function Header() {
      const themeSetting = useSelector((state) => state.theme.data.design);

  return (
    <div className=' my-[30px] mx-auto'>
        <img className='object-cover w-full' src={themeSetting.header.img} alt='top banner'/>
    </div>
  )
}
