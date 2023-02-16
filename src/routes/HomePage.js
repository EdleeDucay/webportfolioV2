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
import {Fade} from 'react-reveal';
import api from '../services/api'

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
    const [about, setAbout] = React.useState({})

    React.useEffect(() => {
      api({
          method: 'get',
          url: `/portfolio/portfolios/${process.env.REACT_APP_USERID}`
      }).then(function (response) {
          setAbout(response.data)
      })
  }, [])

    return (
        <div className={classes.root}>
          <NavBar />

          <div id="Home"/>
          <div className={classes.root}>
            <Fade><Intro about={about}/></Fade>
            <Fade><About about={about}/></Fade>
            <Projects/>
            <Fade><Experience/></Fade>
            <Fade><Contact about={about}/></Fade>
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
