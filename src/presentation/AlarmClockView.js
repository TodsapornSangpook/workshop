import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#80B8B6'
    },
    conTitle: {
        fontSize: '50px',
        textAlign: 'center',
        height: '100px',
        lineHeight: '100px',
        color: '#64A8B5'
    },
    conClock: {
        fontSize: '150px',
        textAlign: 'center',
        height: '200px',
        lineHeight: '200px',
        color: '#336772'
    },
    conAction: {
        marginTop: '50px',
        height: '75px'
    },
    button: {
        margin: '20px',
        backgroundColor: '#FDF5A8',
        color: '#918E42',
        '&:hover': {
            backgroundColor: '#dfdeb9'
        },
    },
}))

const AlarmClockView = ({
    title,
    clock,
    onClickStart,
    onClickReset,
    children
}) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={10} container justify='center' alignItems='center' direction='row'>
                <Grid item>
                    <Grid item xs={12} className={classes.conTitle}>
                        <label>{title}</label>
                    </Grid>
                    <Grid item xs={12} className={classes.conClock}>
                        <label>{clock}</label>
                    </Grid>
                    <Grid item xs={12} container justify='center' className={classes.conAction}>
                        <Grid item>
                            <Button className={classes.button} onClick={onClickStart} variant="contained" color="primary">Start</Button>
                        </Grid>
                        <Grid item>
                            <Button className={classes.button} onClick={onClickReset} variant="contained" color="secondary">Reset</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={2} container alignItems="center">
                <Grid item>
                    {children}
                </Grid>
            </Grid >
        </Grid>
    )
}

export default AlarmClockView
