import React from 'react'
import NavBar from '../components/NavBar'
import About from '../components/About'
import Intro from '../components/Intro'
import Projects from '../components/Projects'
import { useStyles } from '../styles/styles'
import { useScrollTrigger , Box, Zoom} from '@mui/material'
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import {Fade, Flip} from 'react-reveal';

function ScrollTop(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#Home',
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

          <div id="Home"/>
          <div className={classes.root}>
            <Fade><Intro/></Fade>
            <Fade><About/></Fade>
            <Fade><Projects/></Fade>
            <Fade><Experience/></Fade>
            <Fade><Contact/></Fade>
          </div>

          <footer className={classes.footer}>
            &copy; Edlee Ducay 2022
          </footer>

          <ScrollTop {...props}>
              <Fab size="small" aria-label="scroll back to top">
                  <KeyboardArrowUpIcon />
              </Fab>
          </ScrollTop>
        </div>
    )
}
