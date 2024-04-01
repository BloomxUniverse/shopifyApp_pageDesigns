import React from "react";
import { useSelector } from "react-redux";
import store from "../../store/index";

const Rudrakshname = () => {
  const dataView = useSelector((store) => store.result);
  const designData = useSelector((store) => store.design);
  return (
    <div className="row">
      <div style={{color: designData.data.design.form.color}} className="col-4 col-md-2 HeadingTableData">Rudraksha</div>
      <div style={{color: designData.data.design.form.color}} id="rudrakshaText" className="col-7 col-md-5 contentTableData">
        {dataView.data.data.rudraksh[0].name}
        {" "}
        is best for you
      </div>
    </div>
  );
};

export default Rudrakshname;
