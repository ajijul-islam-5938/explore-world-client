import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../Pages/404/404";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTouriestSpots from "../Pages/AddTouriestSpots/AddTouriestSpots";
import MyList from "../Pages/MyList/MyList";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import AllTouriestSpots from "../Pages/AllTouriestSpots/AllTouriestSpots";
import Update from "../Pages/Update/Update";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children: [
        {
            path: "/",
            element : <Home/>
        },
        {
            path: "/login",
            element : <Login/>
        },
        {
            path: "/register",
            element : <Register/>
        },
        {
            path: "/addtouriestspots",
            element : <AddTouriestSpots/>
        },
        {
            path : "/touriestspots",
            element : <AllTouriestSpots/>
        },
        {
            path : "/alltouristspot/mylist/:email",
            element: <PrivateRoute><MyList/></PrivateRoute>,
            loader : ({params})=> fetch(`http://localhost:3000/alltouristspot/mylist/${params.email}`)
        },
        {
            path: "/touriestspots/viewdetails/:id",
            element:<ViewDetails/>,
            loader: ({params})=> fetch(`http://localhost:3000/alltouristspot/${params.id}`)
        },
        {
            path: "/alltouristspot/mylist/:email/:id",
            element: <Update/>,
            loader : ({params})=> fetch(`http://localhost:3000/alltouristspot/mylist/${params.email}/${params.id}`)
        }
      ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
  ]);

export default router;