import React from 'react'
import {Container, Divider, Grid, Typography, IconButton, Button} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import resume from '../assets/resume.pdf'

import { useStyles } from '../styles/styles'

export default function Contact({about}) {
    const classes = useStyles()
    const resumeUrl = `${process.env.REACT_APP_BASE_API_URL}/portfolio/resume`

    return (
        <Container className={classes.body3} sx={{mt: 5}} id="Contact">
            <Typography className={classes.title}>
                Contact
            </Typography>
            <Divider classes={{root: classes.divider}} />

            <Container sx={{textAlign: 'center', mt: 3, width: {md: '50%', sm: '75%'}}}>

            <Typography>
                Get in touch and send me an email at {about.email} or 
                use one of the links down below.
            </Typography>

            <Grid container justifyContent={'center'} spacing={1}>
                <Grid key={'github'} item>
                    <IconButton 
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <GitHubIcon className={classes.icon} onClick={() => window.open(about.github)} target="_blank"/>
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
                        <LinkedInIcon className={classes.icon} onClick={() => window.open(about.linkedin)}/>
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
                        <EmailIcon className={classes.icon} onClick={() => window.open(`mailto:${about.email}`)}/>
                    </IconButton>
                </Grid>
            </Grid>
            <Button className={classes.button} sx={{mt: 2}} onClick={() => window.open(resumeUrl)} target="_blank">
                <Typography>
                    Resume
                </Typography> 
            </Button>

            </Container>
        </Container>
    )
}
