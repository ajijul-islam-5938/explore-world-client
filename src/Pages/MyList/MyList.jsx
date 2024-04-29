import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const MyList = () => {
  const myList = useLoaderData();
  const {user} = useContext(AuthContext)
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>{myList.length}</th>
            <th>Location</th>
            <th>Country Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myList.map((list) => (
            <tr key={list._id}>
              <th>{list.spotName}</th>
              <td>{list.location}</td>
              <td>{list.countryName}</td>
              <td>
                <div className="flex gap-2 items-center">
                  <Link to={`/alltouristspot/mylist/${user.email}/${list._id}`}>
                    <button className="btn btn-xs btn-info">Update</button>
                  </Link>
                  <button className="btn btn-xs btn-error">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
