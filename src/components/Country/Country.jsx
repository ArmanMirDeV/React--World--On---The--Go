import React from 'react';

const Country = ({ country }) => {

    console.log(country)
    return (
        <div >
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
          <h3>  Name: {country.name.common}</h3>
          <h5>Official Name: {country.name.official}</h5>
          <p>Population: {country.population.population} </p>
          <p>Capital City: {country.capital.capital}</p>
          <p>Area: {country.area.area}</p>
          <p>Languages: {country.continents.continents}</p>

        </div>
    );
};

export default Country;