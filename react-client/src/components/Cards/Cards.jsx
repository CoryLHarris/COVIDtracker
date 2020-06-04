import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Typography,CardContent,Card,Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Cards.module.css';
import classnames from 'classnames'


const Cards = (props) => {
  const formatDate = new Date(props.Gdata.lastUpdate).toDateString()
  if(!props.Gdata.confirmed){
    return ("Fetching Data...", <CircularProgress />)
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} className={styles.cell}>
          <CardContent>
            <Typography  gutterBottom>~ Confirmed Infected Global ~ </Typography>
            <Typography variant="h5">-- {<CountUp start={0} end={props.Gdata.confirmed.value} duration={3} separator="," />} --</Typography>
            <Typography color="textSecondary"> {`>> ${formatDate} <<` }</Typography>

          </CardContent>
        </Grid>

        <Grid item component={Card} className={styles.cell}>
          <CardContent>
            <Typography  gutterBottom>~ Recovered Global ~</Typography>
            <Typography variant="h5">-- {<CountUp start={0} end={props.Gdata.recovered.value} duration={3} separator="," />} --</Typography>
            <Typography color="textSecondary">{`>> ${formatDate} <<` }</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} className={styles.cell}>
          <CardContent>
            <Typography  gutterBottom> Global Deaths: COVID-19 </Typography>
            <Typography variant="h5">--   {<CountUp start={0} end={props.Gdata.deaths.value} duration={3} separator="," />} --</Typography>
            <Typography color="textSecondary">{`>> ${formatDate} <<` }</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;