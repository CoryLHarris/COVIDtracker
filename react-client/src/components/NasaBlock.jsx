import React from 'react';

const NasaBlock = (props) => {
  //destructure the object from props
  const { title, url, hdurl, explanation, date, copyright } = props.data;
  return(

  <div className = "NasaBlock">
    <h4 className = "NasaBlock-title">{title}</h4>
    <a href={hdurl} className="NasaBlock-image-anchor">
      <img src={url} alt={title} />
    </a>
    <p>{explanation}</p>
    <span> {date}, {copyright}</span>
  </div>
  )
}

export default NasaBlock;