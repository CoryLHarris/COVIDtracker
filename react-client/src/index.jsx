import React from 'react';
import ReactDOM from 'react-dom';
import CovidAll from './components/CovidAll.jsx';

import Cards from './components/Cards/Cards.jsx';
import Chart from './components/Chart/Chart.jsx';
import Country from './components/Country/Country.jsx';
import styles from './index.module.css';

//api global functions
import {fetchData } from './api'
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CovidUSHist: [],
      CovidAll: [],
      dataG: {}
    }
    this.getCovid = this.getCovid.bind(this);
    this.getCovidUSH = this.getCovidUSH.bind(this);
  }

  async componentDidMount() {
    //async fetching global data from api folder function
    const dataFetched = await fetchData()
    this.setState({ dataG:dataFetched })
    this.getCovid()
    this.getCovidUSH()
    //console.log("dataFetched: ",dataFetched)
  }
//get by USA STATE
  getCovid(){
    Axios.get('/api')
    .then(response => {
      console.log(response.data)
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
      console.log(response.data,"this was history")

      this.setState({CovidUSHist:response.data})
    })
    .catch(err => {
      console.log(err, ' failed to get covid in client')
    })
  }

  render () {
    return (
      <div  >

        <div className={styles.container}>
          <Cards Gdata={this.state.dataG}/>
          <Country />
          <Chart />
        </div>

        <div>
          <CovidAll data={this.state.CovidAll} />
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));