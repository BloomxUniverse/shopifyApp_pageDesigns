import React, { useEffect, useRef } from "react";
import Userinput from "./Resultbox/Userinput";
import Rashidetails from "./Resultbox/Rashidetails";
import Gemsname from "./Resultbox/Gemsname";
import Braceletname from "./Resultbox/Braceletname";
import Rudrakshname from "./Resultbox/Rudrakshname";
import Gemsitem from "./Resultbox/Gemsitem";
import Braceletitem from "./Resultbox/Braceletitem";
import Rudrakshitem from "./Resultbox/Rudrakshitem";
import { useSelector} from "react-redux";

const Resultbox = () => {
  const data = useSelector((store) => store.design);
  const dataView = useSelector((store) => store.result);

  const resultBoxView = useRef(null);
  useEffect(() => {
    resultBoxView.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div id="resultBoxMainBox">
      <img
        decoding="async"
        id="resultBoxMain"
        alt=""
        src={process.env.REACT_APP_RESOURCE_URL+"/resultbanner.webp"}
      />
      <div ref={resultBoxView} id="loadingProcessDataShow" style={{ display: "block" ,paddingBottom: "60px"}}>
        <div
          className="col-10 offset-1"
          style={{ color: "#813c01", paddingTop: "60px" }}
        >
          {data.data.design.resultbox.userinput && <Userinput></Userinput>}
          {data.data.design.resultbox.rashidetails && (
            <Rashidetails></Rashidetails>
          )}
          {data.data.design.resultbox.gems && <Gemsname></Gemsname>}
          {data.data.design.resultbox.bracelet && <Braceletname></Braceletname>}
          {data.data.design.resultbox.rudraksh && <Rudrakshname></Rudrakshname>}
        </div>
        { data.data.design.resultbox.product && <div
          id="boxSuggesstionDetails"
          style={{
            display: "block",
            paddingTop: "60px",
          }}
        >
          <div className="col-10 offset-1">
            <div id="boxSuggesstionDetailsIn" className="row">
              {data.data.design.resultbox.gems && <Gemsitem></Gemsitem>}
              {data.data.design.resultbox.bracelet && (
                <Braceletitem></Braceletitem>
              )}
              {data.data.design.resultbox.rudraksh && (
                <Rudrakshitem></Rudrakshitem>
              )}
            </div>
          </div>
        </div>}
        <div id="bannerHomePage" style={{ display: "none" }}></div>
        <div id="bannerAddPage" style={{ display: "none" }}></div>
      </div>
    </div>
  );
};

export default Resultbox;
