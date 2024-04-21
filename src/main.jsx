import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LandingPage from "./pages/landingPage";
import './index.css';
import Results from "./pages/results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage>
  },
  {
    path: "/result",
    element: <Results></Results>
  },
]);

createRoot(document.getElementById("root")).render(

  <RouterProvider router={router} />


);
