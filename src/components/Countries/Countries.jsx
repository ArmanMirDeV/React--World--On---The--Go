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

const Countries = ({countriesPromise}) => {


    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);

    return (
        <div>
            <h1>In The Countries...</h1>
        </div>
    );
};

export default Countries;