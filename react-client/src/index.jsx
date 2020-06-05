import React from 'react';
import ReactDOM from 'react-dom';
import CovidAll from './components/CovidAll/CovidAll.jsx';
import CovidState from './components/CovidState/CovidState.jsx'
import USChart from './components/USChart/USChart.jsx';
import Display from './components/Display/Display.jsx';
import Chart from './components/Chart/Chart.jsx';
import Country from './components/Country/Country.jsx';
import styles from './index.module.css';

//api global functions
import {fetchData, USFetchData } from './asyncHelpers'
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CovidUSHist: [],
      CovidAll: [],
      dataG: {},
      dataUS:{},
      USstate: '',
      data: [],

    }
    this.getCovid = this.getCovid.bind(this);
    this.getCovidUSH = this.getCovidUSH.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  async componentDidMount() {
    //async fetching global data from api helper folder functions
    const dataFetched = await fetchData();
    const USDataFetched = await USFetchData();
    this.setState({ dataG:dataFetched, dataUS:USDataFetched })
    this.getCovid()
    this.getCovidUSH()

  }






//get by USA STATE
  getCovid(){
    Axios.get('/api')
    .then(response => {

      //this.setState({ CovidAll: response.data })
      this.setState({CovidAll:response.data})
    })
    .catch(err => {
      console.log(err, ' failed to get covid in client')

    })
  }
//get history USA
  getCovidUSH(){
    Axios.get('/api/history')
    .then(response => {

      this.setState({CovidUSHist:response.data})
    })
    .catch(err => {
      console.log(err, ' failed to get covid in client')
    })
  }

  handleStateChange(USstate){
    //Axios.get(`https://corona.lmao.ninja/v2/state`)
    // .then(({data}) => {
    //   const dataFormating = {
    //     confirmed: data.active,
    //     recovered: data.recovered,
    //     deaths: data.deaths,
    //     lastUpdate:  new Date(data.updated).toDateString()
    //   }
    //   this.setState({data: dataFormating})
    //   this.setState({USstate:data.state})
    // }
    // .catch(err => {
    //   console.log(err, ' failed to get covid in client')
    }






  render () {
    return (
      <div  >

        <div className={styles.container}>
          <Country />
          <Chart />
          <Display Gdata={this.state.dataG}/>
          <CovidAll data={this.state.dataUS} />
          <CovidState handleStateChange = {this.handleStateChange}/>
          <USChart />
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));