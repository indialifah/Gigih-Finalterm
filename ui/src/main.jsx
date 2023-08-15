import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import HomeRoute, { loader as HomeLoader } from './routes/Home'
import DetailsRouter, { loader as DetailsLoader } from './routes/Details'
import './index.css'


const router = createBrowserRouter([
  {path: '/',
   element: <RootLayout/>,
   children: [
    {path: '/', element: <HomeRoute />, loader: HomeLoader},
    {path: ':video_id', element: <DetailsRouter />, loader: DetailsLoader}
   ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
