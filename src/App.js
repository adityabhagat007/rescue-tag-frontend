import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoute, publicRoutes } from "./routes/routes";
import FallbackUI from "./components/Loader/FallbackUI";
import UsePrivateRoute from "./routes/privateRoutes";



function App() {
  return (
    <Suspense fallback={<FallbackUI/>}>
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={route.element} key={route.path}>
          {route.children.map((childrenRoute) => (
            <Route
              path={childrenRoute.path}
              key={childrenRoute.path}
              element={childrenRoute.element}
            />
          ))}
        </Route>
      ))}
      <Route element={<UsePrivateRoute/>}>
      {privateRoute.map((route) => (
        <Route element={route.element} key={route.path}>
          {route.children.map((childrenRoute) => (
            <Route
              path={childrenRoute.path}
              key={childrenRoute.path}
              element={childrenRoute.element}
            />
          ))}
        </Route>
      ))}
     </Route>
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
