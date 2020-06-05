import React ,{ useState, useEffect }from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import {getCountries} from '../../asyncHelpers'
import styles from './Country.module.css'

const Country = () => {
  const [countryData,setCountryData] = useState([])
useEffect(() => {
  const countryDataAPI = async () => {
    setCountryData(await getCountries())
  }
  countryDataAPI();
},[setCountryData]);

  return (
    <FormControl className ={styles.forms}>
      <NativeSelect><option value="global">Global</option></NativeSelect>

      </FormControl>

      );
}

export default Country;