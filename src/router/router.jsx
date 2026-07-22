import { createBrowserRouter } from "react-router";
import Layout from "../comps/layout/Layout";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about-us",
                element: <About />
            },
            {
                path: "contact-us",
                element: <Contact />
            },
            {
                path: "signup",
                element: <SignUp />
            },
            {
                path: "signin",
                element: <SignIn />
            },
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <Profile/>
                    </ProtectedRoute>
                )
            }        
        ]
    }
])

export default router