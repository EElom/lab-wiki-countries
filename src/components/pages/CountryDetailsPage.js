import React from 'react';
import countriesData from "./../../countries.json";
import {useParams, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';



function CountryDetailsPage (props) {
  const [foundCountry, setFoundCountry] = useState(null); 
  
  const { countryAlpha3Code } = useParams();
  console.log('countryAlpha3Code', countryAlpha3Code);  
 
  // This effect depends on the `projectId` value.
  // It will run on initial render, and every time
  // the `projectId` value updates.
  useEffect(() => {                                      
    const country = countriesData.find((countryObj) => {
      return countryObj.alpha3Code === countryAlpha3Code;
    })
 
    if (country) {
      setFoundCountry(country);
    }
    
  }, [countryAlpha3Code]);
 
 
  return (
    <div>
      <h1>Country Details</h1>
      
      {!foundCountry && <h3>Country not found!</h3>}
      
      {foundCountry && (
        <>
          <h2>{foundCountry.name.common}</h2>
          <p>{foundCountry.capital}</p>
          <p>{foundCountry.area}</p>
          <p>{foundCountry.borders}</p>

          <Link to="/countries">Back</Link>
        </>
      )}
    </div>
  )
}
 
export default CountryDetailsPage;