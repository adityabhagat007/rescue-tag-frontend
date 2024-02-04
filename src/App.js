import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoute, publicRoutes } from "./routes/routes";
import { Backdrop } from "@mui/material";
import SimpleBackdrop from "./components/BackdropComponent";

function App() {
  return (
    <Suspense fallback={<SimpleBackdrop/>}>
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={route.element}>
          {route.children.map((childrenRoute) => (
            <Route
              path={childrenRoute.path}
              key={childrenRoute.path}
              element={childrenRoute.element}
            />
          ))}
        </Route>
      ))}
      {privateRoute.map((route) => (
        <Route element={route.element}>
          {route.children.map((childrenRoute) => (
            <Route
              path={childrenRoute.path}
              key={childrenRoute.path}
              element={childrenRoute.element}
            />
          ))}
        </Route>
      ))}
      <Route
        path="*"
        element={
          <>
            <h1>404 page not found</h1>
          </>
        }
      />
    </Routes>
    </Suspense>
  );
}

export default App;
