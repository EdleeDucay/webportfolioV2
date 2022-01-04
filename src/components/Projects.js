import React from 'react'
import {Container, Divider, Typography} from '@mui/material'
import { useStyles } from '../styles/styles'

export default function Projects() {
    const classes = useStyles()

    return (
        <Container className={classes.body} id='Projects'>
            <Typography className={classes.title}>
                Projects
            </Typography>
            <Divider classes={{root: classes.divider}} />

        </Container>
    )
}
