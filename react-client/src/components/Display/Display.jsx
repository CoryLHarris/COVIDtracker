import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Paper,Typography,CardContent,Card,Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Display.module.css';
import cx from 'classnames'



const Display = (props) => {
  const formatDate = new Date(props.Gdata.lastUpdate).toDateString()

  if(!props.Gdata.confirmed){
    return ("Fetching Data...", <CircularProgress />)
  }



  return (

    <div className={styles.container}>

       <Grid  container spacing={2} justify="center">
        <Grid item component={Paper} className={cx(styles.cell, styles.ConfirmedC)}>
          <Paper textalign='center'>
            <Typography  gutterBottom className={styles.PaperText}>~ Confirmed Infected Global ~ </Typography>
            <Typography variant="h5" className={styles.PaperText}>-- {<CountUp start={0} end={props.Gdata.confirmed.value} duration={3} separator="," />} --</Typography>
            <Typography color="textSecondary" className={styles.PaperText}> {formatDate}</Typography>
          </Paper>
        </Grid>

        <Grid item component={Card} className={cx( styles.cell,styles.recoveredC)}>
          <Paper className={styles.recoveredC}>
            <Typography className={styles.PaperText} gutterBottom>~ Recovered Global ~</Typography>
            <Typography className={styles.PaperText} variant="h5">-- {<CountUp start={0} end={props.Gdata.recovered.value} duration={3} separator="," />} --</Typography>
            <Typography className={styles.PaperText} color="textSecondary">{formatDate}</Typography>
          </Paper>
        </Grid>

        <Grid item component={Card} className={cx(styles.cell, styles.deathsC)}>
          <Paper>
            <Typography className={styles.PaperText} gutterBottom> Global Deaths: COVID-19 </Typography>
            <Typography className={styles.PaperText} variant="h5">--   {<CountUp start={0} end={props.Gdata.deaths.value} duration={3} separator="," />} --</Typography>
            <Typography className={styles.PaperText} color="textSecondary">{formatDate}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default Display;


