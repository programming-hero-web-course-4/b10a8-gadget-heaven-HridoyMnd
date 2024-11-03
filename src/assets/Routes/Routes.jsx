import {
    createBrowserRouter
} from "react-router-dom";
import App from "../../App";
import Error from "../Components/Error/Error";
import Home from "../Components/Main/Home/Home";
import Statistics from "../Components/Main/Statistics/Statistics";
import Dashboard from "../Components/Main/Dashboard/Dashboard";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>
            }
        ]
    },

]);
export default router;