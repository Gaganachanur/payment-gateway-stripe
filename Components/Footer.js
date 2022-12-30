import React, { Fragment } from "react";
import { BsLinkedin, BsGithub, BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <Fragment>
      <div className="flex flex-wrap justify-evenly bg-gradient-to-r from-pink-500">
        <div className=" p-10">
          <h1>About</h1>
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
          <BsLinkedin size="30px" />
          <BsGithub size="30px" />
          <BsMedium size="30px" />
        </div>
        </div>
      </div>
      <div className=" text-red-50 text-xl bg-gradient-to-r from-pink-500 p-10">
      india © 2022  fashion.com . All rights reserved.
      </div>
     
    </Fragment>
  );
};
export default Footer;
