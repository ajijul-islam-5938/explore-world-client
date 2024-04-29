import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const ViewDetails = () => {
  const spot = useLoaderData();
  return (
    <div>
      <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden border border-zinc-200">
        <img
          src={spot.image}
          alt="Tourist Spot Image"
          className="w-full h-80 object-cover object-center rounded-t-lg"
        />
        <div className="p-6">
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
              <strong>Travel Time:</strong> {spot.travelTime} from major cities
            </li>
            <li>
              <strong>Estimated Visitors Per Year:</strong>{" "}
              {spot.totalVisitorsPerYear}
            </li>
          </ul>
          <Link to="/">
            <button className="block w-full bg-blue-500 dark:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors">
             Go to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
