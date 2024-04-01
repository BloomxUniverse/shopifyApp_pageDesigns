import React, { useEffect, useState } from 'react'
import Products from './Products'
import { useSelector } from 'react-redux';
import { getMoonSignSvg } from '../commonFun';

export default function ResultTheme2() {
    const themeSetting = useSelector((state) => state.theme && state.theme.data && state.theme.data.design);
    const resultDetailData = useSelector((state) => state.resultDetail && state.resultDetail.data);
    const resultDetail = resultDetailData.data;

    const [moonSignImg, setMoonSignSvg] = useState('');

    
  useEffect(() =>{
    let moonSignName = resultDetail && resultDetail.rashi && resultDetail.rashi.rashi;
    let signColor = themeSetting && themeSetting.form.color;
    let moonSign = getMoonSignSvg(moonSignName,signColor)
    setMoonSignSvg(moonSign)
  },[resultDetail,themeSetting])
  return (
    <>
        <div className='w-full bg-[#F2EEEA] md:bg-[#fff]' id='resultView'>
            <div className=''>
                <div className='bg-[#F2EEEA] w-[90%] sm:w-[80%] mx-auto py-[80px] sm:px-[80px] rounded-ss-[40px] rounded-tr-[40px]'>
                    <div className='flex flex-col pb-[30px]' >
                    {
                        themeSetting && themeSetting.resultbox.rashidetails &&
                        <div className='flex'>
                            <div className='flex flex-col items-center'>
                                <svg className='w-[100px] sm:w-[150px]'>
                                    {moonSignImg}
                                </svg>
                                <div style={{color: themeSetting && themeSetting.form.color}} className='text-[#151e44] mt-[10px] font-libre-baskerville font-[700]'>{resultDetail && resultDetail.rashi.rashi}</div>
                            </div>
                            <div style={{color: themeSetting && themeSetting.form.color}} className='ms-[15px] text-[20px] mt-[10px] sm:mt-[15px] sm:text-[30px] text-[#004563] '>
                                <div className='font-[700] font-libre-baskerville'>Hello, {resultDetail && resultDetail.name}!</div>
                                <div className='leading-none font-libre-baskerville font-[400]'> Your Moon Sign is <b>{resultDetail && resultDetail.rashi.rashi}</b></div>
                            </div>
                        </div>
                    }
                    </div>
                    
                    {
                        themeSetting && themeSetting.resultbox.userinput &&
                        <div  className='lg:flex justify-between gap-[20px]'>
                        <div style={{boxShadow: '0px 6px 27px -13px black', color: themeSetting && themeSetting.form.color}} className='w-full bg-white text-[14px] md:text-[17px] font-inter border overflow-hidden text-[#004563] rounded-[22px]'>
                                <div className='flex p-[15px] border-b px-[20px] sm:px-[40px]'>
                                    <div><span className='font-[500] font-inter'>Email - </span> {resultDetail && resultDetail.email} </div>
                                </div>
                                <div className='flex p-[15px] border-b px-[20px] sm:px-[40px]'>
                                    <div><span className='font-[500] font-inter'>Phone - </span> {resultDetail && resultDetail.mobile} </div>
                                </div>
                                <div className='flex p-[15px] px-[20px] sm:px-[40px]'>
                                    <div><span className='font-[500] font-inter'>Gender - </span>{resultDetail && resultDetail.gender} </div>
                                </div>
                            </div>

                            <div style={{boxShadow: '0px 6px 27px -13px black', color: themeSetting && themeSetting.form.color}} className='w-full bg-white text-[14px] md:text-[17px] font-inter overflow-hidden border text-[#004563] rounded-[22px] mt-[30px] lg:mt-0'>
                                <div className='flex p-[15px] border-b px-[20px] sm:px-[40px]'>
                                    <div><span className='font-[500] font-inter'>Date of Birth - </span>{resultDetail && resultDetail.birth_date}</div>
                                </div>
                                <div className='flex p-[15px] border-b px-[20px] sm:px-[40px]'>
                                    <div><span className='font-[500] font-inter'>Body Weight - </span>{resultDetail && resultDetail.body_weight}</div>
                                </div>
                                <div className='flex p-[15px] px-[20px] sm:px-[40px]'>
                                    <div className='leading-none'><span className='font-[500] font-inter'>Birth Place - </span>{resultDetail && resultDetail.birth_place}</div>
                                </div>
                            </div>
                        </div>
                    }

                    {
                        <div style={{boxShadow: '0px 6px 27px -13px black', color: themeSetting && themeSetting.form.color}} className=' lg:w-[60%] bg-white border text-[14px] md:text-[17px] overflow-hidden text-[#004563] rounded-[22px] mt-[30px]'>
                        {
                            (themeSetting && themeSetting.resultbox.gems) && 
                            <div className='flex border-b px-[4px] sm:px-[25px]'>
                                <div className='p-[15px] border-r w-[30%] overflow-hidden font-[700] font-inter'>Gems</div>
                                <div className='p-[15px] leading-none w-[70%] font-inter font-[400]'><span className=''> {resultDetail && resultDetail.gems[0].name} </span>, is best for you</div>
                            </div>
                        }
                        {
                            (themeSetting && themeSetting.resultbox.bracelet) && 
                            <div className='flex border-b px-[4px] sm:px-[25px]'>
                                <div className='p-[15px] border-r w-[30%] overflow-hidden font-[700] font-inter'>Bracelet</div>
                                <div className='p-[15px] leading-none w-[70%] font-inter font-[400]'>{resultDetail && resultDetail.bracelet[0].name}, {resultDetail && resultDetail.bracelet[1].name} is best for you</div>
                            </div>
                        }
                        {
                            (themeSetting && themeSetting.resultbox.rudraksh) && 
                            <div className='flex px-[4px] sm:px-[25px]'>
                                <div className='p-[15px] border-r w-[30%] overflow-hidden font-[700] font-inter'>Rudraksha</div>
                                <div className='p-[15px] leading-none w-[70%] font-inter font-[400]'>{resultDetail && resultDetail.rudraksh[0].name}, is best for you</div>
                            </div>
                        }
                        </div>
                    }
            {
                themeSetting && themeSetting.resultbox.product &&
                <Products/>
            }
                </div>
            </div>

        </div>
    </>
  )
}
