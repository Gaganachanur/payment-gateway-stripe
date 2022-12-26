import React, { Fragment } from "react";
import { BsLinkedin, BsGithub, BsMedium, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <Fragment>
    <div className=" flex-wrap grid grid-cols-3 gap-4 bg-gray-500">
      <div className="flex flex-wrap justify-center p-10">
        <h1>About</h1>
      </div>

      <div className="flex-wrap justify-center p-10 " >
        <h1>Developer contact</h1>
      </div>
      <div  className="flex-wrap justify-center p-10">
      <h1>Profile Links</h1>
      </div>
    </div>
    <div className=" flex-wrap grid grid-cols-3 gap-4 bg-gray-500">
    <div className="flex flex-wrap justify-center p-10">
      <p className="text-2xl text-white ">
         Fashion.com
      </p>
    </div>

    <div className="flex-wrap justify-center p-10 " >
      <p className="text-2xl text-white">gaganachanur@gmail.com</p>
      <p className="text-2xl text-white">9591557009</p>
    </div>
    <div  className=" flex flex-wrap justify-evenly ">
    <BsLinkedin size='30px'/>
    <BsGithub size='30px'/>
    <BsMedium size='30px'/>
    
    </div>
  </div>
  <div className=" bg-gray-500 flex flex-wrap text-white p-9 ">
  <h3>fashion.com © 2022 . All rights reserved.</h3>
  </div>
 </Fragment> );
};
export default Footer;
