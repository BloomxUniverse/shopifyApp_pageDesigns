import React, { useState } from "react";
import "./Form.css";
import instance from "../axiosConfig";
import store from "../store/index";
import resultSlice from "../store/resultSlice";
import { useSelector } from "react-redux";

const suggestCity = async (e, setPlacemsg, setPlacelist) => {
  let str = e.target.value;
  str = str.replace(/[^a-zA-Z\s]/g, "");
  setPlacemsg("Enter Village, Block or City Name here");
  if (str.length > 3) {
    setPlacemsg("Loading address details...");
    try {
      // Use the axios instance to make requests
      const response = await instance.get("/search/" + str); // The URL will be resolved relative to the baseURL
      console.log(str, response.data);
      let placeList = response.data.map((a) => a.address);
      setPlacelist((a) => [...new Set([...a, ...placeList])]);
      setPlacemsg("");
    } catch (error) {
      //   setError(error);
    } finally {
      //   setLoading(false);
    }
  }
};

const submitBloomxApiCall = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formD = [];
  for (let [key, value] of formData.entries()) {
    formD[key] = value;
  }

  const formDataPre = {
    date: formD["d"]+" "+formD["t"]+":00",
    timezone: "Asia/kolkata",
    name: formD["urname"],
    address: formD["tz"],
    mobile: formD["mobile"],
    email: formD["email"],
    gender: formD["gender"],
    purpose: formD["purpose"],
    birth_date: formD["d"],
    birth_time: formD["t"],
    body_weight: formD["weight"],
    birth_place: formD["tz"],
  };

  try {
    // Use the axios instance to make requests
    const response = await instance.post("/moonsign/calculateMoonsign",formDataPre); // The URL will be resolved relative to the baseURL
    if(response.data.gems){
        const pushData = {
            resultview:true,
            data:response.data
        };
        store.dispatch(resultSlice.actions.setResultview({data:pushData}));
    }
  } catch (error) {
    //   setError(error);
  } finally {
    //   setLoading(false);
  }
};

const Form = () => {
  const [placelist, setPlacelist] = useState([]);
  const [placemsg, setPlacemsg] = useState("");
  const data = useSelector((store) => store.design);

  return (
    <div className="col-11 shadow" id="thirdBoxMain1">
      <p style={{ color: data.data.design.form.color }} id="formMainHead1">Please Fill Your Birth Details Here:</p>
      <form
        id="calculatorId"
        action="/"
        onSubmit={submitBloomxApiCall}
        className="row"
        style={{ color: data.data.design.form.color }}
      >
        <div className="mb-2 col-md-6">
          <label for="urname" style={{ color: data.data.design.form.color }} className="formlabelunwanted form-label">
            Enter your name
          </label>
          <input
            required="true"
            type="text"
            className="form-control"
            id="urname"
            placeholder="Enter Your Name"
            name="urname"
          />
        </div>
        <div className="mb-2 col-md-6">
          <label style={{ color: data.data.design.form.color }} className="formlabelunwanted form-label">
            Enter your email
          </label>
          <input
            required="true"
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Your email address"
            name="email"
          />
        </div>
        <div className="mb-2 col-md-6">
          <label style={{ color: data.data.design.form.color }} className="formlabelunwanted form-label">
            Enter your phone number
          </label>
          <input
            required="true"
            type="number"
            className="form-control"
            id="mobile"
            placeholder="Enter Your mobile"
            name="mobile"
          />
        </div>
        <div className="mb-2 col-md-6">
          <label style={{ color: data.data.design.form.color }} for="gender" className="formlabelunwanted form-label">
            Enter your gender
          </label>
          <br />
          <select
            name="gender"
            required="true"
            className="form-select"
            id="gender"
          >
            <option style={{ color: "black" }}>male</option>
            <option style={{ color: "black" }}>female</option>
          </select>
        </div>
        <div className="mb-2 col-md-6">
          <label style={{ color: data.data.design.form.color }} for="purpose" className="formlabelunwanted form-label">
            Purpose to wear gemstone
          </label>
          <select name="purpose" className="form-select" id="purpose">
            <option style={{ color: "black" }}>General</option>
            <option style={{ color: "black" }}>Relationship</option>
            <option style={{ color: "black" }}>Education</option>
            <option style={{ color: "black" }}>Job and career</option>
            <option style={{ color: "black" }}>Health</option>
            <option style={{ color: "black" }}>Business</option>
            <option style={{ color: "black" }}>
              All relationship, Education, Job, career, Health, Business
            </option>
          </select>
        </div>
        <div className="mb-2 col-md-6">
          <label style={{ color: data.data.design.form.color }} className="formlabelunwanted form-label">
            Body weight (in kg)
          </label>
          <input
            required="true"
            type="number"
            className="form-control"
            id="weight"
            placeholder="Enter Your weight"
            name="weight"
          />
        </div>
        <div className="mb-2 col-md-6">
          <label style={{ color: data.data.design.form.color }} for="dob" className="formlabelunwanted form-label">
            Enter your birth date
          </label>
          <input
            required="true"
            type="date"
            className="form-control"
            id="dob"
            placeholder="Enter Date of birth"
            name="d"
          />
        </div>
        <div className="mb-2 col-md-6">
          <label style={{ color: data.data.design.form.color }} for="tob" className="formlabelunwanted form-label">
            Enter your birth time
          </label>
          <input
            required="true"
            type="time"
            className="form-control"
            id="tob"
            placeholder="Enter Time of birth"
            name="t"
          />
        </div>
        <div className="mb-2 mt-1 col-md-6">
          <label
            id="cityName"
            for="tz"
            style={{ color: data.data.design.form.color }}
            className="formlabelunwanted form-label"
          >
            Enter your birth place:
          </label>
          <input
            required="true"
            autocomplete="off"
            type="text"
            className="form-control"
            list="timeZonesValue"
            id="tz"
            placeholder="Enter birth place here"
            name="tz"
            onKeyUp={(e) => {
              suggestCity(e, setPlacemsg, setPlacelist);
            }}
          />
          <datalist  id="timeZonesValue">
            {placelist.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </datalist>
          <small id="cityNameProcess">{placemsg}</small>
          <div
            id="timeZonesValueError"
            style={{ color: "red", display: "none" }}
          >
            Enter Village, Block or City Name here then select the value from
            suggested options.
          </div>
          <button
            type="submit"
            className="mt-4 btn col-12 btn-dark submitBtn"
            style={{
              fontSize: "20px",
              padding: "8px",
              backgroundColor: data.data.design.form.color 
            }}
            
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
