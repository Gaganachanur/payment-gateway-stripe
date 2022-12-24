import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://www.orchardtaunton.co.uk/app/uploads/2018/01/OSC-Winter-Generic-Website-Banner-2017-Fashion-01.jpg',
      paragraph:"peace"
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.template.net/54583/Fashion-Designer-Twitter-Banner-sm-1610104683382-545830.jpeg',
      paragraph:"peace"
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://img.freepik.com/free-vector/modern-black-friday-horizontal-banner-with-white-brush-stroke-background_1361-3703.jpg?w=2000',
      paragraph:"peace"
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://i.pinimg.com/originals/d4/a8/fa/d4a8faa6147ef48adf272d83e2eb279e.jpg',
       paragraph:"peace"
  },
];

function SlideEffect() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className='flex flex-wrap justify-center bg-white  shadow-2xl rounded-xl border ...'>
    <Box sx={{  flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          pl: 3,
          bgcolor: 'background.default',
        }}
      >
       
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                 
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
    </div>
  );
}

export default SlideEffect;
