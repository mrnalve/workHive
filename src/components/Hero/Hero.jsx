import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-around flex-wrap md:flex-nowrap">
      <div className="lg:w-[50%]">
        <h1 className="text-dark-01 text-6xl font-extrabold leading-[80px]">
          One Step <br /> Closer To Your <br /> <span className="text-text-color">Dream Job</span>
        </h1>
        <p className="text-dark-03 text-[18px] font-medium leading-8">
          Explore thousands of job opportunities with all the <br /> information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="applied-button">Get Started</button>
      </div>
      <div className="lg:w-[40%]">
      <img className="w-[816px] h-[644px]" src="https://i.ibb.co/XW7Zk11/businessman-shows-his-finger-up.jpg" alt="businessman-shows-his-finger-up" border="0"></img>
      </div>
    </div>
  );
};

export default Hero;
