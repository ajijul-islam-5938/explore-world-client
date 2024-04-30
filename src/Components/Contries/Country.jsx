import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Country = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center my-20">Country</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {countries.map((country) => (
          <Link key={country._id} to={`/countries/${country.name}`}>
            <div className="p-4">
              <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md">
                <img
                  src="https://placehold.co/300x200"
                  alt="Country Image"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{country.name}</h3>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    {country.description.length > 100 ? country.description.slice(0,100) + "..." : country.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Country;
