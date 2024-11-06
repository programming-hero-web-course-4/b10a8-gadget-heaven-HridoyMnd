import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Error from "../Components/Error/Error";
import Home from "../Components/Main/Home/Home";
import Statistics from "../Components/Main/Statistics/Statistics";
// import Dashboard from "../Components/Main/Dashboard/Dashboard";
// import Details from "../Components/Main/Home/Details/Details";
import Purchased from "../Components/Main/Purchased/Purchased";
// import GadgetCards from "../Components/Main/Home/GadgetCards/GadgetCards";
import Dashboard from "../Components/Main/Dashboard/Dashboard";
import Details from "../Components/Main/Home/Details/Details";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        loader: () => fetch('Gadget.json'),
        children: [
            {
                path: "/",
                element:<Home title="Home Page"></Home>,
                
            },
            {
                path: "statistics",
                element:<Statistics title="Statistics Page"></Statistics>
            },
            {
                path:'dashboard',
                element:<Dashboard title="Dashboard Page"></Dashboard>
            },
            {
                path:"purchased",
                element:<Purchased title="Purchased Page"></Purchased>,
            },
            {
                path:'details',
                element:<Details></Details>
            }

        ]
    },

]);
export default router;