import React from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({

    button: {
      
    },
    conButton: {
        padding: '20px'
    },
    textField: {
        marginLeft: '10px'
    }
}))

const AlarmClockToolsView = ({
    onAddTime,
    onChangeCustomTime,
    onAddCustomTime
}) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} className={classes.conButton}>
                <Button className={classes.button} variant="contained" color="secondary" onClick={onAddTime(15)}>+ 15</Button>
            </Grid>
            <Grid item xs={12} className={classes.conButton}>
                <Button className={classes.button} variant="contained" color="secondary" onClick={onAddTime(30)}>+ 30</Button>
            </Grid>
            <Grid item xs={12} className={classes.conButton}>
                <Button className={classes.button} variant="contained" color="secondary" onClick={onAddCustomTime}>Add</Button>
                <TextField
                    id="custom-time"
                    type="time"
                    placeholder="HH:MM"
                    onChange={onChangeCustomTime}
                    className={classes.textField}

                />
            </Grid>
        </Grid>
    )
}

export default AlarmClockToolsView
