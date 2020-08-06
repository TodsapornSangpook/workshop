import React from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#80B8B6'
    },
    title: {
        fontSize: '50px',
        textAlign: 'center'
    },
    clock: {
        fontSize: '150px',
        textAlign: 'center'
    },
    button: {
        margin: '20px'
    }
}))

const AlarmClockToolsView = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Button className={classes.button} variant="contained" color="secondary">+ 15</Button>
            </Grid>
            <Grid item xs={12}>
                <Button className={classes.button} variant="contained" color="secondary">+ 30</Button>
            </Grid>
            <Grid item xs={12}>
                <Button className={classes.button} variant="contained" color="secondary">set</Button>
                <TextField
                    id="custom"
                    placeholder="00:00"
                    variant="outlined"
                />
            </Grid>
        </Grid>
    )
}

export default AlarmClockToolsView
