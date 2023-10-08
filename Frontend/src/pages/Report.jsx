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
        <div className="flex flex-col w-full m-5">
          <div className="flex h-1/2 items-center">
            <RadarGraph />
            <LineGraph />
          </div>
          <div className="h-1/2">
            <div className="flex aspect-video w-screen bg-blue-400 rounded-xl p-3">
              <div className="w-3/4 aspect-video bg-black rounded-xl mr-5"></div>
              <div className="flex flex-col justify-around aspect-[1/3] w-1/4 max-h-full space-y-2 overflow-scroll">
                <div className="aspect-[2/1] w-full bg-white rounded-lg"></div>
                <div className="aspect-[2/1] w-full bg-white rounded-lg"></div>
                <div className="aspect-[2/1] w-full bg-white rounded-lg"></div>
                <div className="aspect-[2/1] w-full bg-white rounded-lg"></div>
                <div className="aspect-[2/1] w-full bg-white rounded-lg"></div>
                <div className="aspect-[2/1] w-full bg-white rounded-lg"></div>
              </div>
            </div>
            <TxtView />
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
