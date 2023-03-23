import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { routes } from "./constants/routes";

const routeList = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routes.map(({ exact, path, element }) => (
        <Route key={path} exact={exact} path={path} element={element} />
      ))}
    </>
  )
);

export const App = () => {
  return <RouterProvider router={routeList} />;
};
