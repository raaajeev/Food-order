import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";

const AboutUs = lazy(() => import("./components/AboutUs"));
const ContactUs = lazy(() => import("./components/ContactUs"));

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading....</h1>}><AboutUs /></Suspense>
            },
            {
                path:"/contact",
                element:<Suspense fallback={<h1>Loading....</h1>}><ContactUs /></Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />
            }
        ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);