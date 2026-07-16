import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import AboutMe from "../pages/AboutMe";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <MainLayout />,
                children : [
                    { path: '/', element: <AboutMe /> },
                    { path: '/resume', element: <Resume /> },
                    { path: '/portfolio', element: <Portfolio />,
                        children: [
                            { path: ':category', element: <Portfolio /> }
                        ]
                    },
                    { path: '/contact', element: <Contact /> }
                ]
            }
        ]
    }
])

export default router