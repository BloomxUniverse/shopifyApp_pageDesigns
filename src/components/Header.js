import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useSelector((store) => store.design);
  return (
    <div className="col-12">
      <img className="col-12" src={data.data.design.header.img} alt="banner"/>
    </div>
  );
};

export default Header;
