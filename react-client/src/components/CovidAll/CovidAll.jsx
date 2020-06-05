import React from 'react';
import CovidState from "../CovidState/CovidState.jsx";
import CircularProgress from '@material-ui/core/CircularProgress';
import {Paper,Typography,CardContent,Card,Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './CovidAll.module.css';
import cx from 'classnames'

//https://corona.lmao.ninja/v2/countries/US //us current only data

const CovidAll = ({data}) => {
  console.log(data, "this is data dude")
  const formatDate = new Date(data.lastUpdate).toDateString()

  if(!data.confirmed){
    return ("Fetching Data...", <CircularProgress />)
  }

  return (

    <div className={styles.container}>

      <Grid  container spacing={2} justify="center">
        <Grid item component={Paper} className={cx(styles.cell, styles.ConfirmedC)}>
          <Paper textalign='center'>
            <Typography  gutterBottom className={styles.PaperText}>~ Confirmed Infected USA ~ </Typography>
            <Typography variant="h5" className={styles.PaperText}>-- {<CountUp start={0} end={data.confirmed} duration={3} separator="," />} --</Typography>
            <Typography color="textSecondary" className={styles.PaperText}> {formatDate}</Typography>
          </Paper>
        </Grid>

        <Grid item component={Card} className={cx( styles.cell,styles.recoveredC)}>
          <Paper className={styles.recoveredC}>
            <Typography className={styles.PaperText} gutterBottom>~ Recovered USA ~</Typography>
            <Typography className={styles.PaperText} variant="h5">-- {<CountUp start={0} end={data.recovered} duration={3} separator="," />} --</Typography>
            <Typography className={styles.PaperText} color="textSecondary">{formatDate}</Typography>
          </Paper>
        </Grid>

        <Grid item component={Card} className={cx(styles.cell, styles.deathsC)}>
          <Paper>
            <Typography className={styles.PaperText} gutterBottom> USA Deaths: COVID-19 </Typography>
            <Typography className={styles.PaperText} variant="h5">--   {<CountUp start={0} end={data.deaths} duration={3} separator="," />} --</Typography>
            <Typography className={styles.PaperText} color="textSecondary">{formatDate}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default CovidAll;