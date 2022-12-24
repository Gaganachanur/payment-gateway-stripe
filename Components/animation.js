import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import boringclothes from "../assets/dress.jpg";
import Image from "next/image";

const icon = (
 <div>
 
    {/* <Box component="svg" sx={{ width: 100, height: 100 }}> */}
      {/* <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      /> */}
       <Image
              src={boringclothes}
              alt="Picture of the author"
              width={330}
              height={200}
            />
    {/* </Box> */}
  
  </div>

);

export default function Animation() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <Box >
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          {icon}
        </Slide>
      </Box>
    </Box>
  );
}
