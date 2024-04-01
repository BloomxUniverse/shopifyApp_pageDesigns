import React from 'react'
import { useSelector } from "react-redux";

const Sidetable = () => {
  const data = useSelector((store) => store.design);
  return (
    <img className="col-11 shadow" src={data.data.design.tableimage.img} alt="banner"/>
  )
}

export default Sidetable