// CountriesList.tsx

import React from 'react';
import { CountryInterface } from '@/interfaces/CountryInterface';
import CountryCard from './CountryCard';

interface CountriesListProps {
    countries: CountryInterface[];
}

const CountriesList: React.FC<CountriesListProps> = ({ countries }) => {
    return (
        <div className="photo-list">
            {countries.map((country) => (
                <CountryCard key={country.countryId} country={country} />
            ))}
        </div>
    );
};

export default CountriesList;
