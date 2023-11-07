'use client'

import React from "react";

import './CountryCard.css';
import CountriesList from "@/components/CountriesList";

const CountriesPage = () => {

  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    try {
      await fetch('https://localhost:7289/api/countries')
        .then(response => response.json())
        .then(data => setCountries(data))
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center text-cyan-900">Countries</h1>
        <hr></hr>

        <div>
          <CountriesList countries={countries.slice(0, 6)} />
        </div>

      </div>
    </>
  )
};

export default CountriesPage;
