import './App.css';
import Form from './components/form/Form';
import MainTitle from './components/MainTitle';
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
         {themeSetting.header &&  themeSetting.header.enable && <Header/>}
          {themeSetting.title && themeSetting.title.enable === true &&  <MainTitle/>}
          <div className='relative'>
          <div className='absolute bg-[#d3c3b6] top-0 left-0 h-full w-full opacity-[.6]'></div>
            <div className={`grid gap-[15px] sm:w-[90%] md:w-[80%] w-[95%] mx-auto md:grid-cols-1 my-[30px]`}>
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
