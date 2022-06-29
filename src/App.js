import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './components/pages/HomePage';
import CountriesListPage from './components/pages/CountriesListPage';
import CountryDetailsPage from './components/pages/CountryDetailsPage';
import { Route, Routes } from 'react-router-dom';
import countriesData from './countries.json';


function App() {
  return (
    <div className="App">
      <Navbar/>  
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/countries/" element={<CountriesListPage countries ={countriesData}/>}/>
          <Route path="/countries/:courtryAlpha3Code" element={<CountryDetailsPage/>} />
        </Routes>
   
    </div>
  );
}
export default App;

