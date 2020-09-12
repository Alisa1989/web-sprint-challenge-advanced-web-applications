import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getColors = () => {
    axiosWithAuth()
      .get("api/colors")
      .then((res) => {
        console.log("getColors Api response:", res.data);
        setColorList(res.data);
      })
      .catch((err) => console.log("getColors error:", err))
  };

  useEffect(() => {
    getColors();
  }, []);

  return (
    <>
      {(colorList.length == 0) ? (<div>LOADING COLORS...</div>) : (
        <>
          <ColorList colors={colorList} updateColors={setColorList} />
          <Bubbles colors={colorList} />
        </>
      )};
    </>
  );
};

export default BubblePage;
