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
            <Image src='https://via.placeholder.com/150/92c952' alt={country.countryName} width={100} height={100} />
            <h2>{country.countryName}</h2>
        </div>
    );
};

export default CountryCard;
