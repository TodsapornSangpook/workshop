import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

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


const AlarmClockView = ({
    title = "LET THE COUNTDOWN BEGIN !!",
    clock = '25:00',
    onClickStart,
    onClickReset,
    children
}) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={8} container justify='center' direction='row'>
                <Grid item xs={12} className={classes.title}>
                    <label>{title}</label>
                </Grid>
                <Grid item xs={12} className={classes.clock}>
                    <label>{clock}</label>
                </Grid>
                <Grid item xs={12} container justify='center'>
                    <Grid item>
                        <Button className={classes.button} onClick={onClickStart} variant="contained" color="primary">Start</Button>
                    </Grid>
                    <Grid item>
                        <Button className={classes.button} onClick={onClickReset} variant="contained" color="secondary">Reset</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} container alignItems="center">
                <Grid item>
                    {children}
                </Grid>
            </Grid >
        </Grid>
    )
}

export default AlarmClockView
