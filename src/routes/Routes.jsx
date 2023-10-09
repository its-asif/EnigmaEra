
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Roots from "../layouts/Roots";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoutes";
import CardDetails from "../pages/CardDetails";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Blogs from "../pages/Blogs";
import Books from "../pages/Books";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path: '/books',
                element: <PrivateRoute><Books></Books></PrivateRoute>
            },
        ]
    }
])

export default routes;