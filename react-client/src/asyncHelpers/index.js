import axios from 'axios';
//Global data sets from different api, exerimenting async await
const dUSurl='https://covidtracking.com/api'
const url = 'https://covid19.mathdro.id/api'
const JHU = 'https://corona.lmao.ninja/v2/jhucsse'
const USurl ='https://corona.lmao.ninja/v2'
const Stateurl= 'https://covidtracking.com/api/states'

export const fetchData = async () => {
  try {
    const { data } = await axios.get(`${url}`);


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

export const USFetchStateData = async () => {
  try {
    const { data } = await axios.get(`${USurl}/state`); //url `${url}`

    const dataFormating = {
      confirmed: data.active,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate:  new Date(data.updated).toDateString()
    }

    return dataFormating;
  } catch (error) {
    console.log("async catch error in api",error)
  }
}

export const dailyData = async () => {
  try {
    const {data} = await axios.get(`${url}/daily`);

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

export const USDailyData = async () => {
  try {
    const {data} = await axios.get(`${dUSurl}/us/daily`);

    const formatData = data.map((stuffUSDaily)=>({
      confirmed: stuffUSDaily.positive,
      deaths: stuffUSDaily.death,
      date: stuffUSDaily.date
    }));
    return formatData.reverse()
  }
  catch (error) {
    console.log("failed fetching daily US updates in async helper api ", error)
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

export const getStates = async () => {
  try {
const {data} = await axios.get(`${USurl}/states`)
const stateNames = data.map((node)=> node.state)
console.log(stateNames, "this is stateNames")
    return stateNames
  } catch (err) {
console.log("Country selection error",err)
  }

}