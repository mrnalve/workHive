import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-around flex-wrap md:flex-nowrap bg-custom-color px-2 lg:px-0">
      <div className="lg:w-[50%]">
        <h1 className="text-dark-01 lg:text-6xl text-4xl font-extrabold lg:leading-[80px] leading-[60px]">
          One Step <br /> Closer To Your <br /> <span className="text-text-color">Dream Job</span>
        </h1>
        <p className="text-dark-03 text-[18px] font-medium leading-8">
          Explore thousands of job opportunities with all the <br /> information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="applied-button mx-0">Get Started</button>
      </div>
      <div className="lg:w-[40%]">
      <img className="w-full h-[544px]" src="https://i.ibb.co/WFgyQfJ/P3-OLGJ1-copy-1.png" alt="businessman-shows-his-finger-up" border="0"></img>
      </div>
    </div>
  );
};
export default Hero;
