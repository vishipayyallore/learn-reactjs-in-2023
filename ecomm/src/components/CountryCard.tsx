// CountryCard.tsx

import Image from 'next/image';
import React from 'react';
import { CountryInterface } from '@/interfaces/CountryInterface';

interface CountryCardProps {
    country: CountryInterface;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
    return (
        <div className="country-card">
            <div className='align-top flex gap-4'>
                <Image src='https://via.placeholder.com/150/92c952' alt={country.countryName} width={100} height={100} />
                <div className='text-left'>
                    <h1 className='text-2xl text-blue-700'>{country.countryName}</h1>
                    <h2 className='text-xl text-blue-500'>{country.capitalState}</h2>
                    <h2 className='text-xl text-blue-400'>{country.nationalBird}</h2>
                    <h2 className='text-xl text-blue-400'>{country.countryPopulation}</h2>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;
