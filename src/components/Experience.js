import React from 'react'
import { useEffect } from 'react'
import {Container, Divider, Grid, ListItemText, Typography} from '@mui/material'
import { useStyles } from '../styles/styles'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import api from '../services/api'

export default function Experience() {
    const classes = useStyles()
    const [experience, setExperience] = React.useState([])

    useEffect(() => {
        api({
            method: 'get',
            url: `/portfolio/experiences/${process.env.REACT_APP_USERID}`
        }).then(function (response) {
            setExperience(response.data)
        })
    }, [])

    function ExpCard(job) {
        return (
            <Container className={[classes.spotlight, classes.spotlightCard]} sx={{mt: 5, mb: 5, width: {md: "50%", sm: "100%"}}}>
                <Typography sx={{display: 'inline-flex', mr: 1}} className={classes.jobTitle1}>{job.title}</Typography>
                <Typography sx={{display: 'inline-flex'}} className={classes.jobTitle2}>@ {job.employer}</Typography>
                <Typography>{job.date}</Typography>
                <Grid container spacing={1} sx={{mt: 1}}>
                    {job.tasks.map(task => {
                        return (
                            <>
                            <Grid item md={1} sm={1} xs={2}>
                                <ArrowRightAltIcon sx={{color: 'royalblue', flex: 1, mt: 0.25}}/>
                            </Grid>
                            <Grid item md={11} sm={11} xs={10}>
                                <ListItemText sx={{flex: 1}}>{task}</ListItemText>
                            </Grid>
                            </>
                        )
                    })}
                </Grid>
            </Container>
        )

    }

    return (
        <Container className={classes.body2} sx={{mt: 5}} id="Experience">
            <Typography className={classes.title}>
                Experience
            </Typography>
            <Divider classes={{root: classes.divider}} />

            {experience.map(job => {
                return (
                    <ExpCard {...job}/>
                )
            })}
        </Container>
    )
}
