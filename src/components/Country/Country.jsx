import React from 'react';
const Country = ({countryInfo}) => {
    return (
        <div>
            <img src={countryInfo.flags.png} alt="Country image" />
            <h1>Name: {countryInfo.name.common}</h1>
        </div>
    );
};

export default Country;