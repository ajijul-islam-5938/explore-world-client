import { useContext, useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import swal from "sweetalert";

const MyList = () => {
  const [myList,setMyList] = useState([]);
  const {user} = useContext(AuthContext);
  useEffect(()=>{
    fetch(`https://southeast-tourist-server.vercel.app/alltouristspot/mylist/${user.email}`)
    .then(res => res.json())
    .then(data => setMyList(data))
  },[])
  const handleDelete = (id) => {
    fetch(`https://southeast-tourist-server.vercel.app/alltouristspot/${id}`, {
      method: "DELETE"
    })
    .then(res => {
      if (res.ok) {
        // Successful deletion
        swal("Logged Out", "Successfully Logged Out", "success");
      } else {
        // Failed deletion
        throw new Error("Failed to delete");
      }
    })
    .catch(err => {
      swal("Failed", `${err.message}`, "error");
    });
  };
  
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
          {myList?.map((list) => (
            <tr key={list._id}>
              <th>{list.spotName}</th>
              <td>{list.location}</td>
              <td>{list.countryName}</td>
              <td>
                <div className="flex gap-2 items-center">
                  <Link to={`/alltouristspot/mylist/${user.email}/${list._id}`}>
                    <button className="btn btn-xs btn-info">Update</button>
                  </Link>
                  <button onClick={() => handleDelete(list._id)} className="btn btn-xs btn-error">Delete</button>
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
