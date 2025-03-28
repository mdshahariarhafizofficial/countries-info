import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countries}) => {
    const allCountries = use(countries)
    // console.log(allCountries);

    return (
        <div>
            <h1>Countries: {allCountries.length}</h1>
            <div>
                {
                    allCountries.map( country =>  <Country countryInfo = {country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;