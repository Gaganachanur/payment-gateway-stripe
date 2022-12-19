
import React, {useState} from 'react';
import { Fragment } from "react";

import PrimarySearchAppBar from "./navBar";
import CustomNavBar from "./customNavBar";
import { BsFillMoonStarsFill } from "react-icons/bs";


export default function HomePage(props){
    const [darkMode, setDarkMode] = useState(false);
   return(
       <Fragment>
           <div className={darkMode ? "dark" : ""}>

          <div className="bg-white dark:bg-black">
        <PrimarySearchAppBar/>
        {/* <CustomNavBar/> */}

        </div>

        <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer"
                  color={darkMode ? "white" : ""}
                />
        </div>
       </Fragment>
   )

}