import React from 'react';
import { useState, useEffect } from "react";

function CountriesListPage (props) {
  const [countries, setCountries] = useState([]);

  // This effect depends on `props.projects`.
  // It will run on initial render and every time
  // when the `props.projects` gets updated.
  useEffect(() => {
    setCountries(props.countries);
  }, [props.countries]);


  return (
    <div>
      <h1>List of countries</h1>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code} className="country">
            <h3> {country.name.common}</h3>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <p>Borders: {country.borders}</p>


          </div>
        );
      }) 
    }
    </div>
  );
}

export default CountriesListPage;
            
