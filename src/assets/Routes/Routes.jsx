import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Error from "../Components/Error/Error";
import Home from "../Components/Main/Home/Home";
import Statistics from "../Components/Main/Statistics/Statistics";
import Dashboard from "../Components/Main/Dashboard/Dashboard";
// import PageWithDynamicTitle from "../Components/TitleChange/TitleChange";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element:<Home title="Home Page"></Home>
                // element: <PageWithDynamicTitle title="Home Page"><Home></Home></PageWithDynamicTitle>
            },
            {
                path: "statistics",
                element:<Statistics title="Statistics Page"></Statistics>
                // element: <PageWithDynamicTitle title="Statistics Page"><Statistics></Statistics></PageWithDynamicTitle>
            },
            {
                path: "dashboard",
                element:<Dashboard title="Dashboard Page"></Dashboard>
                // element: <PageWithDynamicTitle title="DashBoard Page"><Dashboard></Dashboard></PageWithDynamicTitle>
            }
        ]
    },

]);
export default router;