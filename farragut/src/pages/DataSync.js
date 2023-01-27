import React from "react";
import Header from "../component/Header";

const DataSync = () => {
  return (
    <>
      <Header header={"Data Sync"} />
      <iframe
        src="http://farragut.s3-website-us-east-1.amazonaws.com/login"
        width={"100%"}
        height={"700px"}
      />
    </>
  );
};

export default DataSync;
