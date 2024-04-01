import './App.css';
import Form from './components/form/Form';
import Header from './components/Header';
import { useEffect } from 'react';
import { fetchThemeSettings } from './features/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import Result from './components/result/Result';


function App() {
  
  const themeSetting = useSelector((state) => state.theme && state.theme.data && state.theme.data.design);
  const resultDetailData = useSelector((state) => state.resultDetail && state.resultDetail.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchThemeSettings (process.env.REACT_APP_THEME_API_URL));
  }, [dispatch]);
  return (
    <>
        <div className=' mx-auto'>
         {themeSetting.header && themeSetting.header.enable && <Header/>}
          <div className='relative'>
          <img src='https://gemescalculatorfrontend.bloomxapi.in/design3/assets/bg3.jpg' className='absolute top-0 left-0 w-full h-full object-cover' alt='background'/>
          {/* <div className='absolute top-0 left-0 bg-[#e1d5bc] w-full h-full'></div> */}
            <div className={`grid gap-[15px] sm:w-[90%] md:w-[80%] w-[95%] mx-auto md:grid-cols-1' my-0 mt-[30px]`}>
              <Form/>
            </div>
          </div>
          {
            resultDetailData &&  resultDetailData.resultview === true ? 
            <Result/>
              :''
          }
        </div>
    </>
  );
}

export default App;
