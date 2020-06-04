var express = require('express');
var bodyParser = require('body-parser');
const PORT = 3000;
var app = express();
var axios = require("axios");
const cors = require('cors');

app.use(cors());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.json());
//grab today all states
app.get('/api', (req, res) => {
  console.log(req.body,req.params,req.query)
  axios.get(`https://covidtracking.com/api/states`)
  .then( response => {
    console.log(`response in server${response.data}`)
    res.send(response.data);
  })
  .catch((err)=>{
    console.log("err in server catch: ",err)
  })
});
//grab history US
app.get('/api/history', (req, res) => {
  console.log(req.body,req.params,req.query)
  axios.get(`https://covidtracking.com/api/us/daily`)
  .then( response => {
    console.log(`response in server USH ${response.data}`)
    res.send(response.data);
  })
  .catch((err)=>{
    console.log("err in server catch USH: ",err)
  })
});

app.listen(3000, () => {
  console.log('listening on port 3000!');
});