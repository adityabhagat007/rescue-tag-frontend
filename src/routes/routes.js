import React from "react";
import AppLayout from "../layout/appLayout";
import HomeLayout from "../layout/homeLayout";
import AboutUsPage from "../pages/aboutUsPage";
import HomePage from "../pages/homePage";

import SignUpPage from "../pages/signUpPage";

const LoginPage = React.lazy(()=> import("../pages/loginPage"))

export const publicRoutes = [
  {
    path:"/",
    element:<HomeLayout/>,
    children:[
      {
        path:"",
        element:<HomePage/>
      },
      {
        path:"/about",
        element:<AboutUsPage/>
      },
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/signup",
        element:<SignUpPage/>
      }
    ]
  }
]



export const privateRoute = [
  {
    path:"",
    element:<AppLayout/>,
    children:[
      {
        path:"/dashboard",
        element:<HomePage/>
      },
    ]
  }
]
