import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const data = useSelector((store) => store.design);
  return (
    <div className="col-12 d-flex mt-4 justify-content-center">
      <img className="col-11 shadow" src={data.data.design.footer.img} alt="banner"/>
    </div>
  );
};

export default Footer;
