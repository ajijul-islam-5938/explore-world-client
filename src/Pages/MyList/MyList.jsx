import { useContext, useEffect, useState } from "react";
import { Link, Navigate} from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import swal from "sweetalert";
import Swal from 'sweetalert2'


const MyList = () => {
  const [myList,setMyList] = useState([]);
  const {user} = useContext(AuthContext);

  useEffect(()=>{
    fetch(`https://southeast-tourist-server.vercel.app/alltouristspot/mylist/${user.email}`)
    .then(res => res.json())
    .then(data => setMyList(data))
  },[])
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://southeast-tourist-server.vercel.app/alltouristspot/${id}`, {
          method: "DELETE"
        })
        .then(res => {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          <Navigate to="/"/>
        })
      }
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
