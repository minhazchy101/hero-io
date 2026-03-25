import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router' 
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.jsx';
import Apps from './pages/Apps.jsx';
import Loader from './reuse-components/Loader.jsx';
 const appPromise = fetch('/apps.json').then(res => res.json())
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { index: true,
       element: 
       <Suspense fallback={<Loader/>}>
      <Home appPromise={appPromise}/>
      </Suspense> },
      { path: "apps",
      element: <Suspense fallback={<Loader/>}>
      <Apps appPromise={appPromise}/>
      </Suspense> },]
  },
]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)