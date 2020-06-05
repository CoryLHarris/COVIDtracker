import axios from 'axios';
//Global data sets from different api, exerimenting async await
const url = 'https://covid19.mathdro.id/api'
const JHU = 'https://corona.lmao.ninja/v2/jhucsse'
const USurl ='https://corona.lmao.ninja/v2'

export const fetchData = async () => {
  try {
    const { data } = await axios.get('https://covid19.mathdro.id/api'); //url `${url}`


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

export const USFetchData = async () => {
  try {
    const { data } = await axios.get(`${USurl}/countries/US`); //url `${url}`

    const dataFormating = {
      confirmed: data.active,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.updated
    }

    return dataFormating;
  } catch (error) {
    console.log("async catch error in api",error)
  }
}

export const dailyData = async () => {
  try {
    const {data} = await axios.get('https://covid19.mathdro.id/api/daily'); //`${url}/daily`

    const formatData = data.map((stuffDaily)=>({
      confirmed: stuffDaily.confirmed.total,
      deaths: stuffDaily.deaths.total,
      date: stuffDaily.reportDate
    }));
    return formatData
  }
  catch (error) {
    console.log("failed fetching daily updates in async helper api ", error)
  }
}

export const getCountries = async () => {
  try {
const {data:{countries}} = await axios.get(`${url}/countries`)

    return countries.map((country)=> country.name)
  } catch (err) {
console.log("Country selection error",err)
  }

}
