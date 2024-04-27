import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import NotFound from "../Pages/404/404";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTouriestSpots from "../Pages/AddTouriestSpots/AddTouriestSpots";
import TouriestSpots from "../Pages/TouriestSpots/TouriestSpots";
import MyList from "../Pages/MyList/MyList";

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
            element : <TouriestSpots/>
        },
        {
            path : "/mylist",
            element: <MyList/>
        }
      ]
    },
    {
        path: "*",
        element: <NotFound/>
    }
  ]);

export default router;