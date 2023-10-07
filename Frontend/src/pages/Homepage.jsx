import React from "react";

import Navbar from "../components/Navbar.jsx";
import Recording from "../components/Recording.jsx";
import Upload from "../components/Upload.jsx";

const Homepage = () => {

  return (
    <div className="flex w-full items-center">
      <Navbar />

      <div className="flex flex-col w-full justify-center items-center gap-10">
        <Recording className=""/>
        <Upload />
      </div>
    </div>
  );
};

export default Homepage;
