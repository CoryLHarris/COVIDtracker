import React, {useState,useEffect} from 'react';
import {dailyData} from '../../asyncHelpers';
import { Line, Bar } from 'react-chartjs-2';
import styles from "./Chart.module.css"




const Chart = () => {
  const [daily, setDaily] = useState([]);

  useEffect( ()=> {
    const fetching = async () => {
      //let daily = await dailyData();
      setDaily(await dailyData());
    }

    fetching()
  }, [] );


  let lineChart = (

    daily.length ? (<Line
      data={{
      labels: daily.map(({date}) => date),
      datasets: [{
        data: daily.map(({ deaths }) => deaths),
        label: 'Deaths',
        borderColor: "red",
        backgroundColor:'rgba(255,0,0,0.3)',
        fill: true,
      },
      {
        data: daily.map(({ confirmed }) => confirmed),
        label: 'Infected',
        borderColor:"blue",
        backgroundColor:'rgba(0,0,255,0.3)',
        fill: true,
      }]
      }} />) : null
  );

  return (
    <div className={styles.container}>{lineChart}</div>
  )
}

export default Chart;