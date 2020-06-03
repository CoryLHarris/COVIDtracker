import React from 'react';
import ReactDOM from 'react-dom';
import NasaBlock from './components/NasaBlock.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      nasa: 42
    }
    this.getPicOfDay = this.getPicOfDay.bind(this);
  }

  componentDidMount() {
    this.getPicOfDay()
  }

  getPicOfDay(){
    Axios.get('/picOfDay')
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err, ' failed to get pic of the day in client')
      this.setState({ nasa: response.data })
    })
  }

  render () {
    return (<div>
      <h1>Jeopardy</h1>
      <NasaBlock data={this.state.nasa} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));