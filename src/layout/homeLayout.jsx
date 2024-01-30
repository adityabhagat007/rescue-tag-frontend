import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import SnackBarComponent from "../components/AlertComponents/SnackBarComponent";

export default function HomeLayout(props){
  console.log("HomeLayout.........................")
  return (
    <>
     <Stack>
        <div className="landing-Navbar">
        <Navbar/>
        </div>
        <div className="home-page-content">
          <SnackBarComponent/>
          <Outlet/>
        </div>
        <div className="footer" style={{paddingTop:"10%"}}>
        <Footer/>
        </div>
     </Stack>
    </>
  );
};

