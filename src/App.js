import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
// import Allroutes from "./routes/routes";

function App() {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={route.element}
        >
          {route.children.map((childrenRoute)=>(
            <Route path={childrenRoute.path} key={childrenRoute.path} element={childrenRoute.element}/>
          ))}
        </Route>
      ))}
    </Routes>
  );
}

export default App;
