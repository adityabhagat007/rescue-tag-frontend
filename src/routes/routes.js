import React from "react";
import AppLayout from "../layout/appLayout";


const HomeLayout = React.lazy(()=>import("../layout/homeLayout"));
const LoginPage = React.lazy(()=> import("../pages/loginPage"));
const SignUpPage = React.lazy(()=>import("../pages/signUpPage"));
const HomePage = React.lazy(()=>import("../pages/homePage"));
const AboutUsPage =React.lazy(()=>import("../pages/aboutUsPage"));

export const  ROUTE_PATH = {
  DEFAULT: "/",
  ABOUT:"/about",
  LOGIN:"/login",
  SIGNUP:"/signup",
  DASHBOARD:"/dashboard"
}



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
      {
        path:"/dashboard/home",
        element:<HomePage/>
      }
    ]
  }
]
