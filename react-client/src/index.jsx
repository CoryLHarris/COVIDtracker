import React from 'react';
import ReactDOM from 'react-dom';
import CovidAll from './components/CovidAll.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CovidUSHist: [],
      CovidAll: []
    }
    this.getCovid = this.getCovid.bind(this);
    this.getCovidUSH = this.getCovidUSH.bind(this);
  }

  componentDidMount() {
    this.getCovid()
    this.getCovidUSH()
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
    <div>
      <h1>App</h1>
    </div>

    <div><CovidAll data={this.state.CovidAll} /></div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));