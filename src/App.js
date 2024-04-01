import './App.css';
import Form from './components/form/Form';
import SideBanner from './components/form/SideBanner';
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
         {themeSetting.header.enable && <Header/>}
          {(themeSetting.title.enable === true) &&  <MainTitle/>}
          <div className='relative'>
            <div className={`grid gap-[15px] sm:w-[90%] md:w-[80%] w-[95%] mx-auto ${(themeSetting.tableimage.enable) ? 'md:grid-cols-3': 'md:grid-cols-1'} ${(themeSetting.tableimage.enable && themeSetting.theme === 3) ? 'my-0 mt-[30px]': 'my-[30px]'}`}>
              <Form/>
              {themeSetting.tableimage && themeSetting.tableimage.enable === true &&  <SideBanner/>}
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
