import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/mainLayout";
import Home from "../Pages/Home";
import Tech from "../Pages/Tech";
import AboutMe from "@/Pages/AboutMe";
import Work from "@/Pages/Work";
import ProjectDetails from "@/Pages/ProjectDetails";
import Contact from "@/Pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                
            },
            {
                path: "/about",
                element: <AboutMe />
            },
            {
                path: "/tech",
                element: <Tech />
            },
            {
                path: '/project',
                element: <Work />,
                
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/details/:id',
                element: <ProjectDetails />,
                loader: () => fetch('/project.json')
        }

        ],
    },
    {
        path: "*",
        element: <h2>Not Found</h2>,
    },
]);

export default router;
