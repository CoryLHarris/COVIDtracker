import React ,{ useState, useEffect }from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import {getStates} from '../../asyncHelpers'
import styles from './CovidState.module.css'

const CovidState = (props) => {
  const [stateData,setStateData] = useState([])
useEffect(() => {
  const stateDataAPI = async () => {
    setStateData(await getStates())
  }
  stateDataAPI();
},[setStateData]);

  return (
    <FormControl className ={styles.formControl}>
      <NativeSelect defaultValue = "" onChange= {(event) => (props.handleStateChange(event.target.value)) }>

      <option value="US">US</option>

      { stateData.map((state,index) => <option  value={state} key={index}>{state}</option>)}
      </NativeSelect>

      </FormControl>

      );
}

export default CovidState;


