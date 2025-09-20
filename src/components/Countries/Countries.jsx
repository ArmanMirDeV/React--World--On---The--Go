/* function Countries(){
    return(
        <div>

        </div>
    )
}

//-----------------------

const Countries = () =>{
    return(
        <div> </div>
    )
} */


import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
  

    return (
        <div>
            <h1>In The Countries...</h1>
            <div className='countries' >
        { 
                countries.map(country  => <Country 
                    key={country.cca3.cca3}
                    country={country} ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;