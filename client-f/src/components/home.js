import React from "react";
import Home1 from "./home/home1";
import Home2 from "./home/home2";

function Home() {
  return (
    <div>
      {" "}
      <Home1 />
      <div className="home">
        <Home2 />
      </div>{" "}
    </div>
  );
}

export default Home;
