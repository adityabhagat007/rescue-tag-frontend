import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import Page404 from "../pages/page404";
import AboutPage from "../pages/aboutUsPage";
import LoginPage from "../pages/loginPage";
import SignUpPage from "../pages/signUpPage";
const allRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default allRoutes;
