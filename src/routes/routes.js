import HomeLayout from "../layout/homeLayout";
import AboutUsPage from "../pages/aboutUsPage";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import SignUpPage from "../pages/signUpPage";



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
]
