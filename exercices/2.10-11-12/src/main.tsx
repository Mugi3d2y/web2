import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { MoviesPage, HomePage, CinemasPage } from './components/App/index.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"",
        element:<HomePage/>
      },
      { 
        path:"/Movies",
        element: <MoviesPage/>,
      },
      {
        path:"/Cinemas",
        element:<CinemasPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
