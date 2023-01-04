import React, { Fragment } from "react";
import { BsLinkedin, BsGithub, BsMedium } from "react-icons/bs";

const Footer = () => {
  const linkedinUrl = `https://www.linkedin.com/in/gagan-r-achanur-developer/`
  const githubUrl = `https://github.com/Gaganachanur/payment-gateway-stripe`
  const mediumUrl = `https://medium.com/@gaganachanur`
  return (
    <Fragment>
      <div className="flex flex-wrap justify-evenly bg-gradient-to-r from-indigo-500 lg:from-purple-600">
        <div className=" p-10">
          <h1 >About</h1>
          <p className="text-xl  text-red-50"> fashion .com</p>
        </div>

        <div className="p-10 ">
          <h1>Developer contact</h1>
          <p className="text-xl  text-red-50">gaganachanur@gmail.com</p>
          <p className="text-xl  text-red-50">9591557009</p>
        </div>
        <div className="p-10">
          <h1>Profile Links</h1>
          <div className=" flex flex-wrap justify-evenly ">
          <BsLinkedin  onClick={() => window.open(linkedinUrl)} className="transform transition-all hover:scale-110 cursor-pointer" size="30px" />
          <BsGithub  onClick={() => window.open(githubUrl)} className = "transform transition-all hover:scale-110 cursor-pointer" size="30px" />
          <BsMedium  onClick={() => window.open(mediumUrl)} className = "transform transition-all hover:scale-110 cursor-pointer" size="30px" />
        </div>
        </div>
      </div>
      <div className=" text-red-50 text-xl pl-10 pb-10 bg-gradient-to-r from-indigo-500 lg:from-purple-600 ">
      india © 2022  fashion.com . All rights reserved.
      </div>
     
    </Fragment>
  );
};
export default Footer;
