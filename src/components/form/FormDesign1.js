import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateResult } from "../commonFun";
import instance from "../../axiosConfig";
import {addResultDetail} from "../../features/resultSlice"

export default function FormDesign1() {
  const dispatch = useDispatch();

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [mobile,setMobile] = useState();
  const [gender,setGender] = useState();
  const [purpose,setPurpose] = useState();
  const [bodyWeight,setBodyWeight] = useState();
  const [date,setDate] = useState();
  const [time,setTime] = useState();
  const [place,setPlace] = useState('');

  // const [loading,setLoading] = useState(true);
  // const [records,setRecords] = useState([]);
  const [cityList,setCityList] = useState([]);
  const [finalCityList, setFinalCityList] = useState([]);
  const [placemsg, setPlacemsg] = useState("");


  // const [isOpen, setIsOpen] = useState(false);



  let apiUrl = process.env.REACT_APP_GEMTOOL_API_URL;
  const fetchLocation = async (e) => {
    let str = e.target.value.replace(/[^a-zA-Z\s]/g, "")
    let strArray = str.split(" ");
    setPlace(str);
    let lastIdx = strArray.length - 1;
    setPlacemsg("Enter Village, Block or City Name here");
    
    if(str.length === 0){
      setCityList([])
      setFinalCityList([])
      setPlacemsg("");
      return;
    }
    try {
      if (str.length >= 3 && strArray.length === 1) {
        setPlacemsg("Loading address details...");
        let res = await instance.get(
          `${apiUrl}/search/${strArray[0]}`
        );
        // res = await res.json();
        setCityList(res.data);
        setFinalCityList(res.data);
        setPlacemsg("");
        // Do something with the result 'res'
      }else{
        const filteredAddresses = cityList.filter(address => address.address.toLowerCase().includes(strArray[lastIdx].toLowerCase()));
        setFinalCityList(filteredAddresses);
        setPlacemsg("");
      }
    } catch (error) {
      // Handle errors here
      console.error("Error during fetch:", error);
    }
  };

  const findGems = async(event) =>{
    event.preventDefault();
    // setIsOpen(true)
     let records = {
        id: Date.now(),
        name,
        email,
        mobile,
        gender,
        purpose,
        bodyWeight,
        date,
        time,
        place
      }
      
      let data = await calculateResult(event, records)
      
      dispatch(addResultDetail(data))
      let resultView = document.getElementById('resultView');
      resultView && resultView.scrollIntoView({behavior: 'smooth'});
  }

  const themeSetting = useSelector((state) =>  state.theme && state.theme.data && state.theme.data.design);




  return (
    <>
          <form
            className="rounded-[10px] col-span-3 lg:col-span-2 w-auto bg-white px-[20px]"
            onSubmit={findGems}
          >
            <h1 style={{color: themeSetting.form.color}} className="font-inria-serif font-[700] text-[20px] md:text-[20px] leading-none sm:pb-[20px] font-libra">
                Fill the form to get result:
            </h1>
            <div className={`grid grid-cols-1 gap-x-[25px] mt-[22px] gap-y-[20px] ${themeSetting.tableimage.enable === false ?  'md:grid-cols-3' : 'md:grid-cols-2' }`}>
              <div>
                <label 
                  htmlFor="name"
                  style={{color: themeSetting.form.color,borderColor: themeSetting.form.color}}
                  className={`block text-[13px] tracking-normal sm:text-[16px]  mb-[4px]  font-inter font-[300]`}
                >
                  Enter your name 
                </label>
                <div className="">
                  <input
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-[40px] min-h-[50px] border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] placeholder:text-gray-300 focus:border-gray-400 outline-none shadow-none font-inter font-[300]"
                    onChange={(e) => setName(e.target.value)} 
                    required
                  />
                </div>
              </div>
              <div>
                <label 
                  htmlFor="email"
                  className="block text-[13px] tracking-normal sm:text-[16px] mb-[4px]  font-inter font-[300]"
                  style={{color: themeSetting.form.color}}
                >
                  Enter your email
                </label>
                <div className="">
                  <input
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-[40px] min-h-[50px] border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] placeholder:text-gray-300 focus:border-gray-400 outline-none shadow-none font-inter font-[300]"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="phone"
                  className="block text-[13px] tracking-normal sm:text-[16px] mb-[4px]  font-inter font-[300]"
                  style={{color: themeSetting.form.color}}
                >
                  Enter your phone number
                </label>
                <div className="">
                  <input
                    placeholder="Enter your mobile"
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="given-name"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full rounded-[40px] min-h-[50px] border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] placeholder:text-gray-300 focus:border-gray-400 outline-none shadow-none font-inter font-[300]"
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    
                  />
                </div>
              </div>
              <div>
                <label 
                  htmlFor="gender"
                  className="block text-[13px] tracking-normal sm:text-[16px] mb-[4px]  font-inter font-[300]"
                  style={{color: themeSetting.form.color}}
                >
                  Enter your gender
                </label>
                <div className="select-container">
                  <select
                    id="countries"
                    onChange={(e) => setGender(e.target.value)}
                    required
                    className="block w-full rounded-[40px] min-h-[50px] border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] placeholder:text-gray-300 focus:border-gray-400 outline-none shadow-none font-inter font-[300] bg-white"
                    
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div>
                <label 
                  htmlFor="purpose-option"
                  className="block text-[13px] tracking-normal sm:text-[16px] mb-[4px]  font-inter font-[300]"
                  style={{color: themeSetting.form.color}}
                >
                  Purpose to wear gemstone
                </label>
                <div className="select-container">
                  <select
                    id="countries"
                    className="block w-full rounded-[40px] min-h-[50px] border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] placeholder:text-gray-300 focus:border-gray-400 outline-none shadow-none font-inter font-[300] bg-white"
                    onChange={(e) => setPurpose(e.target.value)}
                    required
                    
                  >
                    <option value="">Purpose</option>
                    <option value="general">General</option>
                    <option value="Relationship">Relationship</option>
                    <option value="Education">Education</option>
                    <option value="Job and Career">Job and Career</option>
                    <option value="Health">Health</option>
                    <option value="Business">Business</option>
                    <option value="All relationship,Education, Job, Career, Health, Business">
                      All relationship,Education, Job, Career, Health, Business
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label 
                  htmlFor="weight"
                  className="block text-[13px] tracking-normal sm:text-[16px] mb-[4px]  font-inter font-[300]"
                  style={{color: themeSetting.form.color}}
                >
                  Body weight (in kg)
                </label>
                <div className="">
                  <input
                    placeholder="Enter your weight"
                    type="number"
                    name="weight"
                    id="weight"
                    autoComplete="family-name"
                    className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none block w-full rounded-[40px] min-h-[50px] border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] placeholder:text-gray-300 focus:border-gray-400 outline-none shadow-none font-inter font-[300]"
                    onChange={(e) => setBodyWeight(e.target.value)}
                    required
                    
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="date-of-birth"
                  className="block text-[13px] tracking-normal sm:text-[16px] mb-[4px]  font-inter font-[300]"
                  style={{color: themeSetting.form.color}}
                >
                  Enter your birth date
                </label>
                <div className="w-full ">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Date"
                    autoComplete="given-name"
                    className="block w-full rounded-[40px] min-h-[50px] border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] placeholder:text-gray-300 focus:border-gray-400 outline-none shadow-none font-inter font-[300] bg-transparent"
                    onChange={(e) => setDate(e.target.value)}
                    required
                    
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="birth-time"
                  className="block text-[13px] tracking-normal sm:text-[16px] mb-[4px]  font-inter font-[300]"
                  style={{color: themeSetting.form.color}}
                >
                  Enter your birth time
                </label>
                <div className="">
                  <input
                    autoComplete="given-name"
                    className="block w-full rounded-[40px] min-h-[50px] border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] placeholder:text-gray-300 focus:border-gray-400 outline-none shadow-none font-inter font-[300] bg-transparent"
                    onChange={(e) => setTime(e.target.value)}
                    required
                    id="appt-time"
                    type="time"
                    name="appt-time"
                    placeholder="Date"
                  />
                </div>
              </div>

              <div className="relative">
                <label 
                  htmlFor="location"
                  className="block text-[13px] tracking-normal sm:text-[16px] mb-[4px]  font-inter font-[300]"
                  style={{color: themeSetting.form.color}}
                >
                  Enter your birth place
                </label>
                  <input
                    placeholder="Enter birth place here"
                    type="text"
                    name="location"
                    id="location"
                    autoComplete="given-name"
                    list="timeZonesValue"
                    className="block w-full rounded-[40px] min-h-[50px] border px-[20px] text-[14px] sm:text-[16px] py-[15px] sm:py-[15px] placeholder:text-gray-300 focus:border-gray-400 outline-none shadow-none font-inter font-[300]"
                    onChange={(e) => fetchLocation(e)}
                    required
                    value={place}
                    
                  />
                  <div className="h-[10px]">
                    <span>{placemsg}</span>
                  </div>

                    <datalist id="timeZonesValue">
                      {finalCityList.map((listName,index) => {
                        return (
                          <option
                            key={index}
                            onClick={() => {
                              setPlace(listName.address);
                              setFinalCityList([]);
                            }}
                          >
                            {listName.address}
                          </option>
                        );
                      })}
                    </datalist>

              <div className="mt-[40px] w-full">
                <button
                    type="submit"
                    style={{backgroundColor: themeSetting.form.color}}
                    className="block w-full  rounded-[40px] min-h-[50px] btn_color py-[12px] sm:py-[12px] text-center text-[20px] font-[500] bg-[#00182E] text-white hover:shadow-lg hover:bg-[#F0ECE9] hover:opacity-[.8]"
                >
                    Submit
                </button>
              </div>
              </div>

            </div>
          </form>
    </>
  );
}
