import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/routes";


function App() {
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          element={route.element}
        >
          {route.children.map((childrenRoute) => (
            <Route path={childrenRoute.path} key={childrenRoute.path} element={childrenRoute.element} />
          ))}
        </Route>
      ))}
      <Route path="*" element={<><h1>404 page not found</h1></>} />
    </Routes>
  );
}

export default App;
