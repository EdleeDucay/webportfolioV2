import React from 'react'
import {Container, Box, Typography, Grid, IconButton, Button} from '@mui/material'
import { useStyles } from '../styles/styles'
import {Typewriter} from 'react-simple-typewriter'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import resume from '../assets/resume.pdf'
import '../styles/textType.css'

export default function Intro() {
    const classes = useStyles();
 
    return (
        <Container className={classes.body} >
            <h1 >Edlee Ducay</h1>
            
            <div className="static-text">I am a</div>
            <span className="dynamic-text">
                <Typewriter 
                    words={["Developer", "Programmer", "Designer", "Student"]}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={75}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>
            <Box sx={{width: 700, pt: 3, display: { xs: 'inline', md: 'flex' }}}>

                <Typography className="">
                    Developing websites, applications and games with a passion! I acknowledge myself as a full-stack developer.
                    Currently, I am looking for ways to improve my skillset and new technologies I can pick up along the way.
                </Typography>
                
            </Box>
            <Grid sx={{flexGrow: 1}} container spacing={2}>
                <Grid item xs={24}>
                    <Grid container justifyContent={'left'} spacing={1}>
                        <Grid key={'github'} item>
                            <IconButton 
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <GitHubIcon className={classes.icon} onClick={() => window.open('https://github.com/EdleeDucay')} target="_blank"/>
                            </IconButton>
                        </Grid>
                        <Grid key={'linkedin'} item>
                            <IconButton 
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <LinkedInIcon className={classes.icon} onClick={() => window.open('https://www.linkedin.com/in/edleeducay/')}/>
                            </IconButton>
                        </Grid>
                        <Grid key={'email'} item>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <EmailIcon className={classes.icon} onClick={() => window.open('mailto:ducay@ualberta.ca')}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Button className={classes.button} sx={{mt: 2}} onClick={() => window.open(resume)} target="_blank">
                <Typography>
                    Check Out My Resume
                </Typography> 
            </Button>

        </Container>
    )
}
