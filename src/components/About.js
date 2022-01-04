import React from 'react'
import {Container, Divider, Grid, Typography} from '@mui/material'
import { useStyles } from '../styles/styles'
import image from '../assets/me.png'
import StorageIcon from '@mui/icons-material/Storage';
import techStack from '../jsons/techStack.json'
import '../styles/images.css'
import { typography } from '@mui/system';

export default function About() {
    const classes = useStyles();

    return (
        <Container className={classes.body} id='About'>
            <Typography className={classes.title}>
                About Me
            </Typography>
            <Divider classes={{root: classes.divider}} />

            <Grid sx={{flexGrow: 1, display: {xs: 'inline-block',sm: 'flex',  md: 'flex'}}} container spacing={2} justifyContent={'left'}>
                <Grid key={'about-text'} sx={{mt: 5, p: 5}} item xs>
                    <Typography className='textBox' >
                        Hi I am Edlee, a 4th Year Student at the University of Alberta pursuing a Major in Computing Science
                        and a Minor in Mathematics. I love to workout, cook, (but mostly) eat, play volleyball and football.
                        I have a natural affinity for computers in terms of software and hardware and will never stop spending 
                        my entire life's time researching and discovering new technologies. 
                        
                        
                    </Typography>
                    <br/>
                    <Typography>Some of the technologies I generally use:</Typography> 
                    <br/>

                    <Grid container spacing={{xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {techStack.map(item => {
                            return (
                            <Grid item xs={2} sm={4} md={4} key={item.tech} sx={{display: 'inline-flex'}}>
                                <StorageIcon/>
                                <Typography className={classes.bullet}>
                                    {item.tech}
                                </Typography>
                            </Grid>
                            )
                        })}
                    </Grid>
                    
                </Grid>
                <Grid key={'about-img'} item xs="auto" className='image'>
                    <img
                        src={image}
                        alt={'N/A'}
                        loading="lazy"
                    />
                </Grid>

            </Grid>
            
           
            
        </Container>
    )
}
