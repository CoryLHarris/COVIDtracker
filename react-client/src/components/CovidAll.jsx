import React from 'react';
import CovidState from "./CovidState.jsx";

const CovidAll = ({data}) => (

   <div className = "CovidAll">
    <h4 className = "CovidAll-date">Title.CovidAll.jsx</h4>
    <div>
    {
      data.map((StateData) =>(
    <CovidState key={StateData.state} stateCovid={StateData} />
    ))
    }
    </div>
  </div>

)

export default CovidAll;