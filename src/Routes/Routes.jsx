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
import CountryBased from "../Components/CountryBased/CountryBased";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addtouriestspots",
        element: <PrivateRoute><AddTouriestSpots /></PrivateRoute>,
      },
      {
        path: "/touriestspots",
        element: <AllTouriestSpots />,
      },
      {
        path: "/alltouristspot/mylist",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://southeast-tourist-server.vercel.app/alltouristspot/mylist/${params.email}`),
      },
      {
        path: "/touriestspots/viewdetails/:id",
        element: <PrivateRoute><ViewDetails /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://southeast-tourist-server.vercel.app/alltouristspot/${params.id}`),
      },
      {
        path: "/alltouristspot/mylist/:email/:id",
        element: <PrivateRoute><Update /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(
            `https://southeast-tourist-server.vercel.app/alltouristspot/mylist/${params.email}/${params.id}`
          ),
      },
      {
        path: "/countries/:name",
        element: <CountryBased />,
        loader: ({ params }) => fetch(`https://southeast-tourist-server.vercel.app/countries/${params.name}`),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
