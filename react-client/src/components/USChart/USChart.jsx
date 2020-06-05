  import React, {useState,useEffect} from 'react';
  import {USDailyData} from '../../asyncHelpers';
  import { Line, Bar } from 'react-chartjs-2';
  import styles from "./USChart.module.css"




const USChart = () => {
  const [USdaily, setUSDaily] = useState([]);

  useEffect( ()=> {
    const fetchingUSD = async () => {
      //let daily = await dailyData();
      setUSDaily(await USDailyData());
    }

    fetchingUSD()
  }, [] );


  let lineChart = (

    USdaily.length ? (<Line
      data={{
      labels: USdaily.map(({date}) =>date),
      datasets: [{
        data: USdaily.map(({ deaths }) => deaths),
        label: 'Deaths',
        borderColor: "red",
        backgroundColor:'rgba(255,0,0,0.3)',
        fill: true,
      },
      {
        data: USdaily.map(({ confirmed }) => confirmed),
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

export default USChart;