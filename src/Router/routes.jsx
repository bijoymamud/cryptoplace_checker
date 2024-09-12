import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Components/Layout/Main";
import Home from "../Components/Pages/Home/Home/Home";
  

export const router = createBrowserRouter([
    {
      path: "/",
        element: <Main />,
        children: [{
            path: "/",
            element: <Home/>
      }]
    },
  ]);