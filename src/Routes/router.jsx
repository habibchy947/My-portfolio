import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ProjectDetails from "../Pages/Details/ProjectDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/projectDetails/:id',
                element:<ProjectDetails></ProjectDetails>
            }
        ]
    }
])