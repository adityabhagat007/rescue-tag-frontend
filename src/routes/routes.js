import { BrowserRouter ,Route, Routes } from "react-router-dom";
import Home from "../pages/homPage";

const Allroutes = () =>{
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Allroutes;