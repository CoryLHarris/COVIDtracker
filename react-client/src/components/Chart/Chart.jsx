import React, {useEffect, useState} from 'react';
import {dailyData} from '../../api';
import { Line, Bar } from 'react-chartjs-2'
const Chart = () => {
  const [daily, setData] = useState({});

  useEffect( ()=> {
    let fetching = async () => {
      let daily = await dailyData();
      setData(daily)
    }
    fetching();
  })

  let lineChart = ();



  return (
    <h1>Chart</h1>
  )
}

export default Chart;