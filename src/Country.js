import React from "react";
import Weather from "./Weather";

const Country = ({ country }) => {

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p><b> Capital: </b>{country.capital}</p>
      <p><b> Area: </b> {country.area}</p>
      <h3>Language/s:</h3>
      <ul>
        {Object.keys(country.languages).map((language) => (
          <li key={language}>
            <i>{country.languages[language]}</i>
          </li>
        ))}
      </ul>
      <img src={country.flags.png} width={"250"} alt={country.name.common + " flag"} ></img>
      <h2>Weather in {country.capital}</h2>
      <Weather country={country}/>
      
    </div>
  );
};



export default Country;
