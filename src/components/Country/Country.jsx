import React from 'react';
import './Country.css'

const Country = ({ country }) => {

    const handleVisited = () =>{
        console.log("Button Clicked")
    }

    console.log(country)
    return (
        <div className='country' >
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />

            <h3>  Name: {country.name.common}</h3>

            <h5>Official Name: {country.name.official}</h5>

            <p>Population: {country.population.population} </p>

            <p>Capital City: {country.capital.capital}</p>

            <p>
                Area: {country.area.area}
                {country.area.area > 300000 ? " - Big Country" : " - Small Country"}
            </p>

            <p>Languages: {country.continents.continents}</p>

            <button onClick={handleVisited} > Not Visited </button>

        </div>
    );
};

export default Country;


/* 
1. Inline Css (style object)

*/

