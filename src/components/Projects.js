import React from 'react'
import { useEffect } from 'react'
import {Card, CardContent, Container, Divider, Typography, Grid, Link} from '@mui/material'
import { useStyles } from '../styles/styles'
import axios from "axios"
import SummarizeIcon from '@mui/icons-material/Summarize';
import CircleIcon from '@mui/icons-material/Circle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import colours from "../jsons/colours.json"
import caca from '../assets/cacaLoginPage.png'
import api from '../services/api'

export default function Projects() {
    const classes = useStyles()
    const [projects, setProjects] = React.useState([])
    const [projectSpotlights, setProjectSpotlights] = React.useState([])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://api.github.com/users/EdleeDucay/repos'
        }).then(function (response) {
            setProjects(response.data)
        })

        api({
            method: 'get',
            url: `/portfolio/projects/${process.env.REACT_APP_USERID}`
        }).then(function (response) {
            setProjectSpotlights(response.data)
        })
    }, [])

    // Project Card {description, language, name, homepage, html_url, size}
    function ProjectCard(project) {
        return (
            <Card sx={{ mt: 3, width: 320, height: 350, position: 'relative' }} className={classes.card}>
                <CardContent >
                    <div style={{height: '100%'}}>

                    <Grid sx={{flexGrow: 1, alignItems: 'flex-end', display: {md: 'flex'}}} container spacing={2} justifyContent={'left'}>
                        <Grid key={'icon'}  item xs>
                            <SummarizeIcon sx={{fontSize: 36, color: 'royalblue'}}/>
                        </Grid>
                        <Grid key={'links'} item xs="auto">

                            <GitHubIcon className={classes.cardIcon} onClick={() => window.open(project.html_url)}/>
                            {project.homepage && <LinkIcon className={classes.cardIcon} onClick={() => window.open(project.homepage)}/>}
                        </Grid>
                    </Grid>
                    <Typography variant="h5" sx={{pb: 1, pt: 1}}className={classes.cardTitle}>
                        {project.name}
                    </Typography>
                    <Typography>
                        {project.description}
                    </Typography>
                    </div>

                    <Grid sx={{paddingRight: 4, paddingBottom: 2, position: 'absolute', bottom: 0}} container spacing={2} justifyContent={'left'}>
                        <Grid key={'language'} sx={{display: 'inline-flex'}} item xs>
                            <CircleIcon sx={{fontSize: 12, marginTop: '5px', marginRight: '5px', color: colours[project.language].color}} />
                            <Typography >
                                {project.language}
                            </Typography>
                        </Grid>
                        <Grid key={'size'} item xs="auto">
                            <Typography>
                                {project.size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} KB
                            </Typography>
                        </Grid>
                    </Grid>
                    
                </CardContent>
            </Card>
        )
    }

    function ProjectSpotlight(project) {
        return (
            <>
                <Typography sx={{mt: 5, mr: 1, display: "inline-block"}} className={classes.title2}>Project Spotlight -</Typography>
                <Typography sx={{display: "inline-block", color: '#ccd6f6',fontSize: 32}}>{project.name}</Typography>

                <Container className={[classes.spotlight, classes.spotlightCard]} sx={{mt: 2, mb: 5}}>
                    <a href={project.link} target="_blank">
                        <img src={`data:${project.imageType};base64,${project.imageData}`} alt="N/A" className='projectSpotlightImage'/>
                    </a>
                    <Typography>
                        {project.description}
                    </Typography>
                    <br/>
                    <Typography sx={{fontWeight: 'bolder', fontSize: 18, color: '#ccd6f6'}}>Stack</Typography>
                    <Divider className={classes.divider}/>
                    <Typography>
                        {project.techStack.map((tech, index) => {
                            return (
                                <>
                                    {tech}
                                    {index < project.techStack.length-1 && <CircleIcon sx={{fontSize: 12, mx: '5px', color: 'royalblue'}} />}
                                </>
                            )
                        })}
                    </Typography>
                </Container>
            </>
        )
    }

    return (
        <Container className={classes.body} id='Projects'>
            <Typography className={classes.title}>
                Projects
            </Typography>
            <Divider classes={{root: classes.divider}} />
            
            {projectSpotlights.length > 0 && projectSpotlights.map(project => {
                return (
                    <ProjectSpotlight {...project}/>
                )
            })}

            <Typography sx={{fontSize: 32}}>More Projects</Typography>

            <Grid container spacing={1} columns={{ xs: 2, sm: 8, md: 12 }} >
                {projects.length > 0 && projects.map(project => {
                    return (
                        <Grid item xs={2} sm={4} md={4} key={project.name} sx={{display: 'inline-flex'}} justifyContent={'center'}>
                            <ProjectCard {...project}/>
                        </Grid>
                    )
                })}

            </Grid> 

        </Container>
    )
}


                {/* <Typography sx={{mt: 5, mr: 1, display: "inline-block"}} className={classes.title2}>Project Spotlight -</Typography>
                <Typography sx={{display: "inline-block", color: '#ccd6f6',fontSize: 32}}>{project.name}</Typography>

                <Container className={classes.spotlight} sx={{mt: 2, mb: 5}}>
                    <a href="https://app.conversecook.com" target="_blank"><img src={caca} alt="N/A" className='cacaImg'/></a>
                    <Typography>
                        This is a web based application for a non-profit organization located in Edmonton called 
                        <Link href='https://conversecook.com/aboutus/' target="_blank" className={classes.link} sx={{ml: 1}}>Converse and Cook</Link>.
                        Used for sharing recipes, shopping and volunteer management for cooking socials. 
                        Check it out at <Link href='https://app.conversecook.com' target="_blank" className={classes.link}>app.conversecook.com</Link>.
                    </Typography>
                    <br/>
                    <Typography sx={{fontWeight: 'bolder'}}>Stack</Typography>
                    <Divider className={classes.divider}/>
                    <Typography>
                        React 
                        <CircleIcon sx={{fontSize: 12, mx: '5px'}} />
                        Django 
                        <CircleIcon sx={{fontSize: 12, mx: '5px'}} />
                        MySQL
                        <CircleIcon sx={{fontSize: 12, mx: '5px'}} />
                        Google API
                        <CircleIcon sx={{fontSize: 12, mx: '5px'}} />
                        GoDaddy
                    </Typography>
                </Container> */}