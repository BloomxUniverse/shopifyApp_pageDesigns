import React from "react";
import { useSelector } from "react-redux";
import './Titlebar.css';

const Titlebar = () => {
  const data = useSelector((store) => store.design);
  return (
    <div className="col-12 d-flex justify-content-center">
      <div className="col-11 text-center fw-bold titlebarText" style={{color:data.data.design.title.color}}>{data.data.design.title.text} </div>
    </div>
  );
};

export default Titlebar;
