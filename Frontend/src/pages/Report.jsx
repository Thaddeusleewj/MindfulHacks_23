import React from "react";

import Navbar from "../components/Navbar";

import RadarGraph from "../components/RadarGraph";
import LineGraph from "../components/LineGraph";
import TxtView from "../components/TxtView";

const Report = () => {
  return (
    <>
      <div className="flex w-full">
        <Navbar />
        <div className="flex flex-col m-5 w-full">
          <div className="flex md:items-center w-full md:flex-col justify-center">
            <RadarGraph />
            <LineGraph />
          </div>
          <div>
            <TxtView />
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
