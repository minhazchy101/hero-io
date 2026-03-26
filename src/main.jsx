import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router' 
import { RouterProvider } from "react-router/dom";

import { router } from './Route/routers.jsx';

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)