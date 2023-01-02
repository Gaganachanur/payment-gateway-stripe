import React, { useState } from "react";
import { Fragment } from "react";

import PrimarySearchAppBar from "./navBar";
import DemoCards from "./demoCards"
import Products from "../Components/Products";
import SlideEffect from "../Components/SlideEffect"
import Footer from "./Footer";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

const actions = [
  { icon: <FileCopyIcon />, name: "Copy" },
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon onClick={()=>window.print()} />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

export default function HomePage(props) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Fragment>
      <div className={darkMode ? "dark" : ""}>
        <div className="dark:bg-black">
          <PrimarySearchAppBar />
        </div>
        {/* <SlideEffect/> */}
        <DemoCards />
       <div className="spacer layer"></div>
        <Products />

        <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>
        <Footer/>
      </div>
    </Fragment>
  );
}