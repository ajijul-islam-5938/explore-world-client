import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TouriestSpots = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/alltouristspot")
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);

  return (
    <div className="container mx-auto px-1 py-8">
      <h1 className="text-3xl font-bold my-20 text-center">
        Tourist Spots
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {spots.map((spot) => (
          <div
            key={spot._id}
            className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden border border-zinc-200"
          >
            <img
              src={spot.image}
              alt="Tourist Spot Image"
              className="w-full h-40 object-cover object-center rounded-t-lg"
            />
            <div className="p-3">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-white mb-4">
                {spot.spotName}
              </h2>
              <ul className="space-y-1 text-base text-zinc-700 dark:text-zinc-300 mb-4">
                <li>
                  <strong>Country:</strong> {spot.countryName}
                </li>
                <li>
                  <strong>Average Cost:</strong> ${spot.averageCost} per person
                </li>
                <li>
                  <strong>Best Time to Visit:</strong> {spot.seasonality}
                </li>
                <li>
                  <strong>Travel Time:</strong> {spot.travelTime} from major
                  cities
                </li>
                <li>
                  <strong>Estimated Visitors Per Year:</strong>{" "}
                  {spot.totalVisitorsPerYear}
                </li>
              </ul>
              <Link to={`/touriestspots/viewdetails/${spot._id}`}>
                <button className="block w-full bg-blue-500 dark:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouriestSpots;
