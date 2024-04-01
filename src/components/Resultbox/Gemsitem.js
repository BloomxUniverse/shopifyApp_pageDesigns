import React from "react";
import { useSelector } from "react-redux";
import store from "../../store/index";

function getLink(a,b) {
  console.log(a);
  const link = a.filter((item)=>{
    return item.name == b;
  });
  return link[0].link;
};

function getImg(a,b) {
  console.log(a);
  const link = a.filter((item)=>{
    return item.name == b;
  });
  return link[0].img;
};

const Gemsitem = () => {
  const dataView = useSelector((store) => store.result);
  const designData = useSelector((store) => store.design);
  return (
    <div className="col-xl-3 col-sm-6 col-lg-4 col-md-6 showItemsInBox">
        <img
          src={ getImg(designData.data.design.gems,dataView.data.data.gems[0].name)}
          alt={dataView.data.data.gems[0].name}
          style={{ width: "100%" }}
        />
        <p style={{ color: designData.data.design.form.color }}>{dataView.data.data.gems[0].name}</p>
        <a style={{ background: designData.data.design.form.color }} href={ getLink(designData.data.design.gems,dataView.data.data.gems[0].name)}>Buy Now</a>
      </div>
  );
};

export default Gemsitem;
