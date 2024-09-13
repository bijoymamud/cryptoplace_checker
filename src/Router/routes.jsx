import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Components/Layout/Main";
import Home from "../Components/Pages/Home/Home/Home";
import CoinInfo from "../Components/Pages/CoinInfo/CoinInfo";
  

export const router = createBrowserRouter([
    {
      path: "/",
        element: <Main />,
    children: [
      {
            path: "/",
        element: <Home />,
          
         
      },

      {
        path: "coin/:coinId",
        element: <CoinInfo></CoinInfo>
      }

    ]
    },
  ]);