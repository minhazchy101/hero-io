import { createBrowserRouter } from "react-router";
import App from "../App";
import { Suspense } from "react";
import Loader from "../reuse-components/Loader";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import AppDetails from "../pages/AppDetails";
import ErrorPage from "../reuse-components/ErrorPage";
import Installation from "../pages/Installation";

const appPromise = fetch("/apps.json").then((res) => res.json());

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/> ,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Home appPromise={appPromise} />
          </Suspense>
        ),
      },
      {
        path: "apps",
        element: (
          <Suspense fallback={<Loader />}>
            <Apps appPromise={appPromise} />
          </Suspense>
        ),
      },
      {
        path: "app-details/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <AppDetails appPromise={appPromise} />
          </Suspense>
        ),
      },
      {
        path: 'installation',
        element : <Suspense fallback={<Loader />}>
            <Installation appPromise={appPromise} />
          </Suspense>
      }
    ],
  },
]);
