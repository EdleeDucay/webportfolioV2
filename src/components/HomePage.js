import React from 'react'
import NavBar from './NavBar'
import About from './About'
import Intro from './Intro'
import Projects from './Projects'
import { useStyles } from '../styles/styles'
import { useScrollTrigger , Box, Zoom} from '@mui/material'
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function ScrollTop(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );

      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Zoom>
    );
  }

export default function HomePage(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <NavBar />
            <div id="back-to-top-anchor"/>
            <div className={classes.root}>
                <Intro/>
                <About/>
                <Projects/>
            </div>

            <ScrollTop {...props}>
                <Fab  size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </div>
    )
}