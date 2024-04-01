import React from 'react'
import { useSelector } from 'react-redux';

export default function MainTitle() {
      const themeSetting = useSelector((state) => state.theme.data.design);

  return (
    <div className='sm:w-[90%] md:w-[80%] my-[30px] w-[95%] mx-auto'>
        <h4 style={{color: themeSetting && themeSetting.title.color}} className='font-inria-serif text-center py-[40px] text-[20px] sm:text-[40px] font-[600] leading-none'>{themeSetting && themeSetting.title.text}</h4>
    </div>
  )
}
