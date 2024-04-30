import { key } from 'localforage';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CountryBased = () => {
    const countries = useLoaderData()
    console.log(countries);
    return (
        <div>
            <h1 className="text-3xl text-center font-bold my-32"> Country Based Tourist Spot</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    countries.map(country =>
                        <div key={country._id} className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden">
                            <img src={country.image} alt="Tourist Spot" className="w-full h-48 object-cover object-center" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-zinc-800 dark:text-white">SpotName: {country.spotName}</h2>
                                <p className="text-sm text-zinc-600 dark:text-zinc-300">Country : {country.countryName}</p>
                                <p className="text-sm text-zinc-600 dark:text-zinc-300">description : {country.shortDescription} </p>
                                <p className="text-sm text-zinc-600 dark:text-zinc-300">Average Cost: {country.averageCost}</p>
                                <p className="text-sm text-zinc-600 dark:text-zinc-300">Seasonality: {country.seasonality}</p>
                                <Link to={`/touriestspots/viewdetails/${country._id}`}><button className="bg-blue-500 text-white p-2 rounded-lg mt-2 w-full">View Details</button></Link>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default CountryBased;