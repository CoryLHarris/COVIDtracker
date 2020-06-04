import axios from 'axios';
//Global data sets from different api, exerimenting async await
const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    console.log(data)

    const dataFormater = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate
    }

    return dataFormater;
  } catch (error) {
    console.log("async catch error in api",error)
  }
}

export const dailyData =async () => {
  try {
    const response = await axios.get(`${url}/daily`)
  } catch
}
