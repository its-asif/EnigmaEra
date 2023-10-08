
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Roots from "../layouts/Roots";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoutes";
import CardDetails from "../pages/CardDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default routes;