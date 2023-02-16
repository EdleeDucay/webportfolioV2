import React from 'react'
import {Container, Divider, Grid, Typography} from '@mui/material'
import { useStyles } from '../styles/styles'
import image from '../assets/me.png'
import StorageIcon from '@mui/icons-material/Storage';
import '../styles/images.css'

export default function About({about}) {
    const classes = useStyles();

    return (
        <Container className={classes.body2} id='About'>
            <Typography className={classes.title}>
                About Me
            </Typography>
            <Divider classes={{root: classes.divider}} />

            <Grid sx={{flexGrow: 1, display: {xs: 'inline-block',sm: 'flex',  md: 'flex'}}} container spacing={2} justifyContent={'left'}>
                <Grid key={'about-text'} sx={{mt: 5, p: 5}} item xs>
                    <Typography className='textBox' >
                        {about.about}
                                             
                    </Typography>
                    <br/>
                    <Typography>Some of the technologies I recently use:</Typography> 
                    <br/>

                    <Grid container spacing={{xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {about.skills && about.skills.map(item => {
                            return (
                            <Grid item xs={2} sm={4} md={4} key={item} sx={{display: 'inline-flex'}}>
                                <StorageIcon sx={{color: 'royalblue'}}/>
                                <Typography className={classes.bullet}>
                                    {item}
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
