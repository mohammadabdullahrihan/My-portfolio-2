import React from "react";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import Tech from "./Tech";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="p-6">
    <Banner />
     <AboutMe />
     <Tech />
     <Work />
     <Contact />
    </div>
  );
};

export default Home;
